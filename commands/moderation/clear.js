module.exports = {
  name: "Clear", 
  description: "Limpar mensagens",
  aliases: ["CLEAR","Clear","clear"],
  cooldown: 3,
        async execute(client, message, args) {
        if (message.deletable) {
            message.delete();
        }

        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("Você não pode deletar mensagens ....").then(m => m.delete(5000));
        }

        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.reply("Sim .... Isso não é um número? A propósito, também não consigo excluir 0 mensagens.").then(m => m.delete(5000));
        }

        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("Desculpe ... Não consigo excluir mensagens.").then(m => m.delete(5000));
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(`O chat teve ${deleted.size} mensagens deletadas por ${message.author}`))
            .catch(err => message.reply(`Algo deu errado ... ${err}`));
    }
}