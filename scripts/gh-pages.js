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
      repo: 'https://github.com/piex/layout-demo.git',
    },
    callback,
  );
}

main();
