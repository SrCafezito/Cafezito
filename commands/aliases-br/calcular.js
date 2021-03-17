const Discord = require("discord.js")
const math = require("mathjs")

module.exports = {
   name: "Calcular", 
   description: "Calcular",
   aliases: ["CALCULAR","Calcular","calcular"],
   cooldown: 3,
   async execute(client, message, args) {

        if(!args[0]) return message.channel.send('<:X:748632517476745226> Por favor especifique uma expressão!');
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
};
