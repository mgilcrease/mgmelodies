import { LitElement as c, css as l, html as d } from "lit";
import { customElement as f } from "lit/decorators.js";
(function() {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload"))
    return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
    i(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const s of t.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && i(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(e) {
    const t = {};
    return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), e.crossOrigin === "use-credentials" ? t.credentials = "include" : e.crossOrigin === "anonymous" ? t.credentials = "omit" : t.credentials = "same-origin", t;
  }
  function i(e) {
    if (e.ep)
      return;
    e.ep = !0;
    const t = o(e);
    fetch(e.href, t);
  }
})();
var h = Object.defineProperty, m = Object.getOwnPropertyDescriptor, p = (a, r, o, i) => {
  for (var e = i > 1 ? void 0 : i ? m(r, o) : r, t = a.length - 1, s; t >= 0; t--)
    (s = a[t]) && (e = (i ? s(r, o, e) : s(e)) || e);
  return i && e && h(r, o, e), e;
};
let n = class extends c {
  static get styles() {
    return l`
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
    `;
  }
  render() {
    return d`
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
};
n = p([
  f("mgmelodies-app")
], n);
