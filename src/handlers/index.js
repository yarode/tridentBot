const saveWallet = require('./save-wallet.js')
const help = require('./help')

const handlers = new Map([
  ['save-address', saveWallet],
  ['help', help],
])

module.exports = handlers
