#!/usr/bin/env node

// 上面的注释表明 这是一个可执行的应用

const path = require('path');
const chalk = require('chalk');
const program = require('commander');
const fs = require("fs");
let createInterface = require('../index.js')
let packConfig = require('../package.json')
let conf = require('../config.json')

program
    .version(packConfig.version)
    .option('-u --url [value]', '指定需要转换的url')
    .option('-m --method [value]', '指定需要转换的interface/method')
    .parse(process.argv)

if (program.url) {
    createInterface({
        url: program.url
    });
} else if (program.method) {
    createInterface({
        method: program.method
    });
} else{
    console.log(chalk.red("请输入参数"))
}
