import { LitElement, css, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';    

/**
 * Audio Track Element
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class AudioTrack extends LitElement {
  static get properties() {
    return {
    }
  }

  constructor() {
    super()
  }

  render() {
    return html`
      <div>Audio Track</div>
    `
  }

  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }
    `
  }
}

window.customElements.define('audio-project', AudioTrack)
