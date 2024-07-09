#!/usr/bin/env node

const { program } = require('commander');

program
  .name('diff-compare')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0');

program.parse();
