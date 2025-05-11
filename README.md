# Classes de um Jogo - DIO

Este projeto implementa uma estrutura básica de um jogo com personagens utilizando **classes em JavaScript**. Cada herói possui um nome, idade e tipo (como mago, guerreiro, monge ou ninja) e pode executar um ataque específico com base em seu tipo.

## Funcionalidades

- Criação de heróis a partir de um arquivo JSON.  
- Cada herói exibe suas informações ao ser executado.  
- Ação de ataque com base no tipo do herói:  
  - **Mago**: magia  
  - **Guerreiro**: espada  
  - **Monge**: artes marciais  
  - **Ninja**: shuriken  


## Como executar

1. Clone o repositório:
```bash
git clone https://github.com/pedrohstucky/classes-jogo.git
```

2. Navegue até o diretório:
```bash
cd classes-jogo
```

3. Execute o Node.js
```bash
node src/personagens.js
```

## Requisitos

[Node.js](nodejs.org) instalado

## Exemplo de saída

```makefile
Personagem: Max
idade: 22
Tipo: guerreiro
O guerreiro Max atacou usando espada
-----------------------------------
Personagem: Nola
Idade: 34
Tipo: ninja
O ninja Nola atacou usando shuriken
...
```

Code with ☕️ by Pedro H. Stucky