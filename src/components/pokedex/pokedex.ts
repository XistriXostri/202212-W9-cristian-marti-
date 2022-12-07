import { Pokemon } from '../pokemon/pokemon';

export class Pokedex {
  constructor() {
    fetchPokemons(number);
  }
}
function fetchPokemon(id: number) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((response) => response.json())
    .then((data) => {
      new Pokemon(data);
    });
}

function fetchPokemons(number: number) {
  for (let i = 1; i <= number; i++) {
    fetchPokemon(i);
  }
}
