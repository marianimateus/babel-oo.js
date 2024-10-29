console.log("Olá, mundo!");


// console.log(ops.sum()); invalidaria no terminal pois arrow function não pode ser utilizada antes da criação da mesma. "Cannot access 'ops' before initialization"
console.log(operations()); // função declarada, pelo contrario, pode ser utlizada antes da inicialização

function operations(a, b) {
    const sum = () => { 
        return a + b;
    };

    const sub = () => { 
        return a - b;
    };

    const mult = () => { 
        return a * b;
    };

    const divd = () => { 
        return a / b;
    };

    const expo = () => { 
        return a ** b;
    };

    return { sum, sub, mult, divd, expo };
}

const ops = operations(9, 8);

console.log(ops.sum());
console.log(ops.sub());
console.log(ops.mult());
console.log(ops.divd());
console.log(ops.expo());

//

function pessoa() {
    this.nome = "Mateus"
    
    const people = {
        dizerNome: () => {
            console.log(this.nome); 
        }
    };

    return people;
}
    const pessoaObj = new pessoa(); // Cria o objeto 'pessoa'
    pessoaObj.dizerNome(); // Saída: 'Mateus'


