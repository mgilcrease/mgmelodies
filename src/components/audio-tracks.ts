import { LitElement, css, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';    

/**
 * Audio Tracks Element
 */
export class AudioTracks extends LitElement {
  static get properties() {
    return {
    }
  }

  constructor() {
    super()
  }

  render() {
    return html`
			<h3>Audio Tracks</h3>
    `
  }

  static get styles() {
    return css`
      :host {
      }
    `
  }
}

window.customElements.define('audio-tracks', AudioTracks);
