/* eslint-disable quotes */
function helpEmbed() {
  return {
      title: 'Welcome to Trident! 🔱',
      description:
        `I'm here to explain how you can save your address for the whitelist!`,
      color: 16769024,
      fields: [
        {
          name: 'Calling the right command',
          value: 'To save your address all you have to do is call `!triton save-address` followed by your address!'
        },
        {
          name: 'Example:',
          value: '`!triton save-address 0x0000000000000000000000000000000000000000`',
        },
        {
          name: `That's all!`,
          value: `Once your address is added to the database you'll get a confirmation message. Have to update your address? Just run the same command again with your new address and it will be updated in our database.`,
        },
      ],
      timestamp: new Date(),
      footer: {
        text: 'https://twitter.com/TridentDAO',
      }
    }
}

function walletWarningEmbed() {
  return {
      title: 'Warning 🚨',
      description:
        'You are using the `!triton save-address` command incorrectly!',
      color: 16769024,
      fields: [
        {
          name: '`!triton save-address <address>`',
          value:
            'Correct usage of this command requires you to add your Harmony wallet address. Please refer to `!triton help` if you need more information.',
        }
      ],
      timestamp: new Date(),
      footer: {
        text: 'https://twitter.com/TridentDAO',
      }
  }
}

module.exports = {
  walletWarningEmbed,
  helpEmbed
}
