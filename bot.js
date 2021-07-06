require("dotenv").config();
const Discord = require("discord.js");
var decode = require("decode-html");
const client = new Discord.Client();
const axios = require("axios");
const util = require("util");
/* Import Discord Buttons Client */
const discordButtons = require("discord-buttons-plugin");
const buttonClient = new discordButtons(client);

// get the insult
//const insult = require("./insult");
const { response } = require("express");

const { TOKEN } = process.env;
client.on("ready", () => {
  console.log("Bot is connected");
});

client.on("message", (message) => {
  client.on("message", (message) => {
    // If the message is "ping"
    if (message.content === "ping") {
      // Send "pong" to the same channel
      message.channel.send("slut");
    }
  });
  if (message.content === "button") {
    /* Generate a Cute Embed :3 */
    const embed = new Discord.MessageEmbed()
      .setTitle("Insult me")
      .setColor("GREEN");

    /* Generate 1st Button with "Yes" lable on it */
    const button1 = new buttonClient.MessageButton()
      .setLabel("Yes")
      .setStyle("green")
      .setID("yes");

    /* Generate 2nd Button with "No" label on it */
    const button2 = new buttonClient.MessageButton()
      .setLabel("No")
      .setStyle("red")
      .setID("no");

    /* Generate 3rd Link Button */
    const button3 = new buttonClient.MessageButton()
      .setLabel("Join me on OnlyFans")
      .setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ");

    /* Send Message with button */
    buttonClient.send(null, {
      channel: message.channel.id,
      embed,
      buttons: [[button1, button2], [button3]],
    });
  }
});

let url = "https://evilinsult.com/generate_insult.php?lang=en&type=json";

/* Listen to buttons event with their ID */
buttonClient.on("yes", (inta) => {
  axios
    .get(url)
    .then((response) => {
    //  console.log("Resp " + response.data.insult);
      theInsult = decode(response.data.insult);
     // console.log("The Insult " + theInsult.toString());
      return response.data.insult;
    })
    .then((response) => inta.message.reply(theInsult))
    .catch((error) => {
      console.log(error);
    });
});
buttonClient.on("no", (inta) =>
  inta.message.reply("WTF, you are the worst person, i have ever seen")
);

client.login(TOKEN);
