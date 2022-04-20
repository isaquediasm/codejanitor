import * as esprima from 'esprima';
import noLongComments from './rules/noLongComments';
import { pipe } from './utils';
import * as fs from 'fs';

function createRules(rules): Array<(context: esprima.Program) => unknown> {
  return rules.map((rule) => ({ context, issues }) => {
    const foundIssues = rule.create(context);
    return {
      context,
      issues: [...issues, foundIssues],
    };
  });
}

async function readRepository() {
  const files = fs.readdirSync('./src/mock/');

  console.log(files);
}

function init(rules) {
  readRepository();
  /* const context = esprima.parseScript(code, {
    loc: true,
    comment: true,
  });

  const result = pipe(...createRules(rules))({ context, issues: [] });

  console.log('##result', JSON.stringify(result)); */
}

init([noLongComments]);
