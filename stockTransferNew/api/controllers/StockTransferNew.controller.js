"use strict";

const mongoose = require("mongoose");
const definition = require("../helpers/StockTransferNew.definition.js").definition;
const SMCrud = require("swagger-mongoose-crud");
const cuti = require("cuti");
const schema = new mongoose.Schema(definition);
const logger = global.logger;

var options = {
    logger:logger,
    collectionName:"StockTransferNew"
};
schema.pre("save", cuti.counter.getIdGenerator("STFN", "StockTransferNew"));
var crudder = new SMCrud(schema,"StockTransferNew", options);
module.exports = {
    create:crudder.create,
    index:crudder.index,
    show:crudder.show,
    destroy:crudder.markAsDeleted,
    update:crudder.update
};
    