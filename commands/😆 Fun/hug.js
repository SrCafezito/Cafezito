const Discord = require('discord.js');

exports.run = async (client, message, args) => {
	var list = [
		'https://cdn.glitch.com/204e0182-11b5-4c3b-bc2d-93a2738cadf7%2Fsource.gif?v=1606531347776',
		'https://cdn.glitch.com/204e0182-11b5-4c3b-bc2d-93a2738cadf7%2Foriginal%20(1).gif?v=1606531429101',
		'https://cdn.glitch.com/204e0182-11b5-4c3b-bc2d-93a2738cadf7%2Ftenor%20(6).gif?v=1606531486063',
		'https://cdn.glitch.com/204e0182-11b5-4c3b-bc2d-93a2738cadf7%2F1461071296-7451c05f5aae134e2cceb276b085a871.gif?v=1606531542144',
		'https://cdn.glitch.com/204e0182-11b5-4c3b-bc2d-93a2738cadf7%2Ftumblr_4b73c9ce37c2c8d34a97641f8fd97338_be4510db_500.gif?v=1606531597881',
		'https://cdn.glitch.com/204e0182-11b5-4c3b-bc2d-93a2738cadf7%2Fr9aU2xv.gif?v=1606531622535',
		'https://cdn.glitch.com/204e0182-11b5-4c3b-bc2d-93a2738cadf7%2Ftenor%20(7).gif?v=1606531660354',
		'https://cdn.glitch.com/204e0182-11b5-4c3b-bc2d-93a2738cadf7%2Ff2805f274471676c96aff2bc9fbedd70.gif?v=1606531876172'
	];

	var rand = list[Math.floor(Math.random() * list.length)];
	let user = message.mentions.users.first() || client.users.cache.get(args[0]);
	if (!user) {
		return message.reply(
			'lembre-se de mencionar um usuário válido para abraçar-ló (a)!'
		);
	}

	let avatar = message.author.displayAvatarURL({ format: 'png' });
	const embed = new Discord.MessageEmbed()
		.setColor('#00F3FF')
		.setDescription(`💛${message.author} abraçou ${user}!`)
		.setImage(rand);
	await message.channel.send(embed);
};
