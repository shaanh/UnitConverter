var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('temperatureconverter', { title: "Shaan's Temperature Converter!"})
});

module.exports = router;