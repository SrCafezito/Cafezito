const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "unlockchannel",
  description: "Desbloqueie um canal",
  userPermissions: [],
  aliases: ["desbloquearcanal", "unlock", "desbloquear"],
  cooldown: 3,

async execute(client, message, args) {

  if(!message.member.hasPermission('MANAGE_CHANNELS')) {
      const unlockchannelError = new MessageEmbed()
      .setDescription('<:xis:805803542148939816> Você não tem permissão para desbloquear canais!')
      .setColor("#3386FF")

      return message.channel.send(unlockchannelError)
  }

  let channel = message.mentions.channels.first() || message.channel;

  if(channel.permissionsFor(message.guild.id).has('SEND_MESSAGES') === true) {
      const unlockchannelError2 = new MessageEmbed()
      .setDescription(`<:xis:805803542148939816> ${channel} não está bloqueado!`)
      .setColor("#3386FF")

      return message.channel.send(unlockchannelError2)
  }

  channel.updateOverwrite(message.guild.id, { SEND_MESSAGES: true })

  const embed = new MessageEmbed()
  .setTitle(`<a:yes:801225089475411968> Chat desbloqueado`)
  .setDescription(`${channel} agora está desbloqueado. Todos podem falar agora.`)
  .setColor("#3386FF")

  message.channel.send(embed)
  }
}