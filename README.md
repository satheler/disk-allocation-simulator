# Disk Allocation Simulator

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](#)

This solution consists of a proposal of a mechanism of allocation of files in disk sectors.

![main](https://raw.githubusercontent.com/gustavosatheler/disk-allocation-simulator/master/doc/screenshots/main.png)

This implementation has an appropriate graphical interface for file creation interaction.
The file structure is defined as follows:

-   Name
-   Size in mb
-   Creation date
-   Color (for representation only)

In this implementation it was also considered how to save the file to disk and how to recover the blocks from the disk to "reassemble" the file, if it is changed.

## Getting Started

**Note**: Running this requires [Git](https://git-scm.com) and [npm](https://www.npmjs.com/).

In your terminal:

```sh
# Clone the repository
$ git clone https://github.com/gustavosatheler/disk-allocation-simulator.git
# Go into the repository
$ cd disk-allocation-simulator
# Install dependencies
$ npm install
# Run the app
$ npm run dev
```

## Features
Allocation of files
![allocation](https://raw.githubusercontent.com/gustavosatheler/disk-allocation-simulator/master/doc/screenshots/allocation.png)

Popover for identification of file in the block
![block-with-popover](https://raw.githubusercontent.com/gustavosatheler/disk-allocation-simulator/master/doc/screenshots/block-with-popover.PNG)

Edit files
![edit_file.PNG](https://raw.githubusercontent.com/gustavosatheler/disk-allocation-simulator/master/doc/screenshots/edit_file.PNG)
