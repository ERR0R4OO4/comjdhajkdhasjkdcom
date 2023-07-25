const { EmbedBuilder, CommandInteraction } = require('discord.js')
const { Database } = require("st.db");
const jdb = new Database("./json/database.json");
module.exports = {
name: "set-role",
description: "تحديد رتبة بعد المشاركة في المسابقة",
"options": [
    {
        "name": "role",
        "description": "اختر الرتبة",
        "type": 8,
        "required" : true
    }
],
async execute(client, interaction) {
    const rolev = interaction.options.getRole('role');
    jdb.set('apply_role' , rolev.id)
    interaction.reply(`✅ | role <@&${rolev.id}> seted successfully`)


}
}