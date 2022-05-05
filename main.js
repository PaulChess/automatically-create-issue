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
  // 运行环境是 UTC 时区
  // 需要转换成 中国时区
  // 中国时区 = UTC时区 + 8小时
  return `【每日工作】${dayjs().add("8", "hour").format('YYYY-MM-DD')}`;
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