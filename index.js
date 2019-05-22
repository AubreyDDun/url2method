const chalk = require('chalk');
const fs = require("fs");
const readline = require('readline');
const path = require("path");
const conf = require('./config.json');


const createInterface = ({url, method}) => {
    let {
        SERVICE_DIRS,
        CONTROLLER_DIRS,
        ROUTER_FILES,
        IGNORE_ROUTERS
    } = conf

    const routerFiles = ROUTER_FILES.map((files) => path.join(process.cwd(), files));

    const rl = readline.createInterface({
        input: fs.createReadStream(routerFiles[0]),
        output: fs.createWriteStream(path.join(process.cwd(), './__temp/routers.json')),
        crlfDelay: Infinity
    })

    rl.on('line', line => {
        // console.log(`${line}`);
    })

    
    // JSON.parse(fs.readFileSync(conf))
    // console.log(chalk.red(JSON.stringify(conf, null, 2)))
    
};

module.exports = createInterface;
