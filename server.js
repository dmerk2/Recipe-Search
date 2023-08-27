// Load environment variables from .env file
require('dotenv').config(); 
const axios = require('axios');
const apiKey = process.env.API_KEY;

if (apiKey) {
  console.log('API Key:', apiKey);
} else {
  console.log('Not connected to .env API_KEY variable');
}

axios
  .get(
    `https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=${apiKey}`
  )
  .then((response) => console.log(response))
  .catch((err) => console.error('Error:', err));
