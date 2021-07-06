const axios = require("axios");
var decode = require('decode-html');
const fetch = require("node-fetch")



// module.exports = async () => {

// }
let url = "https://evilinsult.com/generate_insult.php?lang=en&type=json";


axios.get(url)
    .then((response) => {
        console.log(response.data.insult)
        return response;
    })
    .catch((error) => {
        console.log(error);
    });


// module.exports = async () => {
//     let url = "https://evilinsult.com/generate_insult.php?lang=en&type=json"; 


//             const response = await axios.get(url);
//             const data = response.data;
//             console.log("DATA: "+ data)
//             return data



//     let json = await fetch(url, {
//         headers: {

//         },
//         method: "GET",
//         body: JSON.stringify()
//     })

//     json = await json.json().catch(err => { })
//     console.log("JSON: " + json)

//     return json;

// }
