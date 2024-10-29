// function Pokemon(nome, tipo) { // função construtora
//     this.nome = nome;
//     this.tipo = tipo;
// }

// const pikachu = new Pokemon("Pikachu", "Elétrico")

class Pokemon {
    #hp = 100
    // nome = "";
    // tipo = "";
    constructor(nomeDoPokemon, tipoDoPokemon) { // 2. se faz isso...
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    } //...

    atacar(nomeDoAtaque){
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
    } // metodo

    recebeuAtaque(nomeDoAtaque) {
        this.#hp -= 10;
    }

    exibeHp(){ // dentro dos metodos da classe pode manipular o 
        console.log(this.#hp)
    }
}

class Pikachu extends Pokemon { // pikachu herda de pokemon
    constructor(){
        super('Pikachu', 'Elétrico')
    }

    atacar() {
        console.log(`${this.nome} atacou com choque do trovão`)
    }
}

class Typhlosion extends Pokemon {
    constructor(){
        super('Typhlosion', 'Fogo')
    }

    atacar() {
        console.log(`${this.nome} atacou com bola de fogo`)
    }
}


const typhlosionDoMateus = new Typhlosion();
const pikachuDoAsh = new Pikachu();

//

pikachuDoAsh.recebeuAtaque();

console.log(pikachuDoAsh.hp);

pikachuDoAsh.atacar()

pikachuDoAsh.exibeHp()
// const pikachuDoAsh = new Pikachu('Pikachu', 'Elétrico');
const pikachu = new Pokemon("Pikachu", "Elétrico"); // 3. e então se pode adicionar os argumentos propria classe
// pikachu.nome = "pikachu"; // 1. para não utilizar isso 
// pikachu.tipo = "eletrico";
console.log(pikachu);
console.log(pikachuDoAsh);
console.log(typhlosionDoMateus);

// console.log(pikachuDoAsh instanceof Pikachu);
// console.log(pikachuDoAsh instanceof Pokemon);
// amanha às 13:30