// Conexão com as livrarias necessárias //
const { Client, Collection, Discord } = require("discord.js");
const { TOKEN, PREFIX } = require("./utils/util");
const { readdirSync } = require("fs");
const { join } = require("path");
const express = require('express');
const fs = require("fs");

// Limite de 100 Listeners //
require('events').EventEmitter.prototype._maxListeners = 100;
require('events').defaultMaxListeners = 100;

// Sistema de ping //
const app = express();
app.listen(process.env.PORT);
app.get('/', (request, response) => {
	const ping = new Date();
	ping.setHours(ping.getHours() - 3);
	console.log(
		`Ping recebido às ${ping.getUTCHours()}h${ping.getUTCMinutes()}m${ping.getUTCSeconds()}s`
	);
	response.sendStatus(200);
});

// Criação de um novo Client //
const client = new Client({ 
  disableMentions: "everyone",
  restTimeOffset: 0
});

// Informaçoes do prefixo. //
client.on("message", message => {
  if (message.author.bot) return false;

  if (message.content.includes("@here") || message.content.includes("@everyone")) return false;

  if (message.mentions.has(client.user.id)) {
      message.reply("Meu prefixo é `c!` para ver o que eu posso fazer, use `c!ajuda`!");
  };
});


// Importação com token, prefixo e etc. //
client.login(TOKEN);
client.commands = new Collection();
client.prefix = PREFIX;
client.queue = new Map();
const cooldowns = new Collection();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// Importação dos comandos //
fs.readdir("./commands/aliases-br/", (err, files) => {
  let jsFiles = files.filter(f => f.split(".").pop() === "js")
  if (jsFiles.length <= 0) return console.log("")
  jsFiles.forEach((file) => {
    let cmd = require(`./commands/aliases-br/${file}`)
    client.commands.set(cmd.name, cmd)
  })
})
fs.readdir("./commands/fun/", (err, files) => {
  let jsFiles = files.filter(f => f.split(".").pop() === "js")
  if (jsFiles.length <= 0) return console.log("")
  jsFiles.forEach((file) => {
    let cmd = require(`./commands/fun/${file}`)
    client.commands.set(cmd.name, cmd)
  })
})
fs.readdir("./commands/info/", (err, files) => {
  let jsFiles = files.filter(f => f.split(".").pop() === "js")
  if (jsFiles.length <= 0) return console.log("")
  jsFiles.forEach((file) => {
    let cmd = require(`./commands/info/${file}`)
    client.commands.set(cmd.name, cmd)
  })
})
fs.readdir("./commands/moderation/", (err, files) => {
  let jsFiles = files.filter(f => f.split(".").pop() === "js")
  if (jsFiles.length <= 0) return console.log("")
  jsFiles.forEach((file) => {
    let cmd = require(`./commands/moderation/${file}`)
    client.commands.set(cmd.name, cmd)
  })
})
fs.readdir("./commands/util/", (err, files) => {
  let jsFiles = files.filter(f => f.split(".").pop() === "js")
  if (jsFiles.length <= 0) return console.log("")
  jsFiles.forEach((file) => {
    let cmd = require(`./commands/util/${file}`)
    client.commands.set(cmd.name, cmd)
  })
})

// Sistema dos comandos //
client.on("message", async (message) => {
if (message.author.bot) return;
if (!message.guild) return;

const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(PREFIX)})\\s*`);
if (!prefixRegex.test(message.content)) return;

const [, matchedPrefix] = message.content.match(prefixRegex);

const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
const commandName = args.shift().toLowerCase();

const command =
  client.commands.get(commandName) ||
  client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

if (!command) return;

if (!cooldowns.has(command.name)) {
  cooldowns.set(command.name, new Collection());
}

// Sistema de cooldown //
const now = Date.now();
const timestamps = cooldowns.get(command.name);
const cooldownAmount = (command.cooldown || 1) * 1000;

if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

  if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.channel.send(
        `<:xis:805803542148939816> Por favor espere mais **${timeLeft.toFixed(1)}** segundos para usar o comando **${command.name}** novamente!`
    );
  }
}
timestamps.set(message.author.id, now);
setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

// Sistema de erro de comando //
try {
  command.execute(client, message, args);
} catch (error) {
  console.error(error);
  message.channel.send("<:xis:805803542148939816> Desculpe! Ocorreu um erro ao executar esse comando, tente novamente mais tarde!")
  .catch(console.error);
  }
});

// Rich Presence e Console Log //
client.on("ready", () => {
  let activities = [
      `meu prefixo é c!`,
      `use c!help`,
      `criador: Crunkz`,
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING",
      }), 15000);
  client.user
      .setStatus("online")
      .catch(console.error);

 // Console Log //     
console.log(`
+--------------+
|  BOT ONLINE  |
+--------------+
`);
});