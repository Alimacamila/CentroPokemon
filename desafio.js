// Array das informações dos Pokemons
let pokemons = [
    { id: 1, nome: "Poochvena", nivel: 2, genero: 'M', pontosDeVida: '13/13'},
    { id: 2, nome: "Zigzagoon", nivel: 2, genero: 'F', pontosDeVida: '13/13'},
    { id: 3, nome: "Dragonite", nivel: 5, genero: 'M', pontosDeVida: '25/25'},
    { id: 4, nome: "Dragonite", nivel: 5, genero: 'F', pontosDeVida: '24/24'},
    { id: 5, nome: "Poochvena", nivel: 3, genero: 'F', pontosDeVida: '15/15'},
    { id: 6, nome: "Wurmple", nivel: 2, genero: 'M', pontosDeVida: '7/14'}
]

// Função para processar cada Pokemon e montar uma mensagem de cadastro
function processarPokemon (pokemon) {
    let mensagem = '${pokemon.name} Cadastrado com sucesso';
    console.log(mensagem);
}

// Usar o método 'forEach' para iterar o array 'pokemons'
pokemons.forEach(pokemon => {
    processarPokemon(pokemon);
})