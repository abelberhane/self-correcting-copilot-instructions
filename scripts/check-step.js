#!/usr/bin/env node
const fs = require('node:fs');
const { execFileSync } = require('node:child_process');
const { parseCorrection, assertTrusted, makeCandidate, validateCandidate, validateWithSchema, evaluatePolicy, parseRules, readYaml } = require('./lib');
const step = Number(process.argv[2] || process.env.STEP);
const fixture = JSON.parse(fs.readFileSync('test/fixtures/valid/correction.json', 'utf8'));
const tests = {
  1() { const config=readYaml('.github/learning-config.yml'); assert(config.command==='/copilot-learn' && config.trusted_associations.includes('OWNER') && config.trusted_associations.includes('MEMBER'), 'Configure the exact command and OWNER/MEMBER trust.'); assertTrusted(fixture,config); },
  2() { const c=make(); assert(validateWithSchema(c,'schemas/candidate.schema.json').valid, 'The generated candidate must satisfy the closed candidate schema.'); },
  3() {
    const parsed=parseCorrection(fixture.body);
    assert(parsed.category==='TEST', 'The valid correction must parse.');
    assertThrows(()=>parseCorrection(fixture.body+'\nshell: echo unsafe'),'not allowed','An undocumented "shell:" field');
    assertThrows(()=>parseCorrection(fixture.body+'\ncategory: STYLE'),'more than once','A duplicate "category:" field');
    assertThrows(()=>parseCorrection('Please run /copilot-learn\ncategory: TEST\nrule: x\nrationale: y\nscope: repository'),'first line','A comment that only mentions /copilot-learn mid-sentence');
  },
  4() { const workflow=read('.github/workflows/propose-instruction.yml'); for(const value of ['git switch -c','render-instructions.js','audit.js','gh pr create']) assert(workflow.includes(value),`Proposal workflow must perform ${value}.`); },
  5() { runTests(); },
  6() {
    const dir='data/candidates';
    const files=fs.existsSync(dir)?fs.readdirSync(dir).filter(f=>f.endsWith('.json')):[];
    assert(files.length>0, 'No candidate files in data/candidates/. Post a /copilot-learn correction on a pull request labeled copilot-authored, merge the candidate pull request the pipeline opens, then run "git pull --rebase origin main".');
    const contents=read('.github/copilot-instructions.md');
    const rules=parseRules(contents);
    const candidates=files.map(f=>JSON.parse(read(`${dir}/${f}`)));
    const merged=candidates.find(c=>rules.some(r=>r.id===c.id && r.state==='active'));
    assert(merged, `Found ${files.length} candidate file(s), but none render as an active rule. Merge the candidate pull request, then run "git pull --rebase origin main".`);
    assert(merged.provenance && merged.provenance.comment_id && merged.provenance.actor, `Candidate ${merged.id} is missing provenance. Every learned rule must link back to its correction comment.`);
    assert(fs.existsSync(`data/audit/${merged.id}.jsonl`), `No audit trail at data/audit/${merged.id}.jsonl. The proposal workflow must record an audit entry for every candidate.`);
    assert(contents.split('<!-- learned-rules:start -->')[0].includes('Automation MUST NOT modify this section.'), 'The maintainer-controlled section changed. Rendering must stay inside the learned-rules boundary.');
  },
  7() {
    const contents=read('.github/copilot-instructions.md');
    const rules=parseRules(contents);
    const retired=rules.filter(r=>r.state==='superseded'||r.state==='revoked');
    assert(retired.length>0, 'No superseded or revoked rule found. Post a /copilot-learn correction using "action: revoke" or "action: supersede" with a target_id that is currently active, then merge the resulting candidate.');
    for (const rule of retired) {
      assert(rule.rule && rule.category, `Rule ${rule.id} lost its body when it was retired. A lifecycle change must transition state, not delete the rule.`);
      const block=contents.split(`### ${rule.id}`)[1]?.split('\n### ')[0] || '';
      assert(block.includes('**Provenance:**'), `Rule ${rule.id} lost its provenance when it was retired. History must be preserved so the change can be audited and rolled back.`);
    }
  },
  8() { const policy=readYaml('.github/auto-merge-policy.yml'); assert(policy.enabled && policy.allowed_risk==='low', 'Enable only deterministic low-risk auto-merge.'); assert(['ARCH','PROCESS','SECURITY'].every(c=>policy.blocked_categories.includes(c)), 'Block governance and security categories.'); assert(validateWithSchema(policy,'schemas/auto-merge-policy.schema.json').valid, 'Policy must satisfy its schema.'); },
  9() { const workflow=read('.github/workflows/evaluate-instruction.yml'); assert(workflow.includes('evaluate-instruction.js') && workflow.includes('gh pr merge') && workflow.includes('--auto') && !workflow.includes('--admin'), 'Evaluator must policy-gate native auto-merge without admin bypass.'); },
  10() { runTests(); execFileSync(process.execPath,['scripts/validate-repository.js'],{stdio:'inherit'}); }
};
function make(){ return makeCandidate(parseCorrection(fixture.body),fixture,'2026-01-01T00:00:00.000Z'); }
function read(file){ return fs.readFileSync(file,'utf8'); }
function assert(value,message){ if(!value) throw new Error(message); }
function assertThrows(fn,match,what){ try{fn();}catch(e){assert(e.message.includes(match),`${what||'Input'} was rejected, but for the wrong reason. Expected an error containing "${match}", got: ${e.message}`);return;} throw new Error(`${what||'Input'} was accepted, but it must be rejected. Expected an error containing "${match}".`); }
function runTests(){ execFileSync(process.execPath,['--test'],{stdio:'inherit'}); }
if(!tests[step]) throw new Error('STEP must be 1 through 10.');
try { tests[step](); console.log(`Step ${step} complete.`); } catch(error) { console.error(`Step ${step}: ${error.message}`); process.exit(1); }
