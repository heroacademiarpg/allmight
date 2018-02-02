const commando = require('discord.js-commando');
const { RichEmbed } = require('discord.js');


class RegrasCombateBase extends commando.Command {



    constructor(client) {
        super(client, {
            name: 'combatebase',
            group: 'regras',
            memberName: 'combatebase',
            description: 'Mostra a tabela de combate base.',
        });    
    }

    run(msg, args) {
        const { text } = args;
        const embed = new RichEmbed()



        .setTitle("Sistema de Combate")
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
        .addField("Iniciativa", "Decide quem fará o primeiro movimento quem tiver a « agilidade » superior.", false)
        .addField("Ações por Turno", "1 Default + « agilidade/5 » = « ações por turno ». Cada esquiva, bloqueio, técnica, golpe, uso de item e quaisquer coisas do tipo contam como uma ação cada.", false)
        .addField("Descansar", "Consome todas as ações do turno para recuperar (vigor/2) de % de stamina por turno.", false)
        .addField("Desmaio", "5% ou inferior do « HP total » o personagem desmaia imediatamente. ", false)
        .addField("Dano Base", "Golpes corpo-a-corpo (força + bônus), golpes com armas brancas em geral (força + dano da arma + bônus), golpes com projéteis (precisão + dano da arma + bônus), técnicas utilizando o Quirk (ler segundo post).", false)
        /*
         * Blank field, useful to create some space.
         */
        .addBlankField(true)
        .addBlankField(true)

        .addField("Golpe Direto", "« dano base » - « resistência/2 » = Dano recebido", false)
        .addField("Bloqueio bem sucedido", "« dano base » - « resistência + bônus » = Dano recebido", false)
        .addField("Esquiva - conta de acerto", "20% + (« destreza » do atacante - « agilidade » do atacado) x5% = Porcentagem de escapar (decidido por rolar de dado). Máximo de 90%.", false)
        .addField("Esquiva - Em caso de acerto do atacante", "« dano base » - « resistência/3 » = Dano recebido", false)
        .addField("Esquiva - Em caso de erro do atacante", "Sem dano recebido.", false)

        .addBlankField(true)
        .addBlankField(true)

        .addField("Controle - Mental e Afins", "(« controle » do atacante - « resistência » do atacado) x5% = Porcentagem de controle sob o corpo do adversário.", false)
        .addField("Acerto - Golpe Mental e Afins", "20% + (« controle » do atacante - « resistência » do atacado % de chance de acerto.", false)
        .addField("Dano de Golpes Especiais", "« controle » - « resistência » = Dano recebido.", false)

            return msg.embed(embed);
    }
}

module.exports = RegrasCombateBase;
