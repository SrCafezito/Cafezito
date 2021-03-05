const Discord = require("discord.js")
const fetch = require("node-fetch")
const querystring = require("querystring");

module.exports = {
    name: "urban",
    aliases: ["Urban", "URBAN", ' urban', " Urban", " URBAN"],
    usage: ["[palavra]"],
    description: "Procura o significado de alguma coisa no urban dictionary",
    clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    userPermissions: [],
    nsfw: true,
    run: async (client, message, args) => {
        const query = querystring.stringify({ term: args.join(' ') })
        let image = "https://is4-ssl.mzstatic.com/image/thumb/Purple111/v4/7e/49/85/7e498571-a905-d7dc-26c5-33dcc0dc04a8/source/512x512bb.jpg"
        if (!args.length) {
            message.react(":X:748632517476745226")
            return message.channel.send('Precisas de especificar um termo!')
        }
        const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());
        if (!list.length) {
            return message.channel.send(`Nenhum resultado para o termo: **${args.join(' ')}**.`)
        }
        try {
            var embed = new Discord.MessageEmbed()
                .setAuthor(`Urban Dictionary ➜ Resultado para: [${args.join()}]`, image)
                .setTitle(list[0].word.toUpperCase())
                .setURL(list[0].permalink)
                .setDescription(`**Definição de __${list[0].word}__**\n${list[0].definition}\n\n**Exemplo para __${list[0].word}__**\n${list[0].example}\n\n`)
                .addField(`Autor`, `${list[0].author}`)
                .addField(`Rating`, `👍 ${list[0].thumbs_up.toLocaleString()} | 👎 ${list[0].thumbs_down.toLocaleString()}`)
                .setColor("BLUE")
                .setTimestamp()
                .setFooter(`Pedido por(a): ${message.member.user.username}`, message.member.user.displayAvatarURL())
            message.channel.send(embed);
        }
        catch (error) {
            console.log(error)
            return message.channel.send("Parece que deu error")
        }
    }
}