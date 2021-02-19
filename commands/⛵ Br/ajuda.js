const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "ajuda",
    aliases: ["Ajuda", "AJUDA", "ajuda"],
    description: "Ajuda do Bot",

    async run (client, message, args){

        const utility = new Discord.MessageEmbed()
        .setAuthor(message.author.tag)
        .setColor("#FCC700")
        .setTitle("⚙️ Guia de ajuda do Cafezito ⚙️")
        .setDescription('Olá, sou Cafezito, tenho apenas 14 anos mas já tenho recursos úteis no seu cotidiano no discord!')
        .addField('Prefix do bot: `c!`','% - Uso restrito de Adm (sv).')
        .addFields([
      {
        name: "Linguagem",
        value: '% - Português',
        inline: true,
      },
      {
        name: "Código",
        value: '% - JavaScript',
        inline: true,
      },
    ])
        .addField("[ Utilidades ]",'`avatar`,`invite`,`say`,`sugest`,`clima`')
        .setThumbnail('https://imgur.com/AD2TPv5.jpeg')
        .setTimestamp()

        const moderation = new Discord.MessageEmbed()
        .setAuthor(message.author.tag)
        .setColor("#FCC700")
        .setTitle("⚙️ Guia de ajuda do Cafezito ⚙️")
        .setDescription('Olá, sou Cafezito, tenho apenas 14 anos mas já tenho recursos úteis no seu cotidiano no discord!')
        .addField('Prefix do bot: `c!`','% - Uso restrito de Adm (sv).')
        .addFields([
      {
        name: "Linguagem",
        value: '% - Português',
        inline: true,
      },
      {
        name: "Código",
        value: '% - JavaScript',
        inline: true,
      },
    ])
        .addField("[ Moderação ]",'`anunciar`,`addrole`,`ban`,`clear`,`kick`,`slowmode`')
        .setThumbnail('https://imgur.com/AD2TPv5.jpeg')
        .setTimestamp()

        const information = new Discord.MessageEmbed()
        .setAuthor(message.author.tag)
        .setColor("#FCC700")
        .setTitle("⚙️ Guia de ajuda do Cafezito ⚙️")
        .setDescription('Olá, sou Cafezito, tenho apenas 14 anos mas já tenho recursos úteis no seu cotidiano no discord!')
        .addField('Prefix do bot: `c!`','% - Uso restrito de Adm (sv).')
        .addFields([
      {
        name: "Linguagem",
        value: '% - Português',
        inline: true,
      },
      {
        name: "Código",
        value: '% - JavaScript',
        inline: true,
      },
    ])
        .addField("[ Informações ]",'`ping`,`botinfo`,`serverinfo`')
        .setThumbnail('https://imgur.com/AD2TPv5.jpeg')
        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        .setAuthor(message.author.tag)
        .setColor("#FCC700")
        .setTitle("⚙️ Guia de ajuda do Cafezito ⚙️")
        .setDescription('Olá, sou Cafezito, tenho apenas 14 anos mas já tenho recursos úteis no seu cotidiano no discord!')
        .addField('Prefix do bot: `c!`','% - Uso restrito de Adm (sv).')
        .addFields([
      {
        name: "Linguagem",
        value: '% - Português',
        inline: true,
      },
      {
        name: "Código",
        value: '% - JavaScript',
        inline: true,
      },
    ])
        .addField("[ Diversão ]", '`abraçar`,`beijar`,`brindar`,`cafuné`,`tapa`,`aki`,`bob`,`8ball`')
        .setThumbnail('https://imgur.com/AD2TPv5.jpeg')
        .setTimestamp()

        const pages = [
                utility,
                moderation,
                information,
                fun
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
        message.delete();
    }
}