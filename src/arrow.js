// Arrow functions são uma expressão de função e, portanto, precisam ser atribuídas a uma variável ou propriedade para serem utilizáveis.
// uma arrow function pode ser usada como método de um objeto e também pode ser retornada posteriormente dentro de outra função ou objeto
const minhaFuncao = () => "Diz olá";

const retornaUmCarro = () => ({ // arrow function
    modelo: 'Ka',
    fabricante: 'Ford'
})

console.log(minhaFuncao());
console.log(retornaUmCarro());

const carro = {
    velocidadeAtual: 40,
    acelerar: function() {
        this.velocidadeAtual += 10;
    },
    frear: function() {
        this.velocidadeAtual -= 10;
    }
    // frear: () => {
    //     console.log(this);
    //     this.velocidadeAtual -= 10;
    // }
}

carro.acelerar();
carro.frear();

console.log(carro.acelerar());
console.log(carro.frear());

// quando usar this, optar pela função convencional

const soma = (a, b) => a + b;

console.log(soma(10, 190));

function somar(a, b) {
    return a + b;
}

console.log(somar(87, 94));