#!/usr/bin/env node

import * as commander from 'commander';
import {IconGenerator} from './';

const {bin, description, version} = require('../package.json');

commander
  .description(description)
  .name(Object.keys(bin)[0])
  .version(version)
  .option('-i, --input <file>', 'Input PNG file (recommended size: 1024x1024)', './icon.png')
  .option('-o, --output <folder>', 'Folder to output new icons folder', './')
  .option('-s, --silent', `Don't log anything beside errors`, false)
  .parse(process.argv);

new IconGenerator({
  input: commander.input,
  output: commander.output,
  silent: commander.silent,
})
  .start()
  .then(() => process.exit())
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
