const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "ping",
  description: "Check bot latency to Discord API",
  userperm: "MANAGE_GUILD",
  run: async (client, message, args) => {
    const msg = await message.channel.send({ content: "Pinging..."});
    const messageping = msg.createdTimestamp - message.createdTimestamp;
    const Embed = new MessageEmbed()
      .setTitle("š Pong!")
      .setAuthor(
        `${message.author.username}`,
        message.author.displayAvatarURL()
      )
      .setDescription(
        `šØ ā¢ **Message Latency** \`${Math.floor(
          messageping
        )}ms\`\nš°ļø ā¢ **Bot Latency** \`${Math.round(client.ws.ping)}ms\``
      )
      .setColor(
        messageping < 350
          ? "GREEN"
          : messageping < 500 && messageping > 350
          ? "YELLOW"
          : "RED"
      );
    msg.edit({ content: `Pong!`, embeds: [Embed]});
  },
};
