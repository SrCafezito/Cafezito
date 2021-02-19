const Discord = require('discord.js');

exports.run = async (client, message, args) => {
const sayMessage = args.join(' ');
message.delete().catch(O_o => {});

var sayList = [
`${sayMessage}`,
' ',
`_Mensagem enviada por ${message.author}_`
];

message.channel.send(sayList)
};