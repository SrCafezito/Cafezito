const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
  name: "Anunciar", 
  description: "Anunciar algo",
  aliases: ["ANUNCIAR","Anuciar","anunciar"],
  cooldown: 3,
  async execute(client, message, args) {

        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('Você não tem permissão para usar este comando');

        let mention;

        if(!args.length) return message.channel.send('Use: c!anunciar #canal mensagem');

        const channel = message.mentions.channels.first();
        if(!channel) return message.reply('Especifique um canal!');

        if(!args[1]) return message.reply('Por favor, especifique uma mensagem para anunciar!');

        // mentions
        if(args.some((val) => val.toLowerCase() === '-ping')) {
            for (let i = 0; i < args.length; i++ ) {
                if(args[i].toLowerCase() === '-ping') args.splice(i, 1);
            }

            mention = true;
        } else mention = false;

        if(mention === true) channel.send('@everyone');

        channel.send(
            new MessageEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(args.slice(1).join(" "))
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setTimestamp()
                .setColor('#FC0000')
        )

     message.delete();
    }
};