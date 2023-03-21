import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ToggleText } from '/src/components/form-widgets/toggle-text';

/**
 * Kr0nWave App Element
 * 
 * Defines the primary layout of the UI
 */
@customElement('kr0nwave-app')
export class Kr0nWaveApp extends LitElement {
  static get styles() {
    return css`
			@media (max-width: 699.98px) {
				#site-header {
					grid-template-areas: 
						'avatar'
						'settings'
				}
			}

			@media (min-width: 700px) {
				#site-header {
					grid-template-areas: 'settings settings settings avatar';
				}
			}

      :host {
				display: flex;
				flex-flow: column;
				color: var(--main-color);
				height: 100vh;
      }

			#site-header {
				padding: 10px;
				text-align: left;
				background-color: var(--main-bg-color);
				display: grid;
				opacity: .9;
			}

			#site-header .settings {
				grid-area: settings;
			}

			#site-header .avatar {
				grid-area: avatar;
			}

			audio-stage {
				flex: 1;
				overflow: scroll;
			}

			#site-footer {
				background-color: var(--main-bg-color);
				padding: 10px 0;
				width: 100%;
				display: flex;
				justify-content: right;
				align-items: center;
				opacity: .9;
			}

			#logo-anchor {
				margin-right: 10px;
			}

			#logo-kr0ntech {
				width: 100px;
			}
    `
  }

  render() {
    return html`
			<link rel="stylesheet" href="https://kit.fontawesome.com/7cfa700e9d.css" crossorigin="anonymous">
			<header id="site-header">
				<div class="settings">
					<a href="#" title="New Project"><i class="fa-solid fa-plus"></i></a>
					<toggle-text placeholder="Project name" title="Edit Project Name"></toggle-text>
				</div>
				<div class="avatar">Avatar</div>
			</header>
			<audio-control-panel></audio-control-panel>
			<audio-stage></audio-stage>
			<footer id="site-footer"><span>Powered by</span><a id="logo-anchor" href="https://kr0ntech.com"><img id="logo-kr0ntech" title="Kr0nTech Consulting, LLC" src="/src/assets/logo-kr0ntech.jpg" title="Kr0nTech" /></a></footer>
			`;
		}
 }
