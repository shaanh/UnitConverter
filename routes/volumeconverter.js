var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('volumeconverter', { title: "Shaan's Volume Converter!"})
});

module.exports = router;