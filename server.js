const axios = require("axios");
const apiKey = "aa41319f8d6d4dfaa25749432fd8c40e";

axios
  .get(
    `https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=${apiKey}`
  )
  .then((response) => console.log(response))
  .catch((err) => console.error("Error: ", err));
