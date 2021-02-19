const Discord = require('discord.js');

exports.run = async (client, message, args) => {
	var list = [
		'https://i.imgur.com/COJeuRc.gif',
    'https://imgur.com/tyVYG3i.gif',
    'https://imgur.com/3A1vAAp.png',
    'https://imgur.com/YjjtDUs.png',
    'https://imgur.com/6a1t5LW.png',
    'https://imgur.com/GfMXNLI.gif',
    'https://imgur.com/uxKpg9X.gif',
    'https://imgur.com/AgquZLd.gif',
    'https://i.imgur.com/PsFmzGI.gif',
    'https://i.imgur.com/Lwis0bF.gif',
    'https://imgur.com/5yThG4t.gif',
    'https://imgur.com/B2AJXzU.gif',
    'https://imgur.com/njAIXhp.gif',
    'https://imgur.com/B6eCRaa.gif',
    'https://imgur.com/q7lBd1q.gif',
    'https://imgur.com/3zoZMJV.gif'
	];

	var rand = list[Math.floor(Math.random() * list.length)];
	let user = message.mentions.users.first() || client.users.cache.get(args[0]);
	if (!user) {
		return message.reply(
			'lembre-se de mencionar um usuário válido para brindar!'
		);
	}
	/*
message.channel.send(`${message.author.username} ** acaba de brindar** ${user.username}! :heart:`, {files: [rand]});
*/
	let avatar = message.author.displayAvatarURL({ format: 'png' });
	const embed = new Discord.MessageEmbed()
		.setTitle('🥂 Kampai! 🥂')
		.setColor('#FFDA32')
		.setDescription(`Um brinde à vida, à felicidade e sua companhia ${user}!`)
		.setImage(rand);
	await message.channel.send(embed);
};
