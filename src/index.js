/* eslint-disable quotes */
const Discord = require('discord.js')
const dotenv = require('dotenv')
const detectHandler = require('./parser/detectHandler')
const { RequestHandlerError } = require('./error-utils')
const { log } = require('./utils')

require('./db/connection')

// Load this as early as possible, to init all the environment variables that may be needed
dotenv.config()
// Sentry.init({ dsn: environment('SENTRY_DSN') })

const client = new Discord.Client({
  intents: [
      "GUILDS",
      "GUILD_MESSAGES"
  ]})

client.on('ready', () => {
  log(`Bot successfully started as ${client.user.tag} 🔱`)
})


client.on('messageCreate', (message) => {
  if (message.author.bot) return
  try {
    const handler = detectHandler(message.content)
    if (handler) {
      // Checks if channel is #bot-commands or message is NOT from guild
      if (
        message.channel.id === process.env.CHANNEL_ID ||
        message.guild === null
      ) {
        handler(message)
        log(
          `Served command ${message.content} successfully for ${message.author.username}.`,
        )
      } else {
        message.delete({ timeout: 500 })
        /* Currently not sending warnings to prevent bot being blocked
        client.channels.fetch(process.env.CHANNEL_ID).then((channel) => {
        channel.send(`<@${message.author.id}>`)
        channel.send(wrongChannelWarningEmbed())
        })*/
        return
      }
    }
  } catch (err) {
    if (err instanceof RequestHandlerError) {
      log(err)
      message.reply(
        'Could not find the requested command. Please use !trident help for more info.',
      )
    }
  }
})

client.login(process.env.DISCORD_API_TOKEN)
