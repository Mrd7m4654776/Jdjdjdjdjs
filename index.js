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
    .setState('')
    .setName('سيرفر مبهر للجميع 🛠️')
    .setDetails(`حياكم الله يالنشامى`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1014189787395133511/1014308561968435260/LogoDiscordLoading.gif?ex=67577676&is=675624f6&hm=b09d406c214511b61ebb7ddcb13f075c592de6b8a99689d2ed18a4aee83a8eed&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('# S5B , HighStaff') 
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1014189787395133511/1014308561968435260/LogoDiscordLoading.gif?ex=67577676&is=675624f6&hm=b09d406c214511b61ebb7ddcb13f075c592de6b8a99689d2ed18a4aee83a8eed&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Small Text') 
    .addButton('سيرفر صخب', 'https://discord.gg/s5b');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
