var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('currencyconverter', { title: "Shaan's Currency Converter!"})
});

module.exports = router;