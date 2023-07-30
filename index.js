const { Client, Events, GatewayIntentBits, Collection } = require('discord.js')
const dotenv = require('dotenv')
dotenv.config()
const {TOKEN, CLIENT_ID, GUILD_ID} = process.env

const fs = require('node:fs')
const path = require('node:path')

const commandsPath = path.join(__dirname, "commands")
const commandFiles = fs.readdirSync(commandsPath).filter(file =>file.endsWith('.js'))

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] })
client.commands = new Collection()

for(const file of commandFiles) {
    const filePath = path.join(commandsPath, file)
    const command = require(filePath)

    if ("data" in command && "execute" in command) {
        client.commands.set(command.data.name, command)
    }else {
        console.log(`Esse comando em ${filePath} está com "data" ou "execute" ausentes`)
    }
}



// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`)
});

// Log in to Discord with your client's token
client.login(TOKEN)

//listener para interação
client.on(Events.InteractionCreate, async interaction => {
        if(interaction.isStringSelectMenu()) {
            const selected = interaction.values[0]
            if(selected == "udemy") {
                await interaction.reply("Link: https://www.udemy.com/?ranMID=39197&ranEAID=0EOJOrTo2D4&ranSiteID=0EOJOrTo2D4-rP2VhXXhjwktf7ZGDYWScw&LSNPUBID=0EOJOrTo2D4&utm_source=aff-campaign&utm_medium=udemyads")
            }else if (selected == "dio") {
                await interaction.reply("Link: https://www.dio.me/catalog")
            }else if (selected == "bradesco") {
                await interaction.reply("Link: https://www.ev.org.br/areas-de-interesse")
            }
        }


    if(!interaction.isChatInputCommand()) return
    const command = interaction.client.commands.get(interaction.commandName)
    if(!command) {
        console.error("command not found")
        return
    }
    try {
        await command.execute(interaction)
    }
    catch(error) {
        console.error(error)
        await interaction.reply("somenthing went nuts")
    }
})