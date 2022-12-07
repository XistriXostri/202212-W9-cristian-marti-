import { Pokemon } from './components/pokemon/pokemon';

function fetchPokemon(id: number) {
  fetch(`https://pokeapi.co/api/v2/pokemon/` + id)
    .then((response) => response.json())
    .then((data) => {
      const pokemonData = getPokemonData(data);
      console.log(pokemonData);
      orquesta('.pokemon-container', pokemonData);
      //new Pokemon('.pokemon-container', pokemonData);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

function fetchPokemons(number: number) {
  for (let i = 1; i <= number; i++) {
    fetchPokemon(i);
  }
}

function getPokemonData(pokemon) {
  const pokemonData = {
    name: pokemon.name,
    id: pokemon.id,
    img: pokemon.sprites.front_default,
  };
  console.log(pokemonData.img);
  return pokemonData;
}

function addRender(selector: string, pokemonData) {
  const element = document.querySelector(selector);
  element.innerHTML += createTemplate(pokemonData);
}

function createTemplate(pokemonData) {
  return `
      <div class="pokemon-block" >
        <p>#${pokemonData.id.toString().padStart(3, 0)}</p>
        <div class="img-container">
          <img src="${pokemonData.img}">
        </div>
        <p>${pokemonData.name}</p>
      </div>
    `;
}

function orquesta(selector: string, pokemonData) {
  addRender(selector, pokemonData);
}

fetchPokemons(9);
