#!/usr/bin/env node
const fs = require('node:fs');
const required = ['README.md','LICENSE','CODEOWNERS','.github/copilot-instructions.md','.github/learning-config.yml','.github/auto-merge-policy.yml','schemas/candidate.schema.json','schemas/auto-merge-policy.schema.json'];
for (let i = 0; i <= 10; i++) required.push(`.github/workflows/${i}-step.yml`);
for (let i = 1; i <= 10; i++) required.push(`.github/steps/${i}-step.md`);
const missing = required.filter((file) => !fs.existsSync(file));
if (missing.length) throw new Error(`Missing required files:\n${missing.join('\n')}`);
const instructions = fs.readFileSync('.github/copilot-instructions.md', 'utf8');
if (!instructions.includes('<!-- learned-rules:start -->') || !instructions.includes('<!-- learned-rules:end -->')) throw new Error('Instruction boundaries are missing.');
JSON.parse(fs.readFileSync('schemas/candidate.schema.json'));
JSON.parse(fs.readFileSync('schemas/auto-merge-policy.schema.json'));
const workflows = fs.readdirSync('.github/workflows').filter((file) => file.endsWith('.yml'));
for (const file of workflows) {
  const contents = fs.readFileSync(`.github/workflows/${file}`, 'utf8');
  if (contents.includes('pull_request_target')) throw new Error(`${file} must not expose secrets to fork code.`);
  if (/gh pr merge[^\n]*--admin/.test(contents)) throw new Error(`${file} bypasses branch protection.`);
}
for (let step = 1; step <= 10; step++) {
  const contents = fs.readFileSync(`.github/steps/${step}-step.md`, 'utf8');
  for (const heading of ['## Theory','## Activity','## Actions trigger','## Grading check','## Targeted feedback','## Recovery']) if (!contents.includes(heading)) throw new Error(`Step ${step} is missing ${heading}.`);
}
console.log(`Repository structure is valid (${required.length} required files).`);
