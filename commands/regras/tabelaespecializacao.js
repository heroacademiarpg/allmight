const commando = require('discord.js-commando');
const { RichEmbed } = require('discord.js');


class RegraExpEspecialização extends commando.Command {



    constructor(client) {
        super(client, {
            name: 'expespecialização',
            group: 'regras',
            memberName: 'expespecialização',
            description: 'Mostra a tabela de gasto de experiência de especialização.',
        });    
    }

    run(msg, args) {
        const { text } = args;
        const embed = new RichEmbed()



        .setTitle("Tabela de Experiência de Especialização")
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
        .addField("Entre 1-3", "3 Exp por Nível", true)
        .addField("Entre 4-6", "6 Exp por Nível", true)
        .addField("Entre 7-9", "12 Exp por Nível", true)
        .addField("Entre 10-12", "24 Exp por Nível", true)
        .addField("Entre 13-15", "26 Exp por Nível", true)
        .addBlankField(true)
        /*
         * Blank field, useful to create some space.
         */
        .addBlankField(true)
        .addBlankField(true)

        .addField("Primeira", "Grátis", true)
        .addField("Segunda", "20 EXP, Level 2", true)
        .addField("Terceira", "40 EXP, Level 4", true)
        .addField("Quarta", "80 EXP, Level 8", true)
        .addField("Quinta", "160 EXP, Level 10", true)
        .addBlankField(true)



            return msg.embed(embed);
    }
}

module.exports = RegraExpEspecialização;
