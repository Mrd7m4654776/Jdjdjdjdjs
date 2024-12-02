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
    .setType('STREAMING')
    .setURL('https://www.twitch.tv/') 
    .setState('أما بفعل يمناك ولا تبرقع')
    .setName('Mr.D7m')
    .setDetails(`.`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1311069774293237813/1313292450764427334/ba2a8222ebddc79a055a0d6be0421b76.jpg?ex=674f9a68&is=674e48e8&hm=b8de94f9f396d74931f5a21c972cc323d887831a8ab0bdd94a73cdb4447193c1&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('-') 
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1311069774293237813/1313292928021434439/1313292840784367682remix-1733183831189.png?ex=674f9ad9&is=674e4959&hm=6ceb75ad82cbdbf27c4e9b660290780f075d490b949bb19f6bdd462a4df6d0fb&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Small Text') 
    .addButton('DISCORD', 'https://discord.gg/');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
