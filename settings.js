const fs = require("fs");

global.creator = "Razzorz";
global.apikey = ["Elistz", "Mwuhehe", "Rainchy", "nyanko"];

let file = require.resolve(__filename);
fs.watchFile(file, () => {
	fs.unwatchFile(file);
	console.log(`Update'${__filename}'`);
	delete require.cache[file];
	require(file);
});
