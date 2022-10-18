const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("temperature")
        .setDescription(
            "Converts a temperature unit to all other units (°F, °C, °K)"
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName("fahrenheit")
                .setDescription("Converts Fahrenheit to Celsius and Kelvin")
                .addNumberOption((option) =>
                    option
                        .setName("value")
                        .setDescription("The value to be converted in °F")
                        .setRequired(true)
                )
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName("celsius")
                .setDescription("Converts Celsius to Fahrenheit and Kelvin")
                .addNumberOption((option) =>
                    option
                        .setName("value")
                        .setDescription("The value to be converted in °C")
                        .setRequired(true)
                )
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName("kelvin")
                .setDescription("Converts Kelvin to Fahrenheit and Celsius")
                .addNumberOption((option) =>
                    option
                        .setName("value")
                        .setDescription("The value to be converted in °K")
                        .setRequired(true)
                )
        ),
    async execute(interaction) {
        const subCmd = interaction.options.getSubcommand();
        const val = interaction.options.getNumber("value");

        if (subCmd === "fahrenheit") {
            const c = (val - 32) * (5 / 9);
            const k = c + 273.15;

            await interaction.reply(`${val} °F:\n• ${c} °C\n• ${k} °K`);
        } else if (subCmd === "celsius") {
            const f = val * (9 / 5) + 32;
            const k = val + 273.15;

            await interaction.reply(`${val} °C:\n• ${f} °F\n• ${k} °K`);
        } else if (subCmd === "kelvin") {
            const f = (val - 273.15) * (9 / 5) + 32;
            const c = val - 273.15;

            await interaction.reply(`${val} °K:\n• ${f} °F\n• ${c} °C`);
        }
    },
};
