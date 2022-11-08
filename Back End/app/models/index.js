const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
//mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

// here mongoose is a variable being passed to artist.model.js
db.addresses = require("./addresses.model")(mongoose);
db.orders = require("./orders.model")(mongoose);
db.products = require("./products.model")(mongoose);
db.users = require("./users.model")(mongoose);

module.exports = db;
