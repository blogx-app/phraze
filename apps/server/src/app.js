const express = require("express");
const expressWebsockets = require("express-ws");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const { Server } = require("@hocuspocus/server");

require("dotenv").config();

const middlewares = require("./middlewares");
const api = require("./api");

const { app } = expressWebsockets(express());

const server = Server.configure({});

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

app.ws("/collaboration", (websocket, request) => {
  const context = {
    user: {
      id: 1234,
      name: "Jane",
    },
  };

  server.handleConnection(websocket, request, context);
});

app.use("/api/v1", api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
