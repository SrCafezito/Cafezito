const Discord = require("discord.js");

module.exports = {
    name: "slowmode",
    aliases: ["Slowmode", "SLOWMODE", " slowmode", " Slowmode", " SLOWMODE"],
    usage: ["[tempo]"],
    description: "Muda o slowmode do channel",
    clientPermissions: ["ADMIN"],
    userPermissions: ["ADMIN"],
    run: async (client, message, args) => {
        var time = args[0]
        if (!time) {
            message.react(":X:748632517476745226");
            return message.reply("precisas de especificar o tempo para o slowmode!");
        }
        if (time <= 0) {
            message.react(":X:748632517476745226");
            return message.reply("o tempo do slowmode tem que ser de 1 para cima!");
        }
        const embed = new Discord.MessageEmbed()
            .setTitle(`O slowmode deste channel é agora ${time}.`)
            .setColor("BBA6EB");
        message.channel.setRateLimitPerUser(time);
        message.channel.send(embed)
    }
}