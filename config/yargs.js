const argv = require("yargs")
	.option("b", {
		alias: "base",
		type: "number",
		describe: "Set the base number",
		demandOption: true,
	})
	.option("l", {
		alias: "list",
		type: "boolean",
		describe: "Show table as a list",
		default: false,
	})
	.option("m", {
		alias: "limit",
		type: "number",
		describe: "Set limit of the table",
		default: 10,
	})
	.check((argv, options) => {
		if (isNaN(argv.b)) {
			throw "Base has to be a number.";
		}
		return true;
	}).argv;

module.exports = argv;
