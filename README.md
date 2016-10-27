# repo-cli

 > **repo-cli** Simple CLI for scaffolding github projects.

 [![npm](https://img.shields.io/npm/v/repo-cli.svg?style=flat-square)](https://www.npmjs.com/package/repo-cli) [![npm](https://img.shields.io/npm/dt/repo-cli.svg?style=flat-square)](https://www.npmjs.com/package/repo-cli) [![npm](https://img.shields.io/npm/l/repo-cli.svg?style=flat-square)](https://www.npmjs.com/package/repo-cli)


# Usage

## Installation

> **npm install repo-cli -g**


## sample

> $ repo  --help

```
 G:\GitHub\_study\test>repo --help

  Usage: index [options]

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
    -v, --version  output version number
    -n, --npm      create npm project demo
    -c, --common   create github project

  Examples:

    $ repo
    $ repo -n
    $ repo -c

```

> $ repo

```
	G:\GitHub\_study\test>repo

	create g:\GitHub\_npm\repo-cli\project-demo\.gitignore success!
	create g:\GitHub\_npm\repo-cli\project-demo\package.json success!
	create g:\GitHub\_npm\repo-cli\project-demo\LICENSE success!
	create g:\GitHub\_npm\repo-cli\project-demo\README.md success!

```
use command `repo` ,it will create a project-demo folder that includes`.gitignore`,`README.md` ect

# License

MIT

---

> [giscafer.com](http://giscafer.com) &nbsp;&middot;&nbsp;
> GitHub [@giscafer](https://github.com/giscafer) &nbsp;&middot;&nbsp;
> Weibo [@Nickbing Lao](https://weibo.com/laohoubin)
