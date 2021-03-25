const {createMultiplyFile} = require("./helpers/multiply");
const argv = require("./config/yargs");

console.clear();

let base = argv.b;
let list = argv.l;
let lim = argv.m;

console.log(argv);

createMultiplyFile(base, list, lim)
	.then((fileName) => console.log(fileName, "created"))
	.catch((err) => console.log(err));
