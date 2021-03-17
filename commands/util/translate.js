const translate = require('@iamtraction/google-translate')
const { MessageEmbed } = require('discord.js')
const { languages } = require("@iamtraction/google-translate")

module.exports = {
  name: "translate",
  description: "Traduza algo",
  clientPermissions: [],
  aliases: ["traduzir", "traduz"],
  cooldown: 3,

async execute(client, message, args) {

await translate(args.slice(1).join(" "), { to: args[0]}).then((result) => {
  const embed = new MessageEmbed()
    .setTitle('Tradução:')
    .setDescription(result.text)
    .setColor("#FF337D")

return message.channel.send(embed)
  })
.catch(error => {
const translateError = new MessageEmbed()
  .setDescription("<a:nao:796692969822486562> Desculpe! Essa linguagem não é valida.")
  .setColor("#FF337D")

return message.channel.send(translateError)
    })
  }
};