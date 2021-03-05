const Discord = require("discord.js")
const math = require("mathjs")

module.exports = {
    name: "math",
    aliases: ["Calcular", "CALCULAR", "calcular", " Math", " MATH"],
    usage: ["[conta (ex: 9 + 9)]"],
    description: "Faz alguma operação matemática",
    clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    userPermissions: [],
    run: async (client, message, args) => {
        if(!args[0]) return message.channel.send('<:X:748632517476745226> Por favor especifica uma pergunta!');
        let resp;
        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send('<:X:748632517476745226> Houve um erro a calcular: `' + `${e.message}` + '`')
        }
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Calculator')
        .addField('Questão', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('Resposta', `\`\`\`css\n${resp}\`\`\``)
        message.channel.send(embed);
    }
}