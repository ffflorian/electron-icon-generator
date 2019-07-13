#!/usr/bin/env node

import * as fs from 'fs-extra';
import * as icongen from 'icon-gen';
import * as Jimp from 'jimp';
import * as path from 'path';

const pngSizes = [16, 24, 32, 48, 64, 128, 256, 512, 1024];

export interface Flags {
  input: string;
  output: string;
  silent?: boolean;
}

export class IconGenerator {
  private readonly input: string;
  private readonly output: string;
  private readonly oSub: string;
  private readonly PNGoutputDir: string;

  constructor(private readonly flags: Flags) {
    this.logConsole(flags);

    this.input = path.resolve(process.cwd(), flags.input);
    this.output = path.resolve(process.cwd(), flags.output);
    this.oSub = path.join(this.output, 'icons');
    this.PNGoutputDir = path.join(this.oSub, 'png');
  }

  public async start(): Promise<void> {
    await this.createPNGs(0);
  }

  private logConsole(...messages: any[]): void {
    if (!this.flags.silent) {
      console.log(...messages);
    }
  }

  private async createPNGs(position: number): Promise<void> {
    const info = await this.createPNG(pngSizes[position]);

    this.logConsole(info);

    if (position < pngSizes.length - 1) {
      await this.createPNGs(position + 1);
    } else {
      const macIconsDir = path.join(this.oSub, 'mac');
      const winIconsDir = path.join(this.oSub, 'win');

      await fs.ensureDir(macIconsDir);

      await icongen(this.PNGoutputDir, macIconsDir, {
        icns: {
          name: 'icon',
          sizes: pngSizes,
        },
        report: !this.flags.silent,
      });

      await fs.ensureDir(winIconsDir);

      await icongen(this.PNGoutputDir, winIconsDir, {
        icns: {
          name: 'icon',
          sizes: pngSizes,
        },
        report: !this.flags.silent,
      });

      this.logConsole('Renaming PNGs to Electron Format');
      await this.renamePNGs(0);
    }
  }

  private async renamePNGs(position: number): Promise<void> {
    const startName = `${pngSizes[position]}.png`;
    const endName = `${pngSizes[position]}x${pngSizes[position]}.png`;
    const startFile = path.join(this.PNGoutputDir, startName);
    const endFile = path.join(this.PNGoutputDir, endName);
    await fs.rename(startFile, endFile);

    this.logConsole(`Renamed "${startName}" to "${endName}".`);

    if (position < pngSizes.length - 1) {
      await this.renamePNGs(position + 1);
    } else {
      this.logConsole('\nAll done');
    }
  }

  private async createPNG(size: number): Promise<string> {
    const fileName = `${size.toString()}.png`;

    await fs.ensureDir(this.output);
    await fs.ensureDir(this.oSub);
    await fs.ensureDir(this.PNGoutputDir);

    const image = await Jimp.read(this.input);
    const resizeFile = path.join(this.PNGoutputDir, fileName);

    await new Promise((resolve, reject) =>
      image.resize(size, size, (error, result) => (error ? reject(error) : resolve(result)))
    );
    await image.writeAsync(resizeFile);

    return `Created "${resizeFile}"`;
  }
}
