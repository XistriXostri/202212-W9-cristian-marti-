const url = 'https://pokeapi.co/api/v2/pokemon/';
export class Page {
    pageNumber;
    constructor(pageNumber) {
        this.cleanHtml('.pokemon-container');
        this.pageNumber = pageNumber;
        this.createPokemons(pageNumber);
        this.addFooter(pageNumber);
        this.managePage(pageNumber);
    }
    createPokemons = async (pageNumber) => {
        const toPokemon = pageNumber * 20 + pageNumber;
        const fromPokemon = toPokemon - 20;
        console.log('desde el pokemon numero', fromPokemon, 'al numero', toPokemon);
        for (let i = fromPokemon; i <= toPokemon; i++) {
            await this.createPokemon(i);
        }
    };
    async createPokemon(id) {
        console.log(id);
        fetch(url + id)
            .then((response) => response.json())
            .then((data) => {
            this.addRender('.pokemon-container', this.getPokemonData(data));
        });
    }
    createTemplate(pokemonData) {
        return `
      <div class="pokemon-block" >
        <p>#${pokemonData.showId}</p>
        <div class="img-container">
          <img src="${pokemonData.img}">
        </div>
        <p>${pokemonData.name}</p>
      </div>
    `;
    }
    getPokemonData(pokemon) {
        const pokemonData = {
            name: pokemon.name,
            id: pokemon.id,
            showId: pokemon.id.toString().padStart(3, 0),
            img: pokemon.sprites.front_default,
        };
        return pokemonData;
    }
    selectElement(selector) {
        const error = new Error('Invalid selector');
        if (!selector)
            throw error;
        const e = document.querySelector(selector);
        if (e === null)
            throw error;
        return e;
    }
    addRender(selector, pokemonData) {
        const element = this.selectElement(selector);
        element.innerHTML += this.createTemplate(pokemonData);
    }
    cleanHtml(selector) {
        const element = this.selectElement(selector);
        element.innerHTML = '';
        return element;
    }
    managePage(pageNumber) {
        const nextButton = document.querySelector('#next-button');
        nextButton?.addEventListener('click', () => this.nextPage(pageNumber));
        const backButton = document.querySelector('#back-button');
        backButton?.addEventListener('click', () => this.lastPage(pageNumber));
    }
    nextPage(actualPage) {
        const newPage = actualPage + 1;
        new Page(newPage);
    }
    lastPage(actualPage) {
        if (actualPage === 1)
            return console.log('No se puede ir más atrás');
        const newPage = actualPage - 1;
        new Page(newPage);
    }
    async addFooter(pageNumber) {
        const seenPokemons = pageNumber * 20;
        const element = this.selectElement('.buttons-block');
        element.innerHTML = this.footerTemplate(seenPokemons);
    }
    footerTemplate(seenPokemons) {
        return `
        <button id="back-button"><</button>
        <p>${seenPokemons}/1154</p>
        <button id="next-button">></button>
        `;
    }
}
(() => {
    document.addEventListener('DOMContentLoaded', () => {
        try {
            new Page(1);
        }
        catch (error) {
            console.error(error);
        }
    });
})();
