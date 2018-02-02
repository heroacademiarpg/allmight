const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('regras', 'regras');



bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on('ready', () => {
    bot.user.setActivity('Hero Academia RPG PLUS ULTRA!')
  })
  
client.login(process.env.BOT_TOKEN);
