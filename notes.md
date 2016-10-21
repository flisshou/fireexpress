##Some Steps:

###Create a Directory

```bash
$ mkdir fireexpress
```

###Install Express-generator

```bash
$ sudo npm install -g express-generator
```

>You have to have a clean directory, excluding a .DS_Store file

###Setup Environment

```bash
$ express --ejs
```

>Generate package.json and many other directories for Node.js

###Open Atom for editing

```bash
$ atom ./
```

###Install Firebase

```bash
$ npm install firebase --save
```

###Build Node.js

```bash
$ npm install
```

###Drag Firebase Permission Editor Service File

###Add instances in app.js

```javascript
var api = require('./routes/api');
```

###New api.js in /routes

###Add instances in app.js

```javascript
app.use('/api/v1', api);
```

>Connect the route 

###Go to index.js

edit the router.get();

```javascript
router.get('/', function(req, res, next){
  res.render('index', {title: 'Firebase Express'});
});
```

>Edit the title on HTML

###api.js

```javascript
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
```

###Run

```bash
$ npm start
```

---

###Examine the POST

Go to PostMan and change to `POST`.

When you test, please insert the right url `localhost:0000/url`.

Create a new json file to add some objects.

Click on `Send`.

Check the Server running condition. 
