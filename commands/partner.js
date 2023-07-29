const {SlashCommandBuilder} = require('discord.js')

module.exports = {
data: new SlashCommandBuilder()
    .setName("parceria")
    .setDescription("Veja os beneficios da parceria"),

async execute(interaction) {
    await interaction.reply("Esses são os beneficios quando se torna um parceiro:\nSeu logo ficará visível para todos os viajantes.\nQuando tivermos uma oportunidade, vamos falar com outros viajantes sobre o seu trabalho e recomendar sua experiência profissional para o projeto deles.\nSe alguem entrar em contato conosco e dizerem que foi você quem nos recomendou e assinarem nosso contrato, você irá receber uma participação de lucro sobre o pagamento final do orçamento.\n\nNível 01:\nRecebe novidades de novos protótipos e templates, além de possuir acesso exclusivo a conteúdos destinados apenas para membros da organização.\n\nNível 02:\nConsultor oficial em tópicos de melhorias de processos e Quality Assurance de projetos desenvolvidos. Esses parceiros recebem autonomia para definir estratégias para a melhor UI e UX dos projetos.\n\nNível 03:\nDesenvolvedor co-participativo em projetos de desenvolvimento e novos protótipos\nParticipação nos projetos e estratégias de desenvolvimento, sendo um membro oficial da organização.")
}
}