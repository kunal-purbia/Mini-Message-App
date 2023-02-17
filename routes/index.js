const express = require('express');
var router = express.Router();
const fs = require('fs');
const fileName = "messages.json";

const app = express();

app.use(express.json());
const newMessage = {};

/* GET home page. */
router.get('/', function (req, res, next) {
  fs.readFile(fileName, (err, data) => {
    if (err) {
      throw err;
    } else {
      data = JSON.parse(data);
      res.render('index', { messages: data });
    }
  })
});

router.post('/', function (req, res) {
  const data = req.body;

  if (data.message === "" || data.userName === "") {
    res.redirect("/new");
  } else {
    newMessage.text = data.message;
    newMessage.user = data.userName;
    newMessage.added = new Date();

    fs.readFile(fileName, (err, data) => {
      if (err) {
        throw err;
      } else {
        data = JSON.parse(data);
        data.push(newMessage);
        data = JSON.stringify(data);
        fs.writeFile(fileName, data, function (err) {
          if (err) throw err;
        })
        res.redirect("/")
      }
    })
  }
})

module.exports = router;
