const Discord = require('discord.js');

exports.run = async (client, message, args) => {
	var list = [
		'https://cdn.glitch.com/21dfa22b-0601-4db3-88bc-2537727a0d8b%2Ftenor%20(5).gif?v=1605495054388',
		'https://cdn.glitch.com/21dfa22b-0601-4db3-88bc-2537727a0d8b%2F59a8bcd1e9cc4fb5d7ae1a97c9fb466e.gif?v=1605494989425',
		'https://cdn.glitch.com/21dfa22b-0601-4db3-88bc-2537727a0d8b%2Ftumblr_fb89eb9c230087357a1d09438b0c464c_2797f47f_500.gif?v=1605494954713',
		'https://cdn.glitch.com/21dfa22b-0601-4db3-88bc-2537727a0d8b%2Ftumblr_edd6f059f0f79d2a672b75f50d1e0950_f3370711_400.gif?v=1605494919784',
		'https://cdn.glitch.com/21dfa22b-0601-4db3-88bc-2537727a0d8b%2Fget-a-room.gif?v=1605494883362',
		'https://cdn.glitch.com/21dfa22b-0601-4db3-88bc-2537727a0d8b%2F1469465842_tumblr_mz6f3rXppN1qcsnnso1_500.gif?v=1605494853959',
		'https://cdn.glitch.com/21dfa22b-0601-4db3-88bc-2537727a0d8b%2Fbef5f29916ba06f161e12e62c6c7fe49a2d619c5_hq.gif?v=1605494844517',
		'https://cdn.glitch.com/21dfa22b-0601-4db3-88bc-2537727a0d8b%2F2a8.gif?v=1605494833112',
		'https://cdn.glitch.com/d9bc45c5-8709-467b-b89f-449239cf4aeb%2Funnamed.gif?v=1605111604873',
		'https://cdn.glitch.com/d9bc45c5-8709-467b-b89f-449239cf4aeb%2Funnamed%20(1).gif?v=1605111383071',
		'https://cdn.glitch.com/d9bc45c5-8709-467b-b89f-449239cf4aeb%2Fgif_314.gif?v=1605558201247',
		'https://cdn.glitch.com/d9bc45c5-8709-467b-b89f-449239cf4aeb%2Fgif_282.gif?v=1605558198013',
		'https://cdn.glitch.com/d9bc45c5-8709-467b-b89f-449239cf4aeb%2Fgif_295.gif?v=1605558214408',
		'https://cdn.glitch.com/d9bc45c5-8709-467b-b89f-449239cf4aeb%2Fgif_283.gif?v=1605558225329',
		'https://cdn.glitch.com/d9bc45c5-8709-467b-b89f-449239cf4aeb%2Fgif_294.gif?v=1605558241403'
	];

	var rand = list[Math.floor(Math.random() * list.length)];
	let user = message.mentions.users.first() || client.users.cache.get(args[0]);
	if (!user) {
		return message.reply(
			'lembre-se de mencionar um usuário válido para beijar!'
		);
	}

	let avatar = message.author.displayAvatarURL({ format: 'png' });
	const embed = new Discord.MessageEmbed()
		.setTitle('Kiss')
		.setColor('#FF1493')
		.setDescription(`💕${message.author} beijou ${user}!`)
		.setImage(rand);
	await message.channel.send(embed);
};
