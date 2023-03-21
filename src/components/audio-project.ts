import { LitElement, css, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';    
import { ProjectDetails } from './project-details.js';
import { AudioTracks } from './audio-tracks.js';

/**
 * Audio Project Element
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class AudioProject extends LitElement {
  static get properties() {
    return {
    }
  }

  constructor() {
    super()
  }

  render() {
    return html`
    	<project-details></project-details>
			<audio-tracks>Tracks</audio-tracks>
    `
  }

  static get styles() {
    return css`
      :host {
        padding: 2rem;
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
      }

			project-details {
				min-width: 250px;
				width: 25%;
				height: 100%
				min-height: 250px;
			}

			audio-tracks {
				min-width: 500px;
				width: 75%;
			}

    `
  }
}

window.customElements.define('audio-project', AudioProject)
