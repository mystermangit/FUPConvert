const copy = require('./app/src/copy');
const basePath = process.cwd()+'/';
const BabiliPlugin = require("babili-webpack-plugin");

//copy app for testing
copy(basePath+'app/css/', basePath+'test/nwjs/app/css/');
copy(basePath+'app/html/', basePath+'test/nwjs/app/html/');
copy(basePath+'app/plugins/', basePath+'test/nwjs/app/plugins/');
copy(basePath+'app/package.json', basePath+'test/nwjs/');

module.exports = {
    entry:  __dirname + "/app/main.js",
    output: {
        path: __dirname + "/test/nwjs/app/js",
        filename: "index.js"
    },
    plugins: [
        new BabiliPlugin()
    ],
    target: 'node-webkit'
};
