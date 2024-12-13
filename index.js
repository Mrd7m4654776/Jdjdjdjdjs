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
    .setURL('https://www.twitch.tv/') 
    .setState('🛠️・@HighStaff @Developer')
    .setName('👇・')
    .setDetails(`🔗・Welcome To The Server S5B`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1317097321497890880/1317218253944131584/image_-_2024-06-27T075043.655.png?ex=675de298&is=675c9118&hm=bfcd9041bbe535847ebba99278192c2db1d26ff3f507d8219a53d6ae8ed5885a&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('🎉・حياكم الله يالنشامى سيرفر مبهر') 
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1317097321497890880/1317218253944131584/image_-_2024-06-27T075043.655.png?ex=675de298&is=675c9118&hm=bfcd9041bbe535847ebba99278192c2db1d26ff3f507d8219a53d6ae8ed5885a&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Small Text') 
    .addButton('سيرفر صخب', 'https://discord.gg/S5B');

  
  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
