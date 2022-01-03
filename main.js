const {
  Octokit
} = require('octokit');
const core = require('@actions/core');

const templates = `
  ## Todos
  - [ ] test
  ## WorkLog
`

const TOKEN = core.getInput('TOKEN');

const octokit = new Octokit({
  auth: TOKEN
});

octokit.rest.issues.create({
  owner: "PaulChess",
  repo: "work-everyday-mark",
  title: "Hello Issue",
  body: templates
});