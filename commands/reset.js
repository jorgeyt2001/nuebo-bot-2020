const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports.run = async (bot, message, args) => { 
    if(message.author.id !== "366038927812853763") return message.channel.send("You cannot use this command because, you are not a developer.")

    
  rebootBot(message.channel);
       function rebootBot(channel) {
           message.react('✅')
               .then(message => bot.destroy())
               .then(message => bot.destroy())
               .then(() => bot.login("NTQ4MTM2MDU5MTE3MTA5MjY0.D3ENig.mwPjw0v5mQSvASZ842bA49UTdzQ"));
           message.channel.send("``[bot administrador equipo ll] has successfully rebooted!``")
       }
    }