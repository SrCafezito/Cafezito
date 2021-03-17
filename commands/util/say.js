const Discord = require('discord.js');

module.exports = {
  name: "Say", 
  aliases: ["SAY","Say","say"],
  description: "Faz o bot falar algo",
  cooldown: 5,
async execute(client, message, args) {

const sayMessage = args.join(' ');
message.delete().catch(O_o => {});

var sayList = [
`${sayMessage}`,
' ',
`_Mensagem enviada por ${message.author}_`
];

message.channel.send(sayList)
  }
}