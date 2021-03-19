const Discord = require("discord.js")
const axios = require("axios")

module.exports = {
    name: "covid",
    aliases: ["covid-19", "corona", "Covid", "Covid-19", "Corona", "COVID", "COVID-19", "CORONA", " covid", " covid-19", " corona", " Covid", " Covid-19", " Corona", " COVID", " COVID-19", " CORONA"],
    usage: ["[país]"],
    description: "Estatísticas da covid-19 num país ou mundialmente",
    clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    userPermissions: [],
    run: async (client, message, args) => {
        const baseUrl = "https://corona.lmao.ninja/v2";
        let url, response, corona;
        try {
            url = args[0] ? `${baseUrl}/countries/${args[0]}`:`${baseUrl}/all`
            response = await axios.get(url)
            corona = response.data
        } catch (error) {
            const noArgs = new Discord.MessageEmbed()
                .setTitle('Erro!')
                .setColor("RANDOM")
                .setDescription(`__**${args[0]}**__ não existe, ou a API não está a responder.`)
                .setTimestamp()
            message.channel.send(noArgs)
        }
        const embed = new Discord.MessageEmbed()
            .setTitle(args[0] ? ` Estatísticas da Covid-19 em/no(a/s): ${args[0].toUpperCase()}` : 'Estatísticas da Covid-19 no Mundo 🌎')
            .setColor('RANDOM')
            .setThumbnail(args[0] ? corona.countryInfo.flag : 'https://www.jdv.com.br/midias/artigos/Imagens/1200px-sars-cov-2_without_background.png')
            .addFields(
                { name: 'Casos Confirmados:', value: `${corona.cases.toLocaleString()}`, inline: true },
                { name: 'Mortes:', value: `${corona.deaths.toLocaleString()}\n(${((corona.deaths / corona.cases) * 100).toFixed(2)}%)`, inline: true },
                { name: 'Recuperados:', value: `${corona.recovered.toLocaleString()}\n(${((corona.recovered / corona.cases) * 100).toFixed(2)}%)`, inline: true },
                { name: 'Casos Ativos:', value: `${corona.active.toLocaleString()}\n(${((corona.active / corona.cases) * 100).toFixed(2)}%)`, inline: true },
                { name: 'Testes:', value: `${corona.tests.toLocaleString()}`, inline: true },
                { name: 'Cuidados Intensi.:', value: `${corona.critical.toLocaleString()}\n(${((corona.critical / corona.cases) * 100).toFixed(2)}%)`, inline: true },
                { name: 'Casos Hoje:', value: `${corona.todayCases.toLocaleString()}`, inline: true },
                { name: 'Mortes Hoje:', value: `${corona.todayDeaths.toLocaleString()}`, inline: true },
                { name: 'Hoje Recuperados:', value: `${corona.todayRecovered.toLocaleString().replace("-", "")}`, inline: true })
        await message.channel.send(embed)
    }
}