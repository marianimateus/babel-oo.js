function somar() {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;
    // console.log(arguments); // retorna todos argumentos passados na função, podendo receber n argumentos, então n precisa de nada dentro dos parenteses da função
    // return a + b;
}

console.log(somar(10, 20, 30));
// rest

function somarRest(...numeros) { // operados rest conta com os 3 pontos(...). argumento de função, como argumento de função, pega o "restante" dos arguemntos 
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma
}

console.log(somarRest(10, 20, 30))

// Spread: espalha os dados

const numeros = [1, 2, 3, 4];
console.log(...numeros);

const timesDeFutebol = ['Inter', 'Gremio', 'Pelotas', 'Brasil'];
const timesDeFutebol2 = ['colorado', 'gremista', 'pelotense', 'brasileiro'];

// const timesDeFutebolTotal = timesDeFutebol.concat(timesDeFutebol2);

const timesDeFutebolTotal = [...timesDeFutebol, ...timesDeFutebol2]; // spread espalhou os nomes de cada variavel e as uniu

// timesDeFutebol.concat(timesDeFutebol2)
console.log(timesDeFutebolTotal);

const carroDoMateus = {
    modelo: 'camaro',
    marca: 'chevrolet',
    motor: 5.8
}

const carroDoTeus = {
    ...carroDoMateus, // assim reaproveita as informações de um objeto, no caso "carroDoMateus"
}

console.log(carroDoTeus)

// Desestruturação

    const { motor: motorDoCarro1 } = carroDoTeus;
    const { motor: motorDoCarro2 } = carroDoMateus;
// motor: propriedade motor dentro do objeto
// carroDoMateus: a fonte do objeto
// const: faz a atribuição à constante
// motorDoCarro2: o nome da constante cujo "modelo do motor" foi atribuído

console.log(motorDoCarro1);
console.log(motorDoCarro2);

// desestruturação em arrays
const [item1, ...outrosTimes] = timesDeFutebolTotal;
// ...outrosTimes: resto do conteúdo (rest)

console.log(item1);
console.log(outrosTimes);