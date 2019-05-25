#!/usr/bin/env node
const ghpages = require('gh-pages');

function callback() {
  console.log('doc deploy success.');
}

function main() {
  ghpages.publish(
    './dist',
    {
      branch: 'gh-pages',
      repo: 'http://gitlab.qima-inc.com/zhangmingyuan/ebiz-hooks.git',
    },
    callback,
  );
}

main();
