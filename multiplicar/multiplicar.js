//xd
const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite) => {
    let lol = "";

    console.log("===============".red);
    console.log(`tabla de ${base}`.red);
    console.log("===============".red);

    for (let i = 1; i <= limite; i++) {
        let resultado = base * i;

        console.log(`${base} * ${i} = ${resultado}\n`);

    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {



        if (!Number(base)) {
            reject("el valor: " + base + " No es un numero");
            return
        }

        let lol = "";


        for (let i = 1; i <= limite; i++) {
            let resultado = base * i;

            lol += `${base} * ${i} = ${resultado}\n`;
        }

        const data = new Uint8Array(Buffer.from(lol));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`)

        });
    });

}


module.exports = {
    crearArchivo,
    listarTabla

}