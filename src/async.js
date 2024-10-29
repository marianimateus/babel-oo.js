function funcHeavy() {
    let exec = 0;
    for (let i = 0; i < 1000000000; i++) {
        exec ++;
    }
    return exec
}
// console.log(funcHeavy());

const heavyFuncPromise = new Promise((resolve, reject) => {
    try {
        let exec = 0;
        for (let i = 0; i < 1000000000; i++) {
            exec ++;
        }
        resolve(exec)
    } catch(e) {
        reject ('Deu erro na execução dos números');
    }
}) // resolve: sucesso, reject: falha


const promiseParam = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com o usuário: ${login}`)
        }, 3000)
    })
}


async function beeingAsync() {
    console.log('inicio');

    // await heavyFuncPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro)); // sucesso (no then), e erro (no catch)
    // await: aguardar a promisse, depois continua, torna sincrono novamente

    promiseParam('mzmariani72@gmail.com', 12345321).then(resultado => { // () obrigatorios apenas quando recebe mais de um argumento
        console.log(resultado)
    })

    try { 
        const resultado = await heavyFuncPromise; // executando de foram assincrona
        console.log(resultado);
    } catch(e) {
        console.log(e)
    }

    console.log("fim");
}

beeingAsync();