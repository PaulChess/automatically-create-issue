const {
  Octokit
} = require('octokit');
const core = require('@actions/core');
const dayjs = require('dayjs');

const templates = `
  ## Todos
  - [ ] TODO1.

  ## WorkLog
  1. 工作记录1

  ## Knowledge
  暂无

  ## Questions
  暂无

  ## Review
  暂无
`;

function getTitle() {
  return dayjs().format('YYYY-MM-DD');
}

const TOKEN = core.getInput('TOKEN');

const octokit = new Octokit({
  auth: TOKEN
});

octokit.rest.issues.create({
  owner: "PaulChess",
  repo: "work-everyday-mark",
  title: getTitle(),
  body: templates
});