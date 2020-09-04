var express = require("express");
var router = express.Router();

const payload = {
  items: [
    {
      name: "paste",
      cost: 40,
      quantity: 1,
      amount: 40,
    },
  ],
  customerDetails: {
    name: "Muthu",
    area: "8/91, main street",
    city: "chennai",
    state: "Tamil nadu",
    country: "India",
  },
  invoiceNumber: 12332523,
  dateofissue: "12/10/2020",
  invoiceTotal: 47.2,
  tax: 7.2,
  subtotal: 40,
  amountDue: 47.2,
};

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("invoice", { payload });
});

module.exports = router;
