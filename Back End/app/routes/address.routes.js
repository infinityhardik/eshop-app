// const auth = require("../../middleware/auth");

module.exports = (app) => {
  const address = require("../controllers/address.controller.js");

  var router = require("express").Router();

  router.post("/addresses", address.addAddress);

  app.use(router);
  //Add auth as Middleware in above line
};
