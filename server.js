"use strict";

const Hapi = require("hapi");
const routes = require("./config/routes");
const dataSource = require("./config/dataSource");

const server = new Hapi.Server();
const port =  process.env.PORT || 8000;
server.connection({ port: port, host: "localhost" });

server.route(routes.endoints);

dataSource.connect((err)=> {
    if (err) {
        throw err;
    }

    console.log("DataSource connected");

    server.start((err) => {

        if (err) {
            throw err;
        }
        console.log(`Server running at: ${server.info.uri}`);
    });

});

