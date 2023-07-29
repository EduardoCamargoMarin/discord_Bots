const {SlashCommandBuilder} = require('discord.js')

// at the top of your file
const { EmbedBuilder } = require('discord.js');

// inside a command, event listener, etc.
const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Templates para websites')
	.setURL('https://eduardocamargomarin.github.io/eduardomarin/projeto.html')
	.setAuthor({ name: 'Eduardo Marin Soluções Diditais', url: 'https://eduardocamargomarin.github.io/eduardomarin/projeto.html' })
	.setDescription('Modelos de websites para a sua empresa')
	.addFields(
        { name: '\u200B', value: '\u200B' },
		{ name: 'Disponível em nosso estoque', value: 'a partir de R$1500,00' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Gaming High Experience', value: 'Desperte o tech dentro de você', inline: true },
        { name: '\u200B', value: '\u200B' },
		{ name: 'Professional High Experience', value: 'Sua empresa em destaque na era digital', inline: true },
        { name: '\u200B', value: '\u200B' },
	)
	.addFields({ name: 'Deluxe High Experience', value: 'Conquiste o mundo com excelência e qualidade', inline: true })
	.setTimestamp()
	.setFooter({ text: 'Eveline' });





module.exports = {
data: new SlashCommandBuilder()
    .setName("templates")
    .setDescription("modelos de templates"),

async execute(interaction) {
    await interaction.reply({ embeds: [exampleEmbed] })
}
}