const Discord = require('discord.js');

exports.run = async (client, message, args) => {
	var list = [
		'https://cdn.glitch.com/21dfa22b-0601-4db3-88bc-2537727a0d8b%2F1519470276_SAGIRI.gif?v=1605568930115',
		'https://cdn.glitch.com/21dfa22b-0601-4db3-88bc-2537727a0d8b%2Ff4db474fe5c9685e65ac51e31b27fd11.gif?v=1605569045011',
		'https://cdn.glitch.com/21dfa22b-0601-4db3-88bc-2537727a0d8b%2FHilariousFirsthandHippopotamus-max-1mb.gif?v=1605569055450',
		'https://cdn.glitch.com/21dfa22b-0601-4db3-88bc-2537727a0d8b%2Foriginal%20(2).gif?v=1605569072787',
		'https://cdn.glitch.com/21dfa22b-0601-4db3-88bc-2537727a0d8b%2Ftumblr_d81068e55cef3bfb81ba71573c2906a7_18d1fad3_640.gif?v=1605569230107',
		'https://cdn.glitch.com/21dfa22b-0601-4db3-88bc-2537727a0d8b%2Ftenor%20(8).gif?v=1605569288162',
		'https://cdn.glitch.com/21dfa22b-0601-4db3-88bc-2537727a0d8b%2Fgif_3.gif?v=1605569326331',
		'https://cdn.glitch.com/21dfa22b-0601-4db3-88bc-2537727a0d8b%2Fgif_9.gif?v=1605569375028',
		'https://cdn.glitch.com/21dfa22b-0601-4db3-88bc-2537727a0d8b%2Fgif_7.gif?v=1605569419864'
	];

	var rand = list[Math.floor(Math.random() * list.length)];
	let user = message.mentions.users.first() || client.users.cache.get(args[0]);
	if (!user) {
		return message.reply(
			'lembre-se de mencionar um usuário válido para fazer aquele cafuné gostoso:3!'
		);
	}

	let avatar = message.author.displayAvatarURL({ format: 'png' });
	const embed = new Discord.MessageEmbed()
		.setColor('#FFE400')
		.setDescription(`💚${message.author} fez cafuné em ${user}!`)
		.setImage(rand);
	await message.channel.send(embed);
};
