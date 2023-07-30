const { ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, SlashCommandBuilder } = require('discord.js');

	// data: new SlashCommandBuilder()...

		 

		const row = new ActionRowBuilder()
			.addComponents(
                new StringSelectMenuBuilder()
			        .setCustomId('starter')
			        .setPlaceholder('Escolha a plataforma E-learning')
			        .addOptions(
				new StringSelectMenuOptionBuilder()
					.setLabel('udemy')
					.setDescription('Cursos pagos com promoções.')
					.setValue('udemy'),
				new StringSelectMenuOptionBuilder()
					.setLabel('dio')
					.setDescription('Cursos pagos ou gratuitos.')
					.setValue('dio'),
				new StringSelectMenuOptionBuilder()
					.setLabel('bradesco')
					.setDescription('Cursos 100% gratuitos sobre diversas áreas')
					.setValue('bradesco'),
			))
	



module.exports = {
data: new SlashCommandBuilder()
    .setName("programacao")
    .setDescription("Plataformas para ajudar em seus estudos"),

async execute(interaction) {
    await interaction.reply({content: "Selecione um dos itens abaixo", components: [row]})
}
}
