const Discord = require("discord.js")
const { Aki } = require("aki-api"),
      emojis = ["👍", "👎", "❔", "🤔", "🙄", "❌"],
      Started = new Set();
      
module.exports = {
    name: "akistart",
    aliases: ["Akistart", "AKISTART", " akistart", " Akistart", " AKISTART"],
    clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS", "ADD_REACIONS"],
    userPermissions: [],
    run: async (client, message, args) => {
      if(!Started.has(message.author.id))Started.add(message.author.id);
      else return message.channel.send("**:x: | O jogo já começou..**");
      const aki = new Aki("pt"); // Full languages list at: https://github.com/jgoralcz/aki-api
      await aki.start();
      const msg = await message.channel.send(new Discord.MessageEmbed()
            .setTitle(`${message.author.username}, Questão nº${aki.currentStep + 1}`)
            .setColor("#FFE000")
            .setDescription(`**${aki.question}**\n${aki.answers.map((x, i) => `${x} | ${emojis[i]}`).join("\n")}`));
      for(let emoji of emojis)await msg.react(emoji).catch(console.error);
      const collector = msg.createReactionCollector((reaction, user) => emojis.includes(reaction.emoji.name) && user.id === message.author.id,{ time: 60000 * 6 });
      collector.on("collect", async (reaction, user) => {
            reaction.users.remove(user).catch(console.error);
            if(reaction.emoji.name == "❌")return collector.stop();
            await aki.step(emojis.indexOf(reaction.emoji.name));
            if (aki.progress >= 70 || aki.currentStep >= 78) {
                  await aki.win();
                  collector.stop();
                  message.channel.send(new Discord.MessageEmbed()
                        .setTitle("É esta a tua personagem?")
                        .setDescription(`**${aki.answers[0].name}**\n${aki.answers[0].description}\nRank **#${aki.answers[0].ranking}**\n\n[yes (**y**) / no (**n**)]`)
                        .setImage(aki.answers[0].absolute_picture_path)
                        .setColor("#FFE000"));
                  message.channel.awaitMessages(response => ["yes","y","no","n"].includes(response.content.trim().toLowerCase()) &&
                  response.author.id == message.author.id, { max: 1, time: 30000, errors: ["time"] })
                  .then(collected => {
                        const content = collected.first().content.trim().toLowerCase();
                        if (content == "y" || content == "yes")
                              return message.channel.send(new Discord.MessageEmbed()
                              .setColor("#FFE000")
                              .setTitle("Boa! Acertei mais uma vez!")
                              .setDescription("Queres tentar outra vez?"));
                        else 
                              return message.channel.send(new Discord.MessageEmbed()
                              .setColor("#FFE000")
                              .setTitle("Uh. ganhaste...")
                              .setDescription("Na próxima vez vou ter a minha vingança!"));
                  });
            return;
            }
            msg.edit(new Discord.MessageEmbed()
                  .setTitle(`${message.author.username}, Questão nº${aki.currentStep + 1}`)
                  .setColor("#FFE000")
                  .setDescription(`**${aki.question}**\n${aki.answers.map((x, i) => `${x} | ${emojis[i]}`).join("\n")}`));
      });
      collector.on("end",()=>{ Started.delete(message.author.id);
            msg.delete({ timeout: 1000 }).catch(()=>{});
      });
    }
}