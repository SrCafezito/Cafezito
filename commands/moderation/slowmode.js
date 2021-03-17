const Discord = require("discord.js")

module.exports = {
  name: "slowmode",
  description: "Coloque modo lento no canal",
  userPermissions: [],
  aliases: ["modolento"],
  cooldown: 3,
  async execute(client, message, args) {

  var time = args[0]
  if (!time) {
    return message.reply("<:xis:805803542148939816> Você precisa de especificar o tempo para o slowmode!");
  }
  if (time <= 0) {
    return message.reply("<:xis:805803542148939816> O tempo do slowmode tem que ser de 1 para cima!");
  }
  const embed = new Discord.MessageEmbed()
    .setTitle(`<a:yes:801225089475411968> O modo lento deste chat é agora de ${time} segundos.`)
    .setColor("#33CEFF");
  message.channel.setRateLimitPerUser(time);
  message.channel.send(embed)
  }
};