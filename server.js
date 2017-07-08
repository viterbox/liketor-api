"use strict";

const Hapi = require("hapi");
const routes = require("./config/routes");

const server = new Hapi.Server();
server.connection({ port: 8000, host: "localhost" });

server.route(routes.endoints);

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});