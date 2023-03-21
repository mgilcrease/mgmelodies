import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('audio-control-panel')
export class AudioControlPanel extends LitElement {
	static get properties() {
	}

	constructor() {
		super();
	}

	render() {
		return html`<section>Audio Control Panel</section>`;
	}

	static get styles() {
		return css``;
	}
}
