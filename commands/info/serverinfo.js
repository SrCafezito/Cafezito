const Discord = require('discord.js');

module.exports = {
  name: "Serverinfo",
  description: "Informações de um servidor",
  aliases: ["SERVERINFO","Serverinfo","serverinfo"],
  cooldown: 5,
  async execute(client, message, args) {

  function checkBots(guild) {
    let botCount = 0;
    guild.members.cache.forEach(member => {
      if (member.user.bot) botCount++;
    });
    return botCount;
  }

  function checkMembers(guild) {
    let memberCount = 0;
    guild.members.cache.forEach(member => {
      if (!member.user.bot) memberCount++;
    });
    return memberCount;
  }

  function checkOnlineUsers(guild) {
    let onlineCount = 0;
    guild.members.cache.forEach(member => {
      if (member.user.presence.status === 'online') onlineCount++;
    });
    return onlineCount;
  }

  let sicon = message.guild.iconURL;
  let serverembed = new Discord.MessageEmbed()
    .setThumbnail(message.guild.iconURL({ dynamic: true, size: 1024 }))
    .setTitle(`<:discord:820664588055347220> ${message.guild.name}`)
    .setColor('#7289DA')
    .setImage(message.guild.splashURL({ dynamic: true, size: 1024 }))
    .addField('💻ID', message.guild.id, true)
    .addField('💻 Shard ID',message.guild.shardID + ' — Cafezito Cluster 12 (Riolu)')
    .addField('👑 Dono',
    message.guild.owner.user.tag, true)
    .addField('🌍 Região', message.guild.region, true)
    .addFields([
      {
            name:'💬 Canais:',
            value: message.guild.channels.cache.size,
            inline: true,
        },
      {
        name:'📝 Textos:',
        value:message.guild.channels.cache.filter(m => m.type === 'text').size,
        inline: true,
      },
      {
        name:'🗣 Voz:',
        value:message.guild.channels.cache.filter(m => m.type === 'voice').size,
        inline: true,
      },
      {
        name:'👥 Membros',
        value: message.guild.memberCount,
        inline: true,
      }
        ])
    .addField('📅 Criado em', message.guild.createdAt, true)
    return message.channel.send(serverembed);
   }
};
