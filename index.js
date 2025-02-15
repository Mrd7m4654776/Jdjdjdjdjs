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
    .setApplicationId('778357315459874826')
    .setType('PLAYING')
    .setURL('https://www.twitch.tv/') 
    .setState('mr')
    .setName('Abdulrahman Bin Ali')
    .setDetails(`guerriero di successo`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1337039991242756157/1340279629625298974/45b0ac938a298610c0fcb13028056fe6.jpg?ex=67b1c82c&is=67b076ac&hm=b74af2ff37c13a20df3c1922007ec92e25f50e9dab0947bf404a4193d86c0de7&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('🛠️') 
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1337039991242756157/1340279629625298974/45b0ac938a298610c0fcb13028056fe6.jpg?ex=67b1c82c&is=67b076ac&hm=b74af2ff37c13a20df3c1922007ec92e25f50e9dab0947bf404a4193d86c0de7&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Small Text') 
    

  
  
  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
