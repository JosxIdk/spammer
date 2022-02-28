function genString(length) {
	const chars = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";
	let char = "";
	for (let i = 0; i < length; i++) {
		char += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return char;
}
async function startAttack(url, requestsCountElementId, attackDataDivId) {
	const uniqueToken = genString(10);
	const requestsCountElement = document.getElementById(requestsCountElementId);
	const attackDataDiv = document.getElementById(attackDataDivId);
	const br = document.createElement("br");
	const btnStop = document.createElement("button");
	btnStop.onclick = function() {
		socket.emit("stop-attack", {
			uniqueToken: uniqueToken
		});
		socket.on("stop-received", data => {
			requestsCountElement.innerText = `Attack stoped\nSent requests: ${String(data.requestsSent)}`;
			btnStop.disabled = true;
		});
	}
	btnStop.innerText = "Stop";
	attackDataDiv.appendChild(br);
	attackDataDiv.appendChild(btnStop);
	socket.emit("start-attack", {
		url,
		uniqueToken
	});
}