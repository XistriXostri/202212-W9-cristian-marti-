export abstract class Component {
  protected template!: string;
  private element!: Element | null;

  render() {
    return this.element;
  }

  protected addRender(selector: string) {
    this.element = this.selectElement(selector);
    this.element.innerHTML += this.template;
  }

  protected cleanHtml(selector: string) {
    this.element = this.selectElement(selector);
    this.element.innerHTML = '';
    return this.element;
  }

  private selectElement(selector: string): Element {
    const error = new Error('Invalid selector');
    if (!selector) throw error;
    const e = document.querySelector(selector);
    if (e === null) throw error;
    return e;
  }
}
