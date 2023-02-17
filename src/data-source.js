"use strict";
exports.__esModule = true;
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "dbtest",
    synchronize: false,
    logging: false,
    entities: ["dist/src/entity/*.js"],
    migrations: ["dist/src/migrations/*.js"]
});
