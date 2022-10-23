const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("avatar")
        .setDescription("Displays the mentioned user's avatar")
        .addUserOption((option) =>
            option
                .setName("user")
                .setDescription("The user for which the avatar will be shown")
                .setRequired(true)
        ),
    async execute(interaction) {
        const user = interaction.options.getUser("user");

        await interaction.reply(user.displayAvatarURL());
    },
};
