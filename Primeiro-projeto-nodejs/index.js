// const chalk = require('chalk');
const fs = require('fs');

function trataErro (erro) {
    throw new Error(`${erro.code} vish deu erro em!`);
}

async function pegaArquivo(caminho){
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminho, encoding)
        console.log(texto)
    } catch(erro) {
        trataErro(erro)
    }
}

// function pegaArquivo(caminho){
//     const encoding = 'utf-8';
//     fs.promises.readFile(caminho, encoding)
//     .then((texto) => console.log(texto)) 
//     .catch((erro)=> trataErro(erro))
// }

// function pegaArquivo(caminho){
//     const encoding = 'utf-8';
//     fs.readFile(caminho, encoding, (erro, texto) => {
//         if(erro){
//             trataErro(erro);
//         }
//         console.log(texto);
//     })
// }

pegaArquivo('./arquivos/texto1.md');