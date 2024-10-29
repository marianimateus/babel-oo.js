
// todos os metodos "só" funcionam com array
const redesSociais = ['facebook', 'instagram', 'twitter'];

for (let i = 0; i < redesSociais.length; ++i) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`);
}

redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`);
})

// redesSociais[0] = facebook
// redesSociais[1] = insta
// redesSociais[2] = twitter

// map
const alunos = ['Mateus', 'Guilherme', 'Mariani', 'Kiara'];

const alunos2 = alunos.map(function(itemAtual) {
    return {
        nome: itemAtual, 
        curso: 'Frontend'
    }
})

console.log(alunos2);

// find
const Mariani = alunos2.find(function(item) { // quando não tem correspondente, retorna undefined (find).
    return item.nome == 'Mariani' // true or false
})

console.log(Mariani);

// findIndex
const indiceDoMateus = alunos2.findIndex(function(item) { // quando não tem correspondente, retorna -1 (findIndex), se retornar -1 significa que é 'falso'.
    return item.nome == 'Mateus' // true or false
})

console.log(indiceDoMateus); // retorna 0

// every(todos): retorna verdadeiro se todos possuem o mesmo predicado, caso contrario, falso.

alunos2.push({
    nome: 'Bruma',
    curso: 'Backend'
})

const alunosFront = alunos2.every(function(item) {
    return item.curso === 'Frontend' // predicado
})

console.log(alunosFront);

// some(algum): retorna verdadeiro se todos algum o mesmo predicado, caso contrario, falso.

const existeBackend = alunos2.some(function(item) {
    return item.curso === 'Backend' && item.curso === 'Frontend' // buscando aluno que faça parte dos dois cursos
})
console.log(existeBackend);

//  flter: executando a função fora do escopo do filter
function filtraBackend(nome) {
    return nome.curso === 'Backend';
}

const filtraBackend2 = aluno => aluno.curso === 'Backend';

//
const alunosDeBackend = alunos2.filter(filtraBackend);

console.log(alunosDeBackend);

// reduce.
const nums = [10, 20, 30 , 10] 

const soma = nums.reduce(function(acumulador, itemAtual) { // reduce(argumento1, argumento2) precisa receber dois argumentos.
    acumulador += itemAtual;
    return acumulador;
}, 0) // valoraInicialDoAcumulador. O acumulador recebe este valor (0),começando pelo mesmo indice, zero (primeiro). somando em sequencia a partir do indice zero, até o três.

// O acumulador permite que o resultado da operação em uma iteração seja mantido para ser usado na próxima.
// O itemAtual é o valor do elemento atual do array que será processado e combinado com o acumulador para formar o novo valor do acumulador.

console.log(soma);

let somaComFor = 0;

for (let i = 0; i < nums.length; i++) {
    somaComFor += nums[i];
}

console.log(somaComFor);

// const alunos = ['Mateus', 'Guilherme', 'Mariani', 'Kiara'];

const nomesDosAlunos = alunos2.reduce(function(acumulador, itemAtual) {
    acumulador += `${itemAtual.nome} `;
    return acumulador
}, '')

console.log(nomesDosAlunos);
// forEach só itera, n retorna nada
// map itera, faz modificações e retorna
// find encontra um item no array, findIndex, encotra o indice dentro de um array
// every retorna se todos os itens dentro do array satisfazem a um predicado
// some precisa apenas que um item satisfaça a condição do predicado
// reduce: faz reagregação de valores
// em estrutura numerica o += faz uma soma, em string faz uma concatenação