const Discord = require('discord.js')

module.exports = {
  name: "ban",
  description: "Bane algum usuario do servidor",
  userPermissions: [],
  aliases: ["Ban","BAN","ban"],
  cooldown: 5,
  async execute(client, message, args) {
   let banned =
    message.mentions.users.first() || client.users.resolve(args[0]);
   let reason = args.slice(1).join(' ');

   if (!banned) {
   let baninfoembed = new Discord.MessageEmbed()
      .setTitle('Comando: ban')
      .setDescription(
        `**Descrição:** Banir um membro. \n` +
          '**Uso:**\n' +
          'n!ban [user] (razão) \n' +
          '**Exemplo:** \n' +
          'n!ban @usuário spam'
      )
      .setColor('#FF6433');
    message.channel.send(baninfoembed);

    return;
  }

  if (message.author === banned) {
    let sanctionyourselfembed = new Discord.MessageEmbed()
      .setDescription(`<:xis:805803542148939816> Você não pode banir você mesmo.`)
      .setColor('#FF6433');
    message.channel.send(sanctionyourselfembed);

    return;
  }

  if (!reason) {
    let noreasonembed = new Discord.MessageEmbed()
      .setDescription(`<:xis:805803542148939816> Coloque uma razão, para que eu possa puni-lo`)
      .setColor('#FF6433');
    message.channel.send(noreasonembed);

    return;
  }

  if (!message.member.permissions.has('BAN_MEMBERS')) {
    let nopermsembed = new Discord.MessageEmbed()
      .setDescription(
        '<:xis:805803542148939816> Você não tem permissão para usar esse comando! Apenas moderadores.'
      )
      .setColor('#FF6433');
    message.channel.send(nopermsembed);

    return;
  }

  if (!message.guild.me.permissions.has('BAN_MEMBERS')) {
    let botnopermsembed = new Discord.MessageEmbed()
      .setDescription(
        '<:xis:805803542148939816> Eu não tenho permissão para puni-lo, suba meu cargo para que eu possa puni-lo.'
      )
      .setColor('#FF6433');
    message.channel.send(botnopermsembed);

    return;
  }

  message.guild.members.ban(banned, { reason: reason });

  let successfullyembed = new Discord.MessageEmbed()
    .setTitle(`<a:yes:801225089475411968> ${banned.tag} usuário banido.`)
    .setColor('#FF6433');

  message.channel.send(successfullyembed);
  }
};