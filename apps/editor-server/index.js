const { Server } = require("@hocuspocus/server");
const { Logger } = require("@hocuspocus/extension-logger");

const server = Server.configure({
  port: 8080,
  extensions: [new Logger()],
});

server.listen();
