const {SlashCommandBuilder} = require('discord.js')

module.exports = {
data: new SlashCommandBuilder()
    .setName("website")
    .setDescription("Link de acesso ao site oficial"),

async execute(interaction) {
    await interaction.reply("Website:\n https://eduardocamargomarin.github.io/eduardomarin/")
}
}