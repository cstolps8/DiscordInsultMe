const axios = require("axios");
var decode = require('decode-html');
const fetch = require("node-fetch")

let url = "https://evilinsult.com/generate_insult.php?lang=en&type=json";
async function getData() {
    try {
        const data = await axios.get(url)
        return data.data.insult
    } catch (err) {
        console.log(err)
    }
}
module.exports = {
    getData
}

// module.exports = async (url) => {
//     console.log("getting insult")
//     let resp = await axios.get(url);
//     return resp.data.insult

//     // .then((response) => {
//     //     console.log(response.data.insult)
//     //     return response;
//     // })
//     // .catch((error) => {
//     //     console.log(error);
//     // });

// }
