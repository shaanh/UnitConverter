var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('unitconverter', { title: "Shaan's Unit Converter!"})
});

module.exports = router;