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
    .setState('🤍・ألا بذكر الله تطمئن القلوب')
    .setName('👇・لكسب حسنات الرابط في الأسفل')
    .setDetails(`🍂・تثقف في الدين الاسلامي`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1270151141660819538/1316808017345380373/7424B268-2B32-4F2E-8AD2-0D9F58942942.png?ex=675c6488&is=675b1308&hm=d63a5e633afe115f8b0e1ab263aa68415923cdf052dc345d1755358676b484dc&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('🤍・ألا بذكر الله تطمئن القلوب') 
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1270151141660819538/1316808017345380373/7424B268-2B32-4F2E-8AD2-0D9F58942942.png?ex=675c6488&is=675b1308&hm=d63a5e633afe115f8b0e1ab263aa68415923cdf052dc345d1755358676b484dc&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Small Text') 
    .addButton('سيرفر لحَّظٰت', 'https://discord.gg/5G9eGxsw');

  
  client.user.setActivity(r);
  client.user.setPresence({ status: "offline" }); //dnd, online, idle, offline

});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
