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
    .setState('🛠️｜HighStaff')
    .setName('🔗｜Welcome To the S5B')
    .setDetails(`📜｜Law is Respect`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1316380508393046047/1316527491451453542/image_-_2024-06-27T075043.655.png?ex=675b5f45&is=675a0dc5&hm=317b1023b7c8d5dd5c9ddd9304a0333e08137f23737d5c572dadd65829e81ac9&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('# S5B | HighStaff') 
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1316380508393046047/1316527491451453542/image_-_2024-06-27T075043.655.png?ex=675b5f45&is=675a0dc5&hm=317b1023b7c8d5dd5c9ddd9304a0333e08137f23737d5c572dadd65829e81ac9&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Small Text') 
    .addButton('SERVER S5B', 'https://discord.gg/s5b');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
