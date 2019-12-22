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
projecttools/0.0.0 win32-x64 node-v12.14.0
$ projecttools --help [COMMAND]
USAGE
  $ projecttools COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`projecttools hello [FILE]`](#projecttools-hello-file)
* [`projecttools help [COMMAND]`](#projecttools-help-command)

## `projecttools hello [FILE]`

describe the command here

```
USAGE
  $ projecttools hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ projecttools hello
  hello world from ./src/hello.ts!
```

_See code: [src\commands\hello.ts](https://github.com/JulienLavocat/projecttools/blob/v0.0.0/src\commands\hello.ts)_

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
