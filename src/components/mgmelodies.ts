import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * MGMelodires Element
 * 
 * Defines the primary layout of the UI
 */
@customElement('mgmelodies-app')
export class MGMelodies extends LitElement {
  static get styles() {
    return css`
			@media (max-width: 699.98px) {
				#site-header {
					grid-template-areas: 
						'avatar'
						'business-card'
				}

				#site-header .avatar {
					text-align: center;
				}
			}

			@media (min-width: 700px) {
				#site-header {
					grid-template-areas: 'business-card business-card business-card avatar';
				}

				#site-header .avatar {
					grid-area: avatar;
					text-align: right;
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

			#site-header .business-card {
				grid-area: business-card;
			}

			#site-body {
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

			#site-footer .icons8 {
				display: inline-block;
			}

			#site-footer .logo-image {
				width: 100px;
				margin-right: 25px;
			}

			.vertical {
				border-left: 2px solid lightgray;
				height: 50%;
				display: inline-block;
				margin: 0 10px;
			}
    `
  }

  render() {
    return html`
			<link rel="stylesheet" href="https://kit.fontawesome.com/7cfa700e9d.css" crossorigin="anonymous">
			<header id="site-header">
				<div class="business-card">
					<h1>Mark Gilcrease</h1>
					<h2>Professional Troubador</h2>
					<h3>Contact me at <a href="mailto:mark@mgmelodies.net">mark@mgmelodies.net</a> if you're interested in booking a gig. I'd love to hear from you!</h3>
				</div>
				<div class="avatar"><img src="/src/assets/handshot.jpg"/></div>
			</header>
			<section id="site-body">
			</section>
			<footer id="site-footer">
				<span class="icons8"><a target="_blank" href="https://icons8.com/icon/102474/audio-wave2">favicon</a>&nbsp;by&nbsp;<a target="_blank" href="https://icons8.com">Icons8</a></span>
				<div class="vertical"></div>
				Site powered by
				<a target="_blank" href="https://kr0ntech.com">
					<img class="logo-image" title="Kr0nTech Consulting, LLC" src="/src/assets/logo-kr0ntech.png" title="Kr0nTech" />
				</a>

			</footer>
			`;
		}
 }
