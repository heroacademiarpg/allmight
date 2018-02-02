const commando = require('discord.js-commando');
const { RichEmbed } = require('discord.js');


class RegrasCombateQuirks extends commando.Command {



    constructor(client) {
        super(client, {
            name: 'combatequirks',
            group: 'regras',
            memberName: 'combatequirks',
            description: 'Mostra a tabela de combate com Quirks.',
        });    
    }

    run(msg, args) {
        const { text } = args;
        const embed = new RichEmbed()



        .setTitle("Sistema de Combate com Quirks")
        /*
         * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
         */
        .setColor(0x00AE86)
        .setFooter("Saiba mais clicando no link do título!")
        /*
         * Takes a Date object, defaults to current date.
         */
        .setTimestamp()
        .setURL("http://heroacademiarpg.jcink.net/index.php?showtopic=16")
        .setThumbnail("https://i.imgur.com/8lmPv0m.png")

        .addBlankField(true)
        .addBlankField(true)
        /*
         * Inline fields may not display as inline if the thumbnail and/or image is too big.
         */
        .addField("Dano - Corpo a Corpo", "(Controle x0,75 + força/3). Não é afetado pelo modificador de qualidade do Quirk. 5% ST por uso.", false)
        .addField("Dano - À distância", "(Controle x0,75 + precisão/3). Máximo de (controle/2) de distância, mínimo de 2 metros de distância. Não é afetado pelo modificador de qualidade do Quirk. 8% ST por uso.", false)
        .addField("Dano - Em Área", "(Controle x0,5). Máximo de (controle/3) metros². Não é afetado pelo modificador de qualidade do Quirk. 10% ST por uso. ", false)
        .addField("Dano por Turno - DOT", "(controle x0,9) de dano ao longo de 4 turnos. Não stackável. Não é afetado pelo modificador de qualidade do Quirk. 10% ST por uso.", false)
        /*
         * Blank field, useful to create some space.
         */
        .addBlankField(true)
        .addBlankField(true)

        .addField("Resistência de Barreiras", "(controle x0,75) de resistência total. Não é afetado pelo modificador de qualidade do Quirk. 8% ST por uso.", false)
        .addField("Cura Instantânea", "(Controle x0,3) por uso. 10% ST por uso.", false)
        .addField("Regeneração", "(Controle x0,5) total de HP, dividido em 4 turnos. 8% ST por uso.", false)
        .addField("HP Temporário", "(Controle x0,35). Funciona como HP normal e é perdido antes, não pode ultrapassar o HP máximo. Duração de 1+(controle/5) turnos. 8% ST por uso.", false)

        .addBlankField(true)
        .addBlankField(true)

        .addField("Teletransporte", "(controle x0,25) metros de limite de alcance. 20% ST por uso.", false)
        .addField("Voo", "(controle x0,5) metros de altura. 10% ST por uso.", false)
        .addField("Velocidade", "(controle x0,75) m/s. 5% ST por uso.", false)
        .addField("Misc - Técnicas Inofensivas", "3% ST por uso.", false)
        .addField("Bônus Único - Encantar Arma, Endurecer Pele, etc", "(Controle x0,3). Dura apenas uma ação (não turno). 5% ST por uso.", false)
        .addField("Buffs/Debuffs", "(controle x0,25) de bônus/revés em um atributo. Não é afetado pelo modificador de qualidade do Quirk. 10% ST por uso. Duração de 1 turno.", false)

        .addBlankField(true)
        .addBlankField(true)

            return msg.embed(embed);
    }
}

module.exports = RegrasCombateQuirks;
