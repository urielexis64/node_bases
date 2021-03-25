const fs = require("fs");
require("colors");

const createMultiplyFile = async (base = 1, list = false, lim = 10) => {
	try {
		let salida = "",
			salidaConsola = "";

		for (let index = 1; index <= lim; index++) {
			salidaConsola += `${base} ${"x".red} ${index} = ${base * index}\n`;
			salida += `${base} x ${index} = ${base * index}\n`;
		}

		if (list) {
			console.log("=================");
			console.log(`  Tabla del: ${base}  `.rainbow.bold);
			console.log("=================");
			console.log(salidaConsola);
		}

		fs.writeFileSync(`./output/table-${base}-${lim}.txt`, salida);
		return `table-${base}-${lim}.txt`.green;
	} catch (err) {
		throw err;
	}
};

module.exports = {
	createMultiplyFile,
};
