#!/usr/bin/env node

import * as args from 'args';
import {Flags, IconGenerator} from './';

args
  .option('input', 'Input PNG file (recommended size: 1024x1024)', './icon.png')
  .option('output', 'Folder to output new icons folder', './')
  .option('silent', `Don't log anything beside errors`, false);

const flags = args.parse(process.argv) as Flags;

new IconGenerator(flags)
  .start()
  .then(() => process.exit())
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
