const characterDatas = require('./personagens.json')

class Hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }
    
    printData(){
        console.log(`Personagem: ${this.name}`)
        console.log(`Idade: ${this.age}`)
        console.log(`Tipo: ${this.type}`)
    }

    attack(){
        let attackType
        if (this.type === "mago"){
            attackType = "magia"
        } else if (this.type === "guerreiro"){
            attackType = "espada"
        } else if(this.type === "monge"){
            attackType = "artes marciais"
        } else {
            attackType = "shuriken"
        }

        console.log(`O ${this.type} ${this.name} atacou usando ${attackType}`)
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
