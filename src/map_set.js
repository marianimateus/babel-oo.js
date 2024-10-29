let meuMap = new Map();
meuMap.set("nome", "Mateus"); // "nome": chave, "Mateus": valor da chave.
meuMap.set("stack", "html, css, js");

console.log(meuMap);

//

const nome = meuMap.get("nome"); // GET é usado para retornar o valor de um item, ou o retorno do item

console.log(nome);

//
console.log(meuMap.size); // Retorna o tamanho do map, o número de pares chave-valor que ele contém.

console.log(meuMap.has("Sobrenome"));

//

// meuMap.clear()
console.log(meuMap.size);

// Para reotrnar a chave do map, define uma variavel para receber a "chave", então exibe-a no termianl.
for (let chave of meuMap.keys()) {
    console.log(chave);
}
// nome
// stack

// Para retornar o valor do map, define uma variavel para receber o "valor", então exibe-a no termianl. 
for (let value of meuMap.values()) {
    console.log(value);
}
// Mateus
// html, css, js

// Retorna o que foi inserido no campo das chaves e no campo dos valores
for (let entry of meuMap.entries()) {
    console.log(entry); 
}
// [ 'nome', 'Mateus' ]
// [ 'stack', 'html, css, js' ]
// ----
// "nome": "Mateus"
// "stack": "html, css, js"

// Utilizando [] para retornar o "valor" de ambos, tanto chave quanto valor, e então exibindo "mais" limpo no terminal.
for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`); 
}
// nome: Mateus
// stack: html, css, js

meuMap.delete("stack");
console.log(meuMap);


// Set; valores não podem se repetir

const cpfs = new Set();

cpfs.add('65271519007')
cpfs.add('83531863061')
cpfs.add('96104931065')

console.log(cpfs);

console.log(cpfs.keys());
console.log(cpfs.values());

cpfs.forEach((valor) => {
    console.log(valor);
}) // para cada valor, ele retorna em uma linha diferente o numero inserido

//
const array = ['Mateus Mariani', 'Eliane Zanatta', 'Giovani Mariani', 'Mateus', 'Mateus', 'Giovani Mariani']

const arraySet = new Set([...array]); // transformou o array em um set para apagar os nomes repetidos, pois set não permite valores iguais

const arrayNoDuply = [...arraySet]; // transforma o array que virou set para apagar valores repetidos, em array de novo

console.log(arraySet);
console.log(arrayNoDuply);