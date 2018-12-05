var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('timeconverter', { title: "Shaan's Time Converter!"})
});

module.exports = router;