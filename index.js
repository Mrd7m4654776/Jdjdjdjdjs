const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});
//environment
require('dotenv').config()

function formatTime() { 
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', 
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}
const express = require("express")
const app = express();
var listener = app.listen(process.env.PORT || 2000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
app.listen(() => console.log("I'm Ready To Work..! 24H"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>Bot 24H ON!</h1></center
  </body>`)
});
client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1257088531843649740')
    .setType('PLAYING')
    .setURL('https://www.twitch.tv/apparentlyjack_rl') 
    .setState('الإحترام هو أجمل هدية نقدمها للناس')
    .setName('عبد الرحمن بن علي')
    .setDetails(`سيرفر فواز المتواضع`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1311069774293237813/1312891169704771645/1724695276000-1.png?ex=674e24af&is=674cd32f&hm=27c11ba159329888bcf9fcc1aba2ccc67b11b067672d3c271a105331426d044e&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Supervisor') 
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1311069774293237813/1312891169704771645/1724695276000-1.png?ex=674e24af&is=674cd32f&hm=27c11ba159329888bcf9fcc1aba2ccc67b11b067672d3c271a105331426d044e&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Small Text') 
    .addButton('Server Fwaz', 'https://discord.gg/fwaz');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
