const commando = require('discord.js-commando');
const { RichEmbed } = require('discord.js');


class RegrasLevelUp extends commando.Command {



    constructor(client) {
        super(client, {
            name: 'levelup',
            group: 'regras',
            memberName: 'levelup',
            description: 'Mostra a tabela de experiência necessária para subir de nível.',
        });    
    }

    run(msg, args) {
        const { text } = args;
        const embed = new RichEmbed()



        .setTitle("Tabela de Experiência para Upar")
        /*
         * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
         */
        .setColor(0x00AE86)
        .setFooter("Saiba mais clicando no link do título!")
        /*
         * Takes a Date object, defaults to current date.
         */
        .setTimestamp()
        .setURL("http://heroacademiarpg.jcink.net/index.php?showtopic=44")
        .setThumbnail("https://i.imgur.com/8lmPv0m.png")

        .addBlankField(true)
        .addBlankField(true)
        /*
         * Inline fields may not display as inline if the thumbnail and/or image is too big.
         */
        .addField("Nível 1", "0 EXP", true)
        .addField("Nível 2", "50 EXP", true)
        .addField("Nível 3", "100 EXP", true)
        .addField("Nível 4", "150 EXP", true)
        .addField("Nível 5", "200 EXP", true)
        .addField("Nível 6", "250 EXP", true)
        .addField("Nível 7", "300 EXP", true)
        .addField("Nível 8", "350 EXP", true)
        .addField("Nível 9", "400 EXP", true)
        .addField("Nível 10", "450 EXP", true)
        .addBlankField(true)
        /*
         * Blank field, useful to create some space.
         */


            return msg.embed(embed);
    }
}

module.exports = RegrasLevelUp;
