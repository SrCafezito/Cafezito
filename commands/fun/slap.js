const Discord = require('discord.js');

module.exports = {
   name: "Slap", 
   description: "Dar um tapa em um mebro",
   aliases: ["SLAP","Slap","slap"],
   cooldown: 3,
   async execute(client, message, args) {

	 var list = [
		'https://cdn.glitch.com/204e0182-11b5-4c3b-bc2d-93a2738cadf7%2FoOCq3Bt.gif?v=1606530344838',
		'https://cdn.glitch.com/204e0182-11b5-4c3b-bc2d-93a2738cadf7%2Ftumblr_nel3qwSzqw1tblzm8o1_500.gif?v=1606530288220',
		'https://cdn.glitch.com/204e0182-11b5-4c3b-bc2d-93a2738cadf7%2Ftumblr_phizajqDcb1wj1nn0o1_400.gif?v=1606530323609',
		'https://cdn.glitch.com/d9bc45c5-8709-467b-b89f-449239cf4aeb%2Ftenor.gif?v=1605112978135',
		'https://cdn.glitch.com/d9bc45c5-8709-467b-b89f-449239cf4aeb%2Fo2SJYUS.gif?v=1605112941802',
		'https://cdn.glitch.com/d9bc45c5-8709-467b-b89f-449239cf4aeb%2FoRsaSyU.gif?v=1605112862407',
		'https://cdn.glitch.com/d9bc45c5-8709-467b-b89f-449239cf4aeb%2Ffm49srQ.gif?v=1605112817159',
		'https://cdn.glitch.com/d9bc45c5-8709-467b-b89f-449239cf4aeb%2Ftenor%20(2).gif?v=1605112761688'
	 ];

	 var rand = list[Math.floor(Math.random() * list.length)];
	 let user = message.mentions.users.first() || client.users.cache.get(args[0]);
	 if (!user) {
	 return message.reply(
	 'lembre-se de mencionar um usuário válido para bater!'
		);
	 }

	 let avatar = message.author.displayAvatarURL({ format: 'png' });
	 const embed = new Discord.MessageEmbed()
		.setColor('#FF8B00')
		.setDescription(`🙀${message.author} bateu em  ${user}!`)
		.setImage(rand);
	 await message.channel.send(embed);
   }
};