"use strict";

const Hapi = require("hapi");
const routes = require("./config/routes");
const dataSource = require("./config/dataSource");

const server = new Hapi.Server();
server.connection({ port: 8000, host: "localhost" });

server.route(routes.endoints);

dataSource.connect((err)=> {
    if (err) {
        throw err;
    }

    console.log("DataSourcer connected");

    server.start((err) => {

        if (err) {
            throw err;
        }
        console.log(`Server running at: ${server.info.uri}`);
    });

});

