const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "lockchannel",
  description: "Bloquei um canal",
  userPermissions: [],
  aliases: ["bloquearcanal", "lock", "bloquear"],
  cooldown: 3,

async execute(client, message, args) {

  if(!message.member.hasPermission('MANAGE_CHANNELS')) {
      const lockchannelError = new MessageEmbed()
      .setDescription('<:xis:805803542148939816> Você não tem permissão para bloquear canais de texto!')
      .setColor("#3386FF")

      return message.channel.send(lockchannelError)
  }

  let channel = message.mentions.channels.first();
  let reason = args.join(" ") || 'Razão não especificada!'

  if(channel) {
      reason = args.join(" ").slice(22) || 'Razão não especificada!'
  } else (
      channel = message.channel
  )

  if(channel.permissionsFor(message.guild.id).has('SEND_MESSAGES') === false) {
      const lockchannelError2 = new MessageEmbed()
      .setDescription(`<:xis:805803542148939816> ${channel} já está bloqueado!`)
      .setColor("#3386FF")

      return message.channel.send(lockchannelError2)
  }

  channel.updateOverwrite(message.guild.id, { SEND_MESSAGES: false })

  const embed = new MessageEmbed()
  .setTitle(`<a:yes:801225089475411968> Canal bloqueado!`)
  .setDescription(`**Canal:** ${channel} \n **Razão:** ${reason}`)
  .setColor("#3386FF")

  message.channel.send(embed)
  }
}