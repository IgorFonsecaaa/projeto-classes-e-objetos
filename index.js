class hero{
    constructor(nome, idade, tipo){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
    }
    atacar(){
       if(this.tipo == "guerreiro"){
        console.log(`O ${this.tipo} atacou usando espada`)
       } else if(this.tipo == "mago"){
        console.log(`O ${this.tipo} atacou usando magia`)
       } else if(this.tipo == "monge"){
        console.log(`O ${this.tipo} atacou usando artes marciais`)
       } else if(this.tipo == "ninja"){
        console.log(`O ${this.tipo} atacou usando shuriken`)
       }
    }
}

let jogador = new hero("Igor", 24, "ninja")
jogador.atacar()

