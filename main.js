const {
  Octokit
} = require('octokit');
const core = require('@actions/core');
const dayjs = require('dayjs');

const templates = `
  ## Todos
  - [ ] TODO1.

  ## WorkLog

  ## Knowledge

  ## Questions

  ## Review
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