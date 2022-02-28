const express = require("express");
const fetch = require("node-fetch");
const morgan = require("morgan");
const app = express();
const SocketIO = require("socket.io");
const hbs = require("express-handlebars");
const bcrypt = require("bcryptjs");
const path = require("path");
process.on("unhandledRejection", err => {
	console.log(err.stack);
});
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
// settings
app.set("port", 80);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", ".html");
app.use("/js", express.static("js"));
// engine set
app.engine(".html", hbs.engine({
	extname: ".html",
	layout: "main"
}));
// router
app.use("/", require("./router"));
// start
const server = app.listen(app.get("port"), async () => {
	console.log(`Web server at port ${app.get("port")}`);
});
// sockets
const io = SocketIO(server);
io.on("connection", async socket => {
	console.log(`New WebSocket connection (${socket.id})`);
});