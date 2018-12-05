var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('lengthconverter', { title: "Shaan's Length Converter!"})
});

module.exports = router;