var express = require('express');
var router = express.Router();
const path = require('path');
const mainDir = path.join(__dirname, '..')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.sendFile(mainDir + "/views/newMessage.html")
});

router.get('/messages', (req, res)=>{
  res.send("Hello");
})

module.exports = router;
