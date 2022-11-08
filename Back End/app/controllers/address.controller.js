const db = require("../models");
const Address = db.addresses;

// addAddress() - to add a new address to database.
exports.addAddress = (req, res) => {
  console.log(req.body);
  const data = JSON.stringify(req.body);
  //   console.log(data);
  // Data Modeling using Mongoose required
  Address.insertOne(data)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while inserting address.",
      });
    });
};
