/**
 * @author giscafer<giscafer@outlook.com>
 * https://github.com/giscafer/repo-cli
 */
'use strict'

/**
 * Module dependencies.
 */
const path = require('path');
const fs = require('fs');
const program = require('commander');
const touchReadme = require('touch-readme');
const pkg = require('./package.json');
const REPO_PATH = path.join(process.cwd(), './project-demo/');
const TEMP_PATH = path.join(__dirname, './templates/');

program
    .version(pkg.version)
    .option('-v, --version', 'output version number')
    .option('-n, --npm', 'create npm project demo', npm)
    .option('-c, --common', 'create github project ', common)
    .on('--help', () => {
        console.log('  Examples:');
        console.log();
        console.log('    $ repo');
        console.log('    $ repo -n');
        console.log('    $ repo -c');
        console.log();
    });
program.parse(process.argv);
console.log();

if (!process.argv.slice(2)[0]) {
    common();
}

function npm() {
    mkdir(REPO_PATH);
    createFile('.gitignore');
    createFile('.npmignore');
    createFile('LICENSE');
    createFile('package.json');
    touchReadme.init(getTempPath());
    return;
}

function common() {
    mkdir(REPO_PATH);
    createFile('.gitignore');
    createFile('LICENSE');
    createFile('package.json');
    touchReadme.init(getTempPath());
    return;
}

function mkdir(path) {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    } else {
        deleteFolder(path);
        fs.mkdirSync(path);
    }
}
function getTempPath(fileName){
    return path.join(REPO_PATH, 'README.md');
}
function deleteFolder(path) {
    let files = [];
    if (fs.existsSync(path)) {
        files = fs.readdirSync(path);
        files.forEach((file, index) => {
            let curPath = path + "/" + file;
            if (fs.statSync(curPath).isDirectory()) {
                deleteFolder(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};

function createFile(fileName) {
    fileName = fileName ? fileName : 'simple';
    let filePath = path.join(TEMP_PATH, fileName);
    let repoFilePath = path.join(REPO_PATH, fileName);
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error(err);
            process.exit(-1);
        }
        let contents = data.toString('utf-8');
        fs.writeFile(repoFilePath, contents, (err) = {
            if (err) {
                console.log(err);
                process.exit(-1);
            }
        });
        console.log('create ' + repoFilePath + ' success!')
    });

}
