require("dotenv").config();
const Discord = require("discord.js");
var decode = require("decode-html");
const axios = require("axios");
const insult = require("./insult")

const client = new Discord.Client();
/* Import Discord Buttons Client */
const discordButtons = require("discord-buttons-plugin");
const buttonClient = new discordButtons(client);

const { TOKEN } = process.env;
client.on("ready", () => {
    console.log("Bot is connected");

        /* Generate a embedded message to display info about the bot */
        let messageImg = "https://i.imgur.com/i7KcKU8.png";
        const embed = new Discord.MessageEmbed()
            .setColor("green")
            .setTitle("Roast Me Bot")
            .setURL("https://github.com/cstolps8/DiscordInsultMe")
            .setAuthor("Collin Stolpa", messageImg, "https://github.com/cstolps8/")
            .setDescription("A bot that will direct message you roast")
            .setThumbnail(messageImg)
            .addFields(
                { name: "Click the Roast Me button", value: "See what happens" },
                { name: "\u200B", value: "\u200B" }
            )
            .setTimestamp()
            .setFooter("Follow me on Github Cstolps8", messageImg);

        /* Generate 1st Button with "Yes" lable on it */
        const button1 = new buttonClient.MessageButton()
            .setLabel("Roast Me")
            .setStyle("green")
            .setID("yes");

        /* Generate 3rd Link Button */
        const button3 = new buttonClient.MessageButton()
            .setLabel("Join me on OnlyFans")
            .setURL("https://bit.ly/36g9pw8");

        /* Send Message with button */
        buttonClient.send(null, {
            //   channel: message.channel.id,
               channel: "793901584060514354",
            embed,
            buttons: [[button1], [button3]],
        });
    
});

// send someone a roast
client.on("message", (message) => {
    
});

// url that will return an insult
let url = "https://evilinsult.com/generate_insult.php?lang=en&type=json";

// buttonClient.on("yes", (inta) => {
// axios to send get request for insult message

//     let userid = inta.member.user.id;
//     theInsult = insult.getData()
//     client.users.cache.get(userid).send(theInsult);
// });

/* Listen to buttons event with their ID */
buttonClient.on("yes", (inta) => {
    // axios to send get request for insult message
    axios
        .get(url)
        .then((response) => {
            //get the response from url
            theInsult = decode(response.data.insult);
            return response.data.insult;
        })
        .then((response) => {
            // send the response
            let userid = inta.member.user.id;
            client.users.cache.get(userid).send(theInsult);
        })
        .catch((error) => {
            console.log(error);
        });
});



client.login(TOKEN);
