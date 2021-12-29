
const Web3 = require('web3')
const { walletWarningEmbed } = require('../embed')
const dotenv = require('dotenv')
const { dbHandler } = require('../utils/db')
const { error } = require('../utils')


dotenv.config()

var web3 = new Web3(process.env.WEB3_URL)

module.exports = async function save_wallet(message) {
  const rawAddress = message.content.split(' ')[2]
  if (typeof rawAddress !== 'undefined') {
    try {
      const oneAddress = web3.utils.toChecksumAddress(rawAddress)
      dbHandler(message, oneAddress)
      message.reply(`<@${message.author.id}> wallet address succesfully saved.`)
      return
    } catch(err) {
      error(err)
      message.reply({ embeds: [walletWarningEmbed()] })
    }
  }
}
