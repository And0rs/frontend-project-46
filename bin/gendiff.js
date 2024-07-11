#!/usr/bin/env node

// const { program } = require('commander');,
import { program } from 'commander';


program
  .name('diff-compare')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .argument('<filepath1>', 'first file path')
  .argument('<filepath2>', 'second file path')
  .option('-f, --format [type]', 'output format');

program.parse();