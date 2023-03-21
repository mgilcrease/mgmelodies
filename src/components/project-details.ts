import { LitElement, css, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';    

/**
 * Project Details Element
 */
export class ProjectDetails extends LitElement {
  static get properties() {
    return {
    }
  }

  constructor() {
    super()
  }

  render() {
    return html`
			<h3>Project Details</h3>
			<section>
			</section>
    `
  }

  static get styles() {
    return css`
      :host {
      }
    `
  }
}

window.customElements.define('project-details', ProjectDetails);
