const saveWallet = require('./save-wallet.js')
const help = require('./help')

const handlers = new Map([
  ['save-wallet', saveWallet],
  ['help', help],
])

module.exports = handlers
