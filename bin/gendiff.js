#!/usr/bin/env node

// const { program } = require('commander');
// Интеренсно, но запись ниже не работает без секции "type" в package.json
import { program } from 'commander';
import gendiff from '../src/index.js';

program
  .name('diff-compare')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => gendiff(filepath1, filepath2));

program.parse();
