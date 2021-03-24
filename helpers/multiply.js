const fs = require("fs");

const createMultiplyFile = async (base = 1) => {
	try {
		let salida = "";

		for (let index = 1; index <= 10; index++) {
			salida += `${base} x ${index} = ${base * index}\n`;
		}

		console.log(salida);

		fs.writeFileSync(`table-${base}.txt`, salida);
		return `table-${base}.txt`;
	} catch (err) {
		throw err;
	}
};

module.exports = {
	createMultiplyFile,
};
