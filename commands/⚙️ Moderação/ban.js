const Discord = require('discord.js');
module.exports = {
	name: 'ban',
	category: 'moderation',
	description: 'banir membros',
	run: async (client, message, args, guild) => {
		let banned =
			message.mentions.users.first() || client.users.resolve(args[0]);
		let reason = args.slice(1).join(' ');

		// MESSAGES

		if (!banned) {
			let baninfoembed = new Discord.MessageEmbed()
				.setTitle('Comando: ban')
				.setDescription(
					`**Descrição:** Banir um membro. \n` +
						'**Sub Comando:**\n' +
						'n!ban [user] (razão) \n' +
						'**Exemplo:** \n' +
						'n!ban <@599993939499221891> spam'
				)
				.setColor('#2C2F33');
			message.channel.send(baninfoembed);

			return;
		}

		if (message.author === banned) {
			let sanctionyourselfembed = new Discord.MessageEmbed()
				.setDescription(`você não pode banir você próprio.`)
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

		if (!message.member.permissions.has('BAN_MEMBERS')) {
			let nopermsembed = new Discord.MessageEmbed()
				.setDescription(
					'Você não tem permissão para usar esse comando! Apenas moderadores.'
				)
				.setColor('#2C2F33');
			message.channel.send(nopermsembed);

			return;
		}

		if (!message.guild.me.permissions.has('BAN_MEMBERS')) {
			let botnopermsembed = new Discord.MessageEmbed()
				.setDescription(
					'Eu não tenho permissão para puni-lo, suba meu cargo para que eu possa puni-lo.'
				)
				.setColor('#2C2F33');
			message.channel.send(botnopermsembed);

			return;
		}

		message.guild.members.ban(banned, { reason: reason });

		let successfullyembed = new Discord.MessageEmbed()
			.setTitle(`${banned.tag} usuário punido, não sabe ler as regras.`)
			.setColor('#2C2F33');

		message.channel.send(successfullyembed);
	}
};
