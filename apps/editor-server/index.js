const { Server } = require("@hocuspocus/server");
const { Logger } = require("@hocuspocus/extension-logger");
const { SQLite } = require("@hocuspocus/extension-sqlite");

const server = Server.configure({
  port: 8080,
  // SQL is temp here.
  extensions: [new Logger(), new SQLite()],
  async onChange({ socketId }) {
    console.log(socketId);
  },
});

server.listen();
