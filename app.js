const {createMultiplyFile} = require("./helpers/multiply");
console.clear();

const base = 5;

createMultiplyFile(base)
	.then((fileName) => console.log(fileName, "created"))
	.catch((err) => console.log(err));
