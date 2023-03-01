const items = require("../DBschemas/items");
let searchValue = '';
const express = require("express");
const app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://pos-client.onrender.com/customizedplates"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
module.exports = {
    Post: (req, res) => {
      value = req.body[0];
      res.send({ message: value });
      searchValue = value;
      console.log(value)
    },
    getIndex: (req, res) => {
    //   checkIfLoggedIn()
      const dbQuery = items.find({ Item: searchValue }, (err, cursor) => {
        // console.log(cursor);
        res.json({ message: cursor });
        cursor.splice(0);
      });
    },
  };