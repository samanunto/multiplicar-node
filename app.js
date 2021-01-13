//
const argv = require("./config/yargs").argv;
const colors = require('colors');
const colors = require('colors/safe');

const { alias } = require("yargs");
//const fs = require('fs');
//const fs = require('express');
//const fs = require('./fs');



const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar.js")

let comando = argv._[0];

switch (comando) {
    case "listar":
        console.log("listar");
        listarTabla(argv.base, argv.limite);

        break;

    case "crear":
        console.log("crear");
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado:`, colors.red(archivo)))
            .catch(e => console.log(e));
        break;
    default:

        console.log("comando no reconocido");
}



//let base = "2";

//console.log(process.argv);

//let argv2 = process.argv;

//console.log( argv.base);

//let parametro = argv[2];
//let base = parametro.split("=")[1]



//let lol = "";

//for (let i = 1; i <= 10; i++) {
//  let resultado = base * i;

//lol += `${base} * ${i} = ${resultado}\n`;
//}

//const data = new Uint8Array(Buffer.from(lol));
//fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//  if (err) throw err;
//console.log(`el archivo tabla-${base}.txt ha sido creado!`);
//});

//crearArchivo(base)
//  .then(archivo => console.log(`archivo creado: ${ archivo}`))
//.catch(e => console.log(e));