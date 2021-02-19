const Discord = require("discord.js");
const moment = require("moment");
moment.updateLocale("pt-BR");

module.exports = {
  config: {
    name: "serverinfo",
    aliases: ["server-info"],
    description: "Mostra as informações do servidor local!",
    example: "n!serverinfo",
    usage: "n!serverinfo"
  },
  run: async (bot, message, args) => {
    let membros = message.guild.members.cache;
    let emojis = message.guild.emojis.cache;
    let texto = message.guild.channels.cache.filter(ch => ch.type === "text");
    let voz = message.guild.channels.cache.filter(bh => bh.type === "voice");

    const embed = new Discord.MessageEmbed()
      .setTitle(`${message.guild.name}`)
      .setColor("#7289da")
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .addField(`💻ID:`, `${message.guild.id}`)
      .setThumbnail(message.guild.iconURL)
      .addField(
        "👑Dono",
        `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`,
        true
      )
      .addField("🌎Região ", message.guild.region, true)
      .addField(`👥Membros:`, `${message.guild.memberCount}`)
      .addField(
        `📆Criado em:`,
        `${moment(message.guild.createdTimestamp).format("ll")}`
      )
      .addField(`👻Emojis:`, `${emojis.size}`)
      .addField(`💬Canais de Texto:`, `${texto.size}`)
      .addField(`🔊Canais de Voz:`, `${voz.size}`);

    message.channel.send(embed);
  }
};
