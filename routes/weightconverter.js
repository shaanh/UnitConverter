var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('weightconverter', { title: "Shaan's Weight Converter!"})
});

module.exports = router;