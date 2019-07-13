## electron-icon-generator

Based on https://github.com/jaretburkett/electron-icon-maker.

#### Global usage

Install globally using

```
npm install -g @ffflorian/electron-icon-generator
```

To use

```
electron-icon-generator --input=/absolute/path/file.png --output=./relative/path/to/folder
```

#### Local usage

Install locally

```
yarn add @ffflorian/electron-icon-maker
# or
npm i @ffflorian/electron-icon-maker
```

To use

```
electron-icon-maker --input /path/to/image.png --output /path/to/output
```

#### Arguments

```
-h, --help            Output usage information
-i, --input [value]   Input PNG file. Recommended (1024x1024) (defaults to "./icon.png")
-o, --output [value]  Folder to output new icons folder (defaults to "./")
-s, --silent          Don't log anything beside errors (disabled by default)
-v, --version         Output the version number
```

#### Recommendations

Input file should be 1024px x 1024px or larger. Make sure it is a 1 to 1 aspect ratio on width to height.

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
            ...
            - 512x512.png
            - 1024x1024.png
        -[win]
            -icon.ico
```
