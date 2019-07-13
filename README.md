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
electron-icon-generator --input=/absolute/path/file.png --output=./relative/path/to/folder
```

#### Arguments

```
Usage: electron-icon-generator [options] [command]

Commands:
help     Display help
version  Display version

Options:
-h, --help            Output usage information
-i, --input [value]   Input PNG file (recommended size: 1024x1024) (defaults to "./icon.png")
-o, --output [value]  Folder to output new icons folder (defaults to "./")
-s, --silent          Don't log anything beside errors (disabled by default)
-v, --version         Output the version number
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
