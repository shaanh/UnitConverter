var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('numberinfo', { title: "Shaan's Number Station!"})
});

module.exports = router;