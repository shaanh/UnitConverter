var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Shaan's Unit Converter!" });
    var admin = require('firebase-admin');
    //var serviceAccount = require('../numbersnunits-firebase-adminsdk-0xu3e-c5d208d468.json');

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://numbersnunits.firebaseio.com",
    });


    var info = admin.database().ref().child('numbersnunits');
    var message = {text: 'Another user checking in!', timestamp: new Date().toString()};
    var messageRef = info.push(message);
});

module.exports = router;
