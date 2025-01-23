import { LightningElement } from 'lwc';

export default class AfterRenderHook extends LightningElement {
    courses = [];
    rendered = false;

    renderedCallback() {
        if (!this.rendered) {
            this.courses = ['Fruit Corporation', 'Fruits', 'Mango'];
            this.rendered = true;
        }
    }
}
