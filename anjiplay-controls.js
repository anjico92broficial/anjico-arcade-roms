/*
 * ============================================
 * ANJIPLAY CONTROLS
 * Controles oficiais do AnjiPlay
 * Autor: AnjiPlay
 * ============================================
 */

(function(window){

"use strict";

const perfis={

    capcom:{

        0:{

            // Direcional
            4:{value:"up arrow",value2:"DPAD_UP"},
            5:{value:"down arrow",value2:"DPAD_DOWN"},
            6:{value:"left arrow",value2:"DPAD_LEFT"},
            7:{value:"right arrow",value2:"DPAD_RIGHT"},

            // SOCOS
            0:{value:"a",value2:"BUTTON_3"},                  // X
            1:{value:"s",value2:"BUTTON_4"},                  // Y
            2:{value:"d",value2:"RIGHT_TOP_SHOULDER"},        // RB

            // CHUTES
            8:{value:"z",value2:"BUTTON_1"},                  // A
            9:{value:"x",value2:"BUTTON_2"},                  // B
            10:{value:"c",value2:"RIGHT_BOTTOM_SHOULDER"},    // RT

            // MACROS
            11:{value:"q",value2:"LEFT_TOP_SHOULDER"},        // LB = 3 Socos
            12:{value:"w",value2:"LEFT_BOTTOM_SHOULDER"},     // LT = 3 Chutes

            // START / COIN
            13:{value:"enter",value2:"START"},
            14:{value:"shift",value2:"SELECT"}

        }

    },

    neogeo:{

        0:{

            // Direcional
            4:{value:"up arrow",value2:"DPAD_UP"},
            5:{value:"down arrow",value2:"DPAD_DOWN"},
            6:{value:"left arrow",value2:"DPAD_LEFT"},
            7:{value:"right arrow",value2:"DPAD_RIGHT"},

            // NEO GEO
            // A = X
            0:{value:"a",value2:"BUTTON_3"},

            // B = A
            1:{value:"s",value2:"BUTTON_1"},

            // C = Y
            8:{value:"d",value2:"BUTTON_4"},

            // D = B
            9:{value:"f",value2:"BUTTON_2"},

            // HOTKEYS
            // RB
            10:{value:"q",value2:"RIGHT_TOP_SHOULDER"},

            // RT
            11:{value:"w",value2:"RIGHT_BOTTOM_SHOULDER"},

            // LB
            12:{value:"e",value2:"LEFT_TOP_SHOULDER"},

            // LT
            13:{value:"r",value2:"LEFT_BOTTOM_SHOULDER"},

            // START / COIN
            14:{value:"enter",value2:"START"},
            15:{value:"shift",value2:"SELECT"}

        }

    }

};

window.AnjiPlayControls={

    profiles:perfis,

    apply:function(tipo){

        if(tipo==="neogeo"){

            window.EJS_defaultControls=
            JSON.parse(JSON.stringify(perfis.neogeo));

        }else{

            window.EJS_defaultControls=
            JSON.parse(JSON.stringify(perfis.capcom));

        }

        console.log("AnjiPlay Controls carregado:",tipo);

    }

};

})(window);