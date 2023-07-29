const {SlashCommandBuilder} = require('discord.js')

module.exports = {
data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Checar a velocidade do bot"),

async execute(interaction) {
    await interaction.reply("Eeeeeeeeee....Pong! \^.^/")
}
}