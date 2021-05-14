#!/usr/bin/env node

import program from 'commander';

program.version('0.0.1');

// Options
program
  .description('Compares two configuration files and shows a difference.');

program
  .option('-f, --format [type]', 'output format')
  .arguments('<filename1> <filename2>');

program.parse();
