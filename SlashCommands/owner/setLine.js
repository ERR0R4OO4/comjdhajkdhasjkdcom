const { EmbedBuilder, CommandInteraction } = require('discord.js')
const { Database } = require("st.db");
const jdb = new Database("./json/database.json");
module.exports = {
name: "set-line",
description: "تحديد خط تلقائي في روم التصويت",
"options": [
    {
        "name": "line",
        "description": "ضع رابط الخط",
        "type": 3,
        "required" : true
    }
],
async execute(client, interaction) {
    const linev = interaction.options.getString('line');
    jdb.set('line' , linev)
    interaction.reply(`✅ | line ${linev} seted successfully`)


}
}