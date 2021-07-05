// index.js
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(5000, () => console.log('Server is up and running'));


// const axios = require("axios");
// const $ = require("jquery");

// let url = "https://evilinsult.com/generate_insult.php?lang=en&type=json";

// const getData = async (url) => {
//   try {
//     const response = await axios.get(url);
//     const data = response.data;
//     console.log(data.insult);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getData(url)

