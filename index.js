const express = require('express');
const axios = require('axios')
const app = express();
app.get('/', (req, res) => {
    console.log(req);
    res.send({message: 'Hello World'});
  });

  async function getProducts () {
    const API_DOMAIN = 'https://fakestoreapi.com/';
    const response = axios.get(API_DOMAIN + 'products')
    return (await response).data;
  } 

app.get('/products', async(req, res) => {
    const products = await getProducts();
    res.send(products);
})
const cache = {};
async function getProductsWithId (id) {
    if(id in cache) {
        // return cache[id];
    }
    const API_DOMAIN = 'https://fakestoreapi.com/';
    const response = axios.get(API_DOMAIN + 'products/' + id);
    const data = (await response).data
    cache[id] = data;
    return data;
  } 

app.get('/products/:id', async(req, res) => {
    const products = await getProductsWithId(req.params.id);
    res.send(products);
})
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running in PORT:${PORT}`);
})