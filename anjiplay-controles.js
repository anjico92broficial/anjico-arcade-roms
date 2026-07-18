/*
=========================================================
 ANJIPLAY — PERFIS PADRÃO DE CONTROLE
 Controle Xbox One / Xbox Series
=========================================================

Perfis disponíveis:

- capcom6
- neogeo
- beatemup
- shootemup
- corrida

Exemplos no cadastro dos jogos:

dino:{
    core:"fbalpha2012_cps1",
    perfil:"beatemup"
},

xmcota:{
    core:"fbneo",
    perfil:"capcom6"
},

kof98:{
    core:"fbneo",
    bios:true,
    tipo:"neogeo",
    perfil:"neogeo"
},

s1945p:{
    core:"fbneo",
    bios:true,
    tipo:"neogeo",
    perfil:"shootemup"
},

crusnusa:{
    core:"mame2003_plus",
    perfil:"corrida"
}

=========================================================
*/


function getControlePadrao(jogo) {

    /*
    Se o jogo não possuir um perfil definido,
    o AnjiPlay usará capcom6 como padrão.
    */

    const perfil = jogo && jogo.perfil
        ? jogo.perfil
        : "capcom6";


    /*
    =====================================================
     PERFIS DE CONTROLE
    =====================================================
    */

    const perfis = {


        /*
        =================================================
         CAPCOM — 6 BOTÕES
        =================================================

        Xbox:

        X  = Soco fraco
        Y  = Soco médio
        RB = Soco forte

        A  = Chute fraco
        B  = Chute médio
        RT = Chute forte

        LB = 3 socos
        LT = 3 chutes
        */

        capcom6: `

window.EJS_defaultControls = {

    0: {

        4:{
            value:"up arrow",
            value2:"DPAD_UP"
        },

        5:{
            value:"down arrow",
            value2:"DPAD_DOWN"
        },

        6:{
            value:"left arrow",
            value2:"DPAD_LEFT"
        },

        7:{
            value:"right arrow",
            value2:"DPAD_RIGHT"
        },


        0:{
            value:"a",
            value2:"BUTTON_3"
        },

        1:{
            value:"s",
            value2:"BUTTON_4"
        },

        2:{
            value:"d",
            value2:"RIGHT_TOP_SHOULDER"
        },


        8:{
            value:"z",
            value2:"BUTTON_1"
        },

        9:{
            value:"x",
            value2:"BUTTON_2"
        },

        10:{
            value:"c",
            value2:"RIGHT_BOTTOM_SHOULDER"
        },


        11:{
            value:"q",
            value2:"LEFT_TOP_SHOULDER"
        },

        12:{
            value:"w",
            value2:"LEFT_BOTTOM_SHOULDER"
        },


        13:{
            value:"enter",
            value2:"START"
        },

        14:{
            value:"shift",
            value2:"SELECT"
        }

    }

};

`,


        /*
        =================================================
         NEO GEO — 4 BOTÕES
        =================================================

        Xbox:

        X = botão A do Neo Geo
        A = botão B do Neo Geo
        Y = botão C do Neo Geo
        B = botão D do Neo Geo
        */

        neogeo: `

window.EJS_defaultControls = {

    0: {

        4:{
            value:"up arrow",
            value2:"DPAD_UP"
        },

        5:{
            value:"down arrow",
            value2:"DPAD_DOWN"
        },

        6:{
            value:"left arrow",
            value2:"DPAD_LEFT"
        },

        7:{
            value:"right arrow",
            value2:"DPAD_RIGHT"
        },


        0:{
            value:"a",
            value2:"BUTTON_3"
        },

        1:{
            value:"s",
            value2:"BUTTON_1"
        },

        8:{
            value:"d",
            value2:"BUTTON_4"
        },

        9:{
            value:"f",
            value2:"BUTTON_2"
        },


        14:{
            value:"enter",
            value2:"START"
        },

        15:{
            value:"shift",
            value2:"SELECT"
        }

    }

};

`,


        /*
        =================================================
         BEAT 'EM UP
        =================================================

        Xbox:

        X = Soco / Ataque
        A = Pulo
        Y = Especial, quando existir
        B = Ação secundária, quando existir
        */

        beatemup: `

window.EJS_defaultControls = {

    0: {

        4:{
            value:"up arrow",
            value2:"DPAD_UP"
        },

        5:{
            value:"down arrow",
            value2:"DPAD_DOWN"
        },

        6:{
            value:"left arrow",
            value2:"DPAD_LEFT"
        },

        7:{
            value:"right arrow",
            value2:"DPAD_RIGHT"
        },


        0:{
            value:"a",
            value2:"BUTTON_3"
        },

        1:{
            value:"s",
            value2:"BUTTON_1"
        },

        8:{
            value:"d",
            value2:"BUTTON_4"
        },

        9:{
            value:"f",
            value2:"BUTTON_2"
        },


        14:{
            value:"enter",
            value2:"START"
        },

        15:{
            value:"shift",
            value2:"SELECT"
        }

    }

};

`,


        /*
        =================================================
         SHOOT 'EM UP / NAVINHA
        =================================================

        Xbox:

        X = Tiro
        A = Granada / Bomba
        */

        shootemup: `

window.EJS_defaultControls = {

    0: {

        4:{
            value:"up arrow",
            value2:"DPAD_UP"
        },

        5:{
            value:"down arrow",
            value2:"DPAD_DOWN"
        },

        6:{
            value:"left arrow",
            value2:"DPAD_LEFT"
        },

        7:{
            value:"right arrow",
            value2:"DPAD_RIGHT"
        },


        0:{
            value:"a",
            value2:"BUTTON_3"
        },

        1:{
            value:"s",
            value2:"BUTTON_1"
        },


        14:{
            value:"enter",
            value2:"START"
        },

        15:{
            value:"shift",
            value2:"SELECT"
        }

    }

};

`,


        /*
        =================================================
         CORRIDA
        =================================================

        Xbox:

        RT = Aceleração
        LT = Freio

        X = 1ª marcha
        A = 2ª marcha
        Y = 3ª marcha
        B = 4ª marcha
        */

        corrida: `

window.EJS_defaultControls = {

    0: {

        4:{
            value:"up arrow",
            value2:"DPAD_UP"
        },

        5:{
            value:"down arrow",
            value2:"DPAD_DOWN"
        },

        6:{
            value:"left arrow",
            value2:"DPAD_LEFT"
        },

        7:{
            value:"right arrow",
            value2:"DPAD_RIGHT"
        },


        0:{
            value:"a",
            value2:"RIGHT_BOTTOM_SHOULDER"
        },

        1:{
            value:"s",
            value2:"LEFT_BOTTOM_SHOULDER"
        },


        8:{
            value:"z",
            value2:"BUTTON_3"
        },

        9:{
            value:"x",
            value2:"BUTTON_1"
        },

        10:{
            value:"c",
            value2:"BUTTON_4"
        },

        11:{
            value:"v",
            value2:"BUTTON_2"
        },


        14:{
            value:"enter",
            value2:"START"
        },

        15:{
            value:"shift",
            value2:"SELECT"
        }

    }

};

`

    };


    /*
    Caso seja informado um perfil inexistente,
    evita que o jogo fique sem controles.
    */

    if (!perfis[perfil]) {

        console.warn(
            "[AnjiPlay] Perfil de controle desconhecido:",
            perfil,
            "— usando capcom6 como padrão."
        );

        return perfis.capcom6;
    }


    return perfis[perfil];
}