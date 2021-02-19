const Discord = require('discord.js');
module.exports = {
	name: 'kick',
	category: 'moderation',
	description: 'kickar membros',
	run: async (client, message, args, guild) => {
		let kicked =
			message.mentions.users.first() || client.users.resolve(args[0]);
		let reason = args.slice(1).join(' ');

		// MESSAGES

		if (!kicked) {
			let kickinfoembed = new Discord.MessageEmbed()
				.setTitle('Comando: kick')
				.setDescription(
					`**Descrição:** Dar kick em membros. \n` +
						'**Sub Comando:**\n' +
						'**Uso:**\n' +
						'n!kick [user] (razão) \n' +
						'**Exemplo** \n' +
						'n!kick <@997993999469221891> spam'
				)
				.setColor('#2C2F33');
			message.channel.send(kickinfoembed);

			return;
		}

		if (message.author === kicked) {
			let sanctionyourselfembed = new Discord.MessageEmbed()
				.setDescription(`você não pode dar kick em você próprio`)
				.setColor('#2C2F33');
			message.channel.send(sanctionyourselfembed);

			return;
		}

		if (!reason) {
			let noreasonembed = new Discord.MessageEmbed()
				.setDescription(`coloque uma razão, para que eu possa puni-lo`)
				.setColor('#2C2F33');
			message.channel.send(noreasonembed);

			return;
		}

		if (!message.member.permissions.has('KICK_MEMBERS')) {
			let nopermsembed = new Discord.MessageEmbed()
				.setDescription(
					'Você não tem permissão para usar esse comando! Apenas moderadores.'
				)
				.setColor('#2C2F33');
			message.channel.send(nopermsembed);

			return;
		}

		if (!message.guild.me.permissions.has('KICK_MEMBERS')) {
			let botnopermsembed = new Discord.MessageEmbed()
				.setDescription(
					'Eu não tenho permissão para puni-lo, suba meu cargo para que eu possa puni-lo'
				)
				.setColor('#2C2F33');
			message.channel.send(botnopermsembed);

			return;
		}

		message.guild.member(kicked).kick(reason);

		let successfullyembed = new Discord.MessageEmbed()
			.setDescription(`${kicked.tag} usuário kicked.`)
			.setColor('#2C2F33');

		message.channel.send(successfullyembed);
	}
};
