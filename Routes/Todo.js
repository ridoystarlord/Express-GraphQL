const express = require('express')
const {collection} =require("../Database/database")
const router = express.Router();

router.post('/insert-many',async function (req, res) {
    const insertResult = await collection.insertMany([{
        title: 'The Awakening',
        author: 'Kate Chopin',
      },
      {
        title: 'City of Glass',
        author: 'Paul Auster',
      }]);
    res.json(insertResult);
})
router.get('/',async function (req, res) {
    const findResult = await collection.find({}).toArray();
    res.json(findResult);
})

module.exports=router