const { SlashCommandBuilder } = require("discord.js");
const weather = require("weather-js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("weather")
        .setDescription("Returns the weather for a city")
        .addStringOption((option) =>
            option
                .setName("city")
                .setDescription("The city to display the weather for")
                .setRequired(true)
        ),
    async execute(interaction) {
        const city = interaction.options.getString("city");
        let location;

        weather.find({ search: city }, async function (err, result) {
            if (err) {
                console.log(err);
            }

            try {
                location = result[0].location.name;
                conditions = result[0].current.skytext;
                temperature = result[0].current.temperature;
                feelsLike = result[0].current.feelslike;
                wind = result[0].current.winddisplay;
                humidity = result[0].current.humidity;

                await interaction.reply(
                    `Weather for ${location}:\n• Conditions: ${conditions}\n• Temperature: ${temperature}°F\n• Feels like: ${feelsLike}°F\n• Wind: ${wind}\n• Humidity: ${humidity}%`
                );
            } catch {
                await interaction.reply(
                    "There was an error finding the location."
                );
            }
        });
    },
};
