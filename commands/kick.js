const Discord = require("discord.js");
const  client = new Discord.Client();
module.exports.run = async (client, message, args) => {

  let user = message.mentions.users.first();
  let razon = args.slice(1).join(' ');

  if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
  if(!razon) return message.channel.send('Escriba un razón, `*kick @username [razón]`');
  if (!message.guild.member(user).bannable) return message.reply('No puedo expulsar al usuario.' + user);

  message.guild.member(user).kick(razon);
  message.channel.send(`**${user.username}**, fue expulsado del servidor, razón: ${razon}.`);
}
