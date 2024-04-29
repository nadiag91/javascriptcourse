var tortas = [
    {
        "nombre": "lemonPie",
        "precio": 3000,
        "ingredientes": ["limon", "manteca", "harina"]
    },
    {
        "nombre": "brownie",
        "precio": 2500,
        "ingredientes": ["chocolate", "manteca", "harina"]
    },
    {
        "nombre": "frutillas",
        "precio": 2000,
        "ingredientes": ["frutillas", "huevo", "crema", "gelatina"]
    }
];


function lookupPropiedad(nombreBuscado, propiedadDeseada) {
    for (var i = 0; i < tortas.length; i++) {
        if (tortas[i].nombre === nombreBuscado) {
            return tortas[i][propiedadDeseada] || "no existe tal propiedad"
        }
        return console.log("no existe esa torta");
    }
}

var resultado = lookupPropiedad('lemonPie', 'colot')

console.log(resultado)