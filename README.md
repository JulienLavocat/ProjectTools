projecttools
============

Project creation and managment

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/projecttools.svg)](https://npmjs.org/package/projecttools)
[![Downloads/week](https://img.shields.io/npm/dw/projecttools.svg)](https://npmjs.org/package/projecttools)
[![License](https://img.shields.io/npm/l/projecttools.svg)](https://github.com/JulienLavocat/projecttools/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g projecttools
$ projecttools COMMAND
running command...
$ projecttools (-v|--version|version)
projecttools/0.1.0 win32-x64 node-v12.14.0
$ projecttools --help [COMMAND]
USAGE
  $ projecttools COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`projecttools create PATH TYPE`](#projecttools-create-path-type)
* [`projecttools help [COMMAND]`](#projecttools-help-command)

## `projecttools create PATH TYPE`

Create a new project

```
USAGE
  $ projecttools create PATH TYPE

ARGUMENTS
  PATH  Path leading to where the new project will be created
  TYPE  Type of project (NodeJS, Unity, ...)

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ projecttools create . nodejs
```

_See code: [src\commands\create.ts](https://github.com/JulienLavocat/projecttools/blob/v0.1.0/src\commands\create.ts)_

## `projecttools help [COMMAND]`

display help for projecttools

```
USAGE
  $ projecttools help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src\commands\help.ts)_
<!-- commandsstop -->
