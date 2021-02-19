module.exports.run = async (client, message, args) => {
	const m = await message.channel.send('ping?');

	m.edit(
		`🏓**Pong!**\n📡Latência do Server: **${m.createdTimestamp -
			message.createdTimestamp}ms.**\n📡Latência da API: **${Math.round(
			client.ws.ping
		)}ms**`
	);
};
