# electron-icon-generator [![Build Status](https://action-badges.now.sh/ffflorian/electron-icon-generator)](https://github.com/ffflorian/electron-icon-generator/actions/) [![npm version](https://img.shields.io/npm/v/@ffflorian/electron-icon-generator.svg?style=flat)](https://www.npmjs.com/package/@ffflorian/electron-icon-generator) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=ffflorian/electron-icon-generator)](https://dependabot.com)

Based on https://github.com/jaretburkett/electron-icon-maker.

## Installation

```
yarn global add @ffflorian/electron-icon-generator
# or
npm install -g @ffflorian/electron-icon-generator
```

## Usage

```
electron-icon-generator --input /path/to/image.png --output /path/to/folder
```

#### Arguments

```
Usage: electron-icon-generator [options]

An icon generator to generate all the icon files needed for electron packaging

Options:
  -V, --version          output the version number
  -i, --input <file>     Input PNG file (recommended size: 1024x1024) (default: "./icon.png")
  -o, --output <folder>  Folder to output new icons folder (default: "./")
  -s, --silent           Don't log anything beside errors
  -h, --help             output usage information
```

#### Recommendations

Input file should be 1024\*1024px or larger. Make sure it is a 1:1 aspect ratio on width to height.

#### Output structure

```
[output dir]
  -[icons]
    -[mac]
      - icon.icns
      -[png]
        - 16x16.png
        - 24x24.png
          ...
        - 512x512.png
        - 1024x1024.png
      -[win]
        -icon.ico
```
