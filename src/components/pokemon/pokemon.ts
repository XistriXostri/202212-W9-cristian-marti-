import { Component } from '../component/component';

export class Pokemon extends Component {
  constructor(private selector: string, pokemonData) {
    super();
    this.template = this.createTemplate(pokemonData);
    this.addRender(selector);
  }

  private createTemplate(pokemonData) {
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
