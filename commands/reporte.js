const { richembed } = require('discord.js');
const { stripindents } = require("common-tags"); 
var msg
var guildmember
var document

module.exports = {
    name: "reporte",
    category: "commands",
    description: "reports a member",
    usage: "<mention | id>",
run: async (client, message, args) => {
    if (message.deletable) message.delete();

    let rmember = message.mentions.members.first()   || message.guild.members.get(args[0]);

    if (!rmember)
        return message.reply("couldn´t find that person").then(m => m.delete(5000));

    if (rmember.haspermission("ban_members") || rmember.user.client)
        return message.reply("can´t report that member").then(m => m.delete(5000));
        
    if (!args[1])
        return Message.Channel.send("please provide a reason for the report!").then(m => m.delete(5000));
    
    const channel = message.guild.channels.find(channel => channel.name === "bot-logs");
    
    if (!channel)
        return message.channel.send("i clould not find a \`#hablar-con-los-admin\` channel").then(m => m.delete(5000));


    const embed = new richembed()
        .setcolor("#ff0000")
        .settimestamp()
        .setfooter(message.guild.name, message.guild.iconurl)
        .setauthor("reported member", rmember.user.displayavatarurl)
        .setdescription(stripindents`**> member:** ${rmember} (${rmember.id})
        **> reported by:** ${message.member} (${message.member.id})
        **> reported in:** ${message.channel}
        **> reason:** ${args.slice(1).join(" ")}`);

      return channel.send(embed);

}

}









