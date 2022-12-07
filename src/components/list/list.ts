import { Component } from "../component/component";

export class List extends Component {
  pokemons: Array<Pokemons>;
  constructor(private selector: string) {
    super();
    this.pokemons = initializePokemonList();
    this.manageComponent();
  }

  manageComponent() {
    this.template = this.createTemplate();
    this.render();
    try {
      
    }
  }

  render() {
    return super.innRender(this.selector)
  }

  private createTemplate() {
    return `
      <div class="pokemon-container">
      </div>
    `;
  }
}
