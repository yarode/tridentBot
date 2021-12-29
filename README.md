# tridentBot

Save addresses to a database through the command `!triton save-address`

# Setup

There are a few things required to setup the bot, this includes:

- env file
- Discord API Token
- Channel ID
- MongoDB URI

## Environment Variables

Change the name of the `.env.sample` file to `.env`. The following steps will tell you how to correctly replace the values inside the string quotes.

## Discord API Token

Follow this guide to setup a new discord bot, and add the final token in the `.env` file.
https://discordpy.readthedocs.io/en/stable/discord.html

## Channel ID

This bot only functions in 1 channel which should be designated. Add the ID for the channel you want to use to the `.env` file.

# MongoDB URI

Create a new database on MongoDB (free account suffices), go through the setup & select your new cluster. Click on the cluster and press 'connect'. Press 'Connect your application'. Copy your connection string and add it to the `.env` file as your `MONGODB_URI`. *DO NOT* copy the entire drive code example, just the connection string.

Setup should be done! You can run the application and everything should work correctly.
