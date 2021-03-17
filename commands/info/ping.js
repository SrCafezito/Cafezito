const Discord = require('discord.js')

module.exports = {
  name: "ping",
  description: "veja o ping do Nasko",
  clientPermissions: [],
  aliases: [],
  cooldown: 3,

  async execute(client, message, args) {
  const embed = new Discord.MessageEmbed()
	.setColor("#FF3333")
	.setTitle(`🏓 **Pong!**`)
  .setDescription(`**📡 Latencia da API:** ${Math.round(client.ws.ping)}ms`);
  message.channel.send(embed);
  }
};