const characterDatas = require('./personagens.json')

class Hero{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    
    printData(){
        console.log(`Personagem: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
        console.log(`Tipo: ${this.tipo}`)
    }

    attack(){
        let attackType
        if (this.tipo === "mago"){
            attackType = "magia"
        } else if (this.tipo === "guerreiro"){
            attackType = "espada"
        } else if(this.tipo === "monge"){
            attackType = "artes marciais"
        } else {
            attackType = "shuriken"
        }

        console.log(`O ${this.tipo} ${this.nome} atacou usando ${attackType}`)
    }

    main(){
        this.printData()
        this.attack()
        console.log("-----------------------------------")
    }
}

let charactersHeros = []
for (let index in characterDatas.heros){
    let [characterName, characterAge, characterType] = characterDatas.heros[index]
    let characters = new Hero(characterName, characterAge, characterType)
    charactersHeros.push(characters)
}

for (let p of charactersHeros){
    p.main()
}
