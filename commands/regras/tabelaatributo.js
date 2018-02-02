const commando = require('discord.js-commando');
const { RichEmbed } = require('discord.js');


class RegrasExpAtributos extends commando.Command {



    constructor(client) {
        super(client, {
            name: 'expatributos',
            group: 'regras',
            memberName: 'expatributos',
            description: 'Mostra a tabela de gasto de experiência de atributos.',
        });    
    }

    run(msg, args) {
        const { text } = args;
        const embed = new RichEmbed()



        .setTitle("Tabela de Experiência de Atributos")
        /*
         * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
         */
        .setColor(0x00AE86)
        .setFooter("Saiba mais clicando no link do título!")
        /*
         * Takes a Date object, defaults to current date.
         */
        .setTimestamp()
        .setURL("http://heroacademiarpg.jcink.net/index.php?showtopic=13")
        .setThumbnail("https://i.imgur.com/8lmPv0m.png")

        .addBlankField(true)
        .addBlankField(true)
        /*
         * Inline fields may not display as inline if the thumbnail and/or image is too big.
         */
        .addField("Entre 1-10", "1 Exp por Ponto", true)
        .addField("Entre 11-15", "2 Exp por Ponto", true)
        .addField("Entre 16-20", "4 Exp por Ponto", true)
        .addField("Entre 21-25", "6 Exp por Ponto", true)
        .addField("Entre 26-30", "8 Exp por Ponto", true)
        .addBlankField(true)
        /*
         * Blank field, useful to create some space.
         */
        .addBlankField(true)
        .addBlankField(true)




            return msg.embed(embed);
    }
}

module.exports = RegrasExpAtributos;
