const Discord = require("discord.js")

module.exports = {
    name: "invite",
    aliases: ["Invite", "INVITE", "invite", " INVITE"],
    description: "Invite do Bot",
    clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    userPermissions: [],
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Convida o Bot!")
            .setDescription("Convida o Bot para o teu server para o utilizares como quiseres!")
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
            .addField("\u200B", `
**PT**- Se quer convidar o **${client.user.username}** para outro server, aqui está o [Link](https://discord.com/oauth2/authorize?client_id=774642355680444437&scope=bot&permissions=8).`);
        message.channel.send(embed);
        message.delete();
    }
}