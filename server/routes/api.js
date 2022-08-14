const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const BCRYPT_SALT_ROUNDS = 12;

// declare axios for making http requests
const axios = require('axios');
const { request } = require('http');
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
var db;
MongoClient.connect('mongodb+srv://test1:test123@cluster0.ymnqjj2.mongodb.net/miniprojectDB?retryWrites=true&w=majority', { useNewUrlParser: true ,
useUnifiedTopology: true }, (err, database) => {
  if (err) return console.log(err);
  db = database.db('miniprojectDB');
});

// create new post
router.route('/posts').post(function (req, res) {
  db.collection('posts').insertOne(req.body, (err, results) => {
    if (err) return console.log(err);
    console.log('saved to database');
    res.send(results);
  });
});

// get all posts
router.get('/posts', (req, res) => {
  db.collection('posts').find().toArray((err, result) => {
    if (err) return console.log(err);
    res.send(result);
  });
});

// get selected post's data by id
router.route('/posts/:_id').get(function(req, res) {
  db.collection('posts').findOne( {"_id": ObjectId(req.params._id)},
   (err, results) => { 
  res.send(results);
  });
});

// delete post based on id
router.route('/posts/:_id').delete(function(req, res) {
  db.collection('posts').deleteOne( {"_id": ObjectId(req.params._id)},
   (err, results) => { 
  res.send(results);
  });
});

// update post based on id
router.put('/posts/:_id', (req, res) => {
  var id = req.params._id;
  console.log(id)
  var checked = req.body.checked
  db.collection('posts').findOneAndUpdate({
    _id: any = ObjectID(id.toString())
  }, {
    $set: {
      checked: checked
  }}, {
    sort: {
      _id: -1
    },
  }, (err, result) => {
    if (err) return console.log(err);
    console.log('checked');
    res.send(result);
  });
});

router.route('/authuser').post(function(req, res2) {
  var username = req.body.username;
  var password = req.body.password;
  db.collection('users').findOne({"name": username}, { password: 1, role: 1,
  _id: 0 }, function(err, result) {
  if (result == null) res2.send([{"auth": false}]);
  else{
  bcrypt.compare(password, result.password, function(err, res) {
  if(err || res == false) {
  res2.send([{"auth": false}]);
  } else {
  res2.send([{"auth": true, "role": result.role}]);
  }
  });
  }
  });
  });

router.route('/reguser').post(function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var role = req.body.role;
  bcrypt.hash(password, BCRYPT_SALT_ROUNDS, function(err, hash) {
  db.collection('users').insertOne({"name" : username, "password" : hash,
  "role" : role }, (err, result) => {
  if (err) return console.log(err)
  console.log('user registered')
  res.send(result);
  });
  });
})

module.exports = router;