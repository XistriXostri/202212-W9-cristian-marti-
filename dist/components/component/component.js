export class Component {
    template;
    element;
    render() {
        return this.element;
    }
    addRender(selector) {
        this.element = this.selectElement(selector);
        this.element.innerHTML += this.template;
    }
    cleanHtml(selector) {
        this.element = this.selectElement(selector);
        this.element.innerHTML = '';
        return this.element;
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
}
