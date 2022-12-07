import { Component } from "../component/component";
export class List extends Component {
    selector;
    pokemons;
    constructor(selector) {
        super();
        this.selector = selector;
        this.pokemons = initializePokemonList();
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.render();
        try {
        }
        finally {
        }
    }
    render() {
        return super.innRender(this.selector);
    }
    createTemplate() {
        return `
      <div class="pokemon-container">
      </div>
    `;
    }
}
