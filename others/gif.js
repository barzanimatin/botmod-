
const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "gifs",
  aliases: ["g"],
  cooldown: 8,
  description: "**all commands Pinky**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(``)
    .setImage(`https://media.discordapp.net/attachments/848454202514079764/854642997894971392/image0.gif `)
    .setTitle(`Calms Is One`)
    .setDescription(`
***gifs commnads***
${PREFIX}boy gif - ${PREFIX}love gif
${PREFIX}girl gif - ${PREFIX}sad gif
${PREFIX}meme 
*** <a:emoji_39:852897630605541417> | Game Commands***
${PREFIX}boom ${PREFIX}hug 
${PREFIX}kiss ${PREFIX}slap

`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM")
   message.react("✅")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
