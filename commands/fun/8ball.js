const Discord = require('discord.js');

module.exports = {
  name: "8ball", 
  description: "Pergunta alguma coisa ao Bot",
  aliases: [],
  cooldown: 3,
async execute(client, message, args) {

let args1 = message.content.split(' ').slice(0);
let question = args1.slice(1).join(' ');
if (!question) {
	message.react(':X:748632517476745226');
		return message.reply('Precisas de especificar uma pergunta!');
	} else {
		let answers = [
			'Talvez.',
			'Certamente não.',
			'Acredito que sim.',
			'Não em seus sonhos mais selvagens.',
			'Há uma boa chance.',
			'Muito provável.',
			'Acho que sim.',
			'Espero que não.',
			'Acredito que sim.',
			'Nunca!',
			'Ahaha! Mesmo?!?',
			'Desculpe, mas não.',
			'Claro que sim.',
			'O futuro é sombrio.',
			'O futuro é incerto.',
			'Eu prefiro não falar.',
			'Quem se importa?',
			'Possivelmente.',
			'Nunca, nunca, nunca.',
			'Há uma pequena chance.',
			'Sim!'
      ];
let response = answers[Math.floor(Math.random() * answers.length)];
let embed = new Discord.MessageEmbed()
		.setColor("#FF8800")
		.addField('Resposta: ', response);
	message.channel.send(embed);
		}
	}
}