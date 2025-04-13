const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {
    res.send({"message": "here are the products for you!!!!"});
})

router.get('/name', async(req, res) => {
    res.send({message: 'I dont know the name'});
    
})
module.exports = router;