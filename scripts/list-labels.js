#!/usr/bin/env node
const { readYaml } = require('./lib');
for (const label of readYaml('.github/labels.yml')) console.log(`${label.name}\t${label.color}\t${label.description}`);
for (let step = 1; step <= 10; step++) console.log(`skills-step-${step}\tD4C5F9\tCurrent GitHub Skills exercise step ${step}`);
