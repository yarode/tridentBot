const { helpEmbed } = require('../embed')

module.exports = async function help(message) {
  const newEmbed = helpEmbed()
  message.reply({ embeds: [newEmbed] })
}
