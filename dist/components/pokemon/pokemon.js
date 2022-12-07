import { Component } from '../component/component';
export class Pokemon extends Component {
    selector;
    constructor(selector, pokemonData) {
        super();
        this.selector = selector;
        this.template = this.createTemplate(pokemonData);
        this.addRender(selector);
    }
    createTemplate(pokemonData) {
        return `
      <div class="pokemon-block" >
        <p>#${pokemonData.id.toString().padStart(3, 0)}</p>
        <div class="img-container">
          <img scr="${pokemonData.img}">
        </div>
        <p>${pokemonData.name}</p>
      </div>
    `;
    }
}
