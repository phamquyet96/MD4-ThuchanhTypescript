"use strict";
exports.__esModule = true;
var multer_1 = require("multer");
var upload = (0, multer_1["default"])();
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var data_source_1 = require("./src/data-source");
var PORT = 3000;
// thiết lập kết nối cơ sở dữ liệu
data_source_1.AppDataSource
    .initialize()
    .then(function () {
    console.log("Data Source has been initialized!");
})["catch"](function (err) {
    console.error("Error during Data Source initialization:", err);
});
var app = (0, express_1["default"])();
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(body_parser_1["default"].json());
app.use(express_1["default"].json());
app.listen(PORT, function () {
    console.log("App running with port: " + PORT);
});
