const {
  Octokit
} = require('octokit');

const templates = `
  ## Todos
  - [ ] test
  ## WorkLog
`

const octokit = new Octokit({
  auth: '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'
});

octokit.rest.issues.create({
  owner: "PaulChess",
  repo: "work-everyday-mark",
  title: "Hello Issue",
  body: templates
});