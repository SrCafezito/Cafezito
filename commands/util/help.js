const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
  name: "Help",
  description: "Please help",
  aliases: ["HELP","Help","help"],
  cooldown: 3,
  async execute(client, message, args) {

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
        .addField("[ Utilidades ]",'`avatar`,`invite`,`say`,`suggest`,`clima`,`emoji`,`calcular`,`traduzir`')
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
        .addField("[ Moderação ]",'`anunciar`,`lockchannel`,`unlockchannel`,`ban`,`clear`,`kick`,`slowmode`')
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
        .addField("[ Informações ]",'`ping`,`infobot`,`serverinfo`,`help`,`uptime`')
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
        .addField("[ Diversão ]", '`abraçar`,`beijar`,`brindar`,`cafuné`,`tapa`,`aki`,`8ball`')
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
};