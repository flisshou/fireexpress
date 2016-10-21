var express = require('express');
var router = express.Router();
var firebase = require('firebase');

firebase.initializeApp({
  serviceAccount: "./XXXXX.json",
  databaseURL: "https://XXXXX.firebaseio.com/"
});

var db = firebase.database();
var ref = db.ref("XX");
var yourRef = db.ref("node1/node2");

var firebaseData = {};

ref.on("value", function(snapshot) {
  firebaseData = snapshot.val();
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

/*GET /api/v1/data.*/
router.get('/XX', function(req, res) {
  res.send(firebaseData);
});

/*GET /api/v1/data/XXXX*/
router.get('node1/node2', function(req, res) {
  res.send(firebaseData[valueName]);
});

/*POST /api/v1/data/XXXX*/
router.post('node1/node2', function(req, res) {
  if (!res.body) return res.sendStatus(400);
  for (var key in req.body) {
    yourRef.childe(key).set(req.body[key], function(error) {
      if (error) {
        console.log("Data could not be save." + error);
      } else {
        console.log("Data saved successfully.");
      }
    });
  } res.sendStatus(200);
});

module.exports(router);
