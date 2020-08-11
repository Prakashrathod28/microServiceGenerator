"use strict";
//controllers
const StockTransferNewController = require("./StockTransferNew.controller.js");

//exports
var exports = {};
exports.v1_StockTransferNewCreate = StockTransferNewController.create;
exports.v1_StockTransferNewList = StockTransferNewController.index;
exports.v1_StockTransferNewShow = StockTransferNewController.show;
exports.v1_StockTransferNewDestroy = StockTransferNewController.destroy;
exports.v1_StockTransferNewUpdate = StockTransferNewController.update;

module.exports = exports;
    