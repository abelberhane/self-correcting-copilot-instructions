#!/usr/bin/env node
const fs = require('node:fs');
const { execFileSync } = require('node:child_process');
const { parseCorrection, assertTrusted, makeCandidate, validateCandidate, validateWithSchema, evaluatePolicy, parseRules, readYaml } = require('./lib');
const step = Number(process.argv[2] || process.env.STEP);
const fixture = JSON.parse(fs.readFileSync('test/fixtures/valid/correction.json', 'utf8'));
const tests = {
  1() { const config=readYaml('.github/learning-config.yml'); assert(config.command==='/copilot-learn' && config.trusted_associations.includes('OWNER') && config.trusted_associations.includes('MEMBER'), 'Configure the exact command and OWNER/MEMBER trust.'); assertTrusted(fixture,config); },
  2() { const c=make(); assert(validateWithSchema(c,'schemas/candidate.schema.json').valid, 'The generated candidate must satisfy the closed candidate schema.'); },
  3() { const parsed=parseCorrection(fixture.body); assert(parsed.category==='TEST', 'The valid correction must parse.'); assertThrows(()=>parseCorrection(fixture.body+'\nshell: echo unsafe'),'not allowed'); },
  4() { const workflow=read('.github/workflows/propose-instruction.yml'); for(const value of ['git switch -c','render-instructions.js','audit.js','gh pr create']) assert(workflow.includes(value),`Proposal workflow must perform ${value}.`); },
  5() { runTests(); },
  6() { const rules=parseRules(read('.github/copilot-instructions.md')); assert(rules.some(r=>r.state==='active'), 'At least one active learned rule with provenance must exist.'); assert(read('.github/copilot-instructions.md').includes('**Provenance:**'), 'Learned rules require provenance.'); },
  7() { const before=read('.github/copilot-instructions.md'); const c={...make(),action:'revoke',target_id:'RULE-TEST-PARSER-001'}; assert(require('./lib').updateInstructions(before,c).includes('**State:** revoked'), 'Revocation must preserve and transition the active target.'); },
  8() { const policy=readYaml('.github/auto-merge-policy.yml'); assert(policy.enabled && policy.allowed_risk==='low', 'Enable only deterministic low-risk auto-merge.'); assert(['ARCH','PROCESS','SECURITY'].every(c=>policy.blocked_categories.includes(c)), 'Block governance and security categories.'); assert(validateWithSchema(policy,'schemas/auto-merge-policy.schema.json').valid, 'Policy must satisfy its schema.'); },
  9() { const workflow=read('.github/workflows/evaluate-instruction.yml'); assert(workflow.includes('evaluate-instruction.js') && workflow.includes('gh pr merge') && workflow.includes('--auto') && !workflow.includes('--admin'), 'Evaluator must policy-gate native auto-merge without admin bypass.'); },
  10() { runTests(); execFileSync(process.execPath,['scripts/validate-repository.js'],{stdio:'inherit'}); }
};
function make(){ return makeCandidate(parseCorrection(fixture.body),fixture,'2026-01-01T00:00:00.000Z'); }
function read(file){ return fs.readFileSync(file,'utf8'); }
function assert(value,message){ if(!value) throw new Error(message); }
function assertThrows(fn,match){ try{fn();}catch(e){assert(e.message.includes(match),`Expected error containing ${match}.`);return;}throw new Error('Expected operation to fail.'); }
function runTests(){ execFileSync(process.execPath,['--test'],{stdio:'inherit'}); }
if(!tests[step]) throw new Error('STEP must be 1 through 10.');
try { tests[step](); console.log(`Step ${step} complete.`); } catch(error) { console.error(`Step ${step}: ${error.message}`); process.exit(1); }
