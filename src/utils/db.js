const mongoose = require('mongoose')
const model = 'User'
require('../models/user')

async function dbHandler(message, address) {
  const searchParameter = { discordId: message.author.id }

  let document = {
    discordId: message.author.id,
  }

  if(address) {
    document.address = address
  }

  const modelFound = await mongoose.model(model)
  let resultPromise = await modelFound.findOne( searchParameter, (erro) => {
    if (erro) {
      console.log(erro)
    }
  })
  resultPromise = await createOrUpdate(searchParameter, resultPromise, document, modelFound)
  return resultPromise
}

async function createOrUpdate(searchParameter, resultPromise, document, modelFound) {
  if (resultPromise === null){
    resultPromise = await modelFound.create(document)
  } else {
    resultPromise = await modelFound.updateOne(searchParameter, document)
  }
  return resultPromise
}

module.exports = { dbHandler }
