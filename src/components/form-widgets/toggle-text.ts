import { html, css, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

@customElement('toggle-text')
export class ToggleText extends LitElement {
	static styles = css`
		:host {
			min-width: 300px;
		}

		#readonly-container {
			display: inline-block;
			min-width: 300px;
			width: 500px;
		}
	`;

	@property()
	value = '';

	@property()
	placeholder = '';

	@property()
	readonly = this.value.length ? true : false;

	@query('#toggle-label')
	toggleLabel!: HTMLSpanElement;

	@query('#toggle-input')
	toggleInput!: HTMLInputElement;

	@query('#toggle-edit')
	toggleEdit!: HTMLIconElement;

	@query('#readonly-container')
	readonlyContainer!: HTMLDivElement;

	onEditClick = (evt) => {
		this.readonlyContainer.style.display = 'none';
		this.readonlyContainer.style.display = 'none';
		this.toggleInput.style.display = 'inline-block';
		this.toggleInput.focus();
	};

	onEditChange = (evt) => {
		if (this.toggleInput.value) {
			this.readonlyContainer.style.display = 'inline-block';
			this.toggleInput.style.display = 'none';

			this.value = this.toggleInput.value;
		}
	};

	render() {
		return html`
			<link rel="stylesheet" href="https://kit.fontawesome.com/7cfa700e9d.css" crossorigin="anonymous">
			<div id="readonly-container" style="${this.value ? 'display: inline-block' : 'display: none;'}">
				<span id="toggle-label" >${this.value || 'Project name' }</span>
				<i id="toggle-edit" class="fa-solid fa-pencil" @click=${this.onEditClick}></i>
			</div>
			<input id="toggle-input" style="${this.value ? 'display: none;' : 'display: inline-block;'}" type="text" placeholder=${this.placeholder} value=${this.value} @focusout=${this.onEditChange} />
		`;
	}
}
