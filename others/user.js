const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "user",
  aliases: ["u"],
  cooldown: 8,
  description: "**all commands Pinky**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(``)
    .setImage(`https://media.discordapp.net/attachments/848454202514079764/854642997894971392/image0.gif `)
    .setTitle(` Is One`)
    .setDescription(`
***USER COMMANS***

${PREFIX}prefix  ${PREFIX}setnick
${PREFIX}lock  ${PREFIX}unlock 
${PREFIX}ban  ${PREFIX}unban
${PREFIX}clear ${PREFIX}kick
${PREFIX}vkick ${PREFIX}addrole ${PREFIX}roleremove
${PREFIX}slowmode ${PREFIX}invites
${PREFIX}topinvites(tinvites)

`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM")
   message.react("✅")
    return message.channel.send(helpEmbed).catch(console.error);

  }
}; 
