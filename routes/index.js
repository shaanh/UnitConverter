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


    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
    var uuid = guid();
    var info = admin.database().ref().child('numbersnunits');
    var currentuser = admin.auth().currentUser;
    var message = {
        text: 'Another user checking in!',
        userID: uuid,
        timestamp: new Date().toString()
    };
    var messageRef = info.push(message);
});

module.exports = router;
