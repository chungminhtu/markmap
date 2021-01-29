import{S as e,i as a,s as t,e as s,f as r,g as n,d as o,k as i,D as m,l as p,m as l,t as d,a as c,h,b as f,E as g,F as u,G as k,c as w,j as v,n as b,H as y,o as S,p as x,r as M,I as A,J as j,u as T,K as q,v as C}from"./client.25972f0d.js";import{l as U}from"./markmap.70db4678.js";import{F as $}from"./footer.4062a95f.js";function N(e,a,t){const s=e.slice();return s[7]=a[t],s}function E(e){let a,t,d=e[1],c=[];for(let a=0;a<d.length;a+=1)c[a]=I(N(e,d,a));return{c(){a=s("aside"),t=s("ul");for(let e=0;e<c.length;e+=1)c[e].c();this.h()},l(e){a=r(e,"ASIDE",{class:!0,style:!0});var s=n(a);t=r(s,"UL",{class:!0});var i=n(t);for(let e=0;e<c.length;e+=1)c[e].l(i);i.forEach(o),s.forEach(o),this.h()},h(){i(t,"class","toc"),i(a,"class","bg-gray-100 p-4 hidden lg:block overflow-auto"),m(a,"width","240px")},m(e,s){p(e,a,s),l(a,t);for(let e=0;e<c.length;e+=1)c[e].m(t,null)},p(e,a){if(14&a){let s;for(d=e[1],s=0;s<d.length;s+=1){const r=N(e,d,s);c[s]?c[s].p(r,a):(c[s]=I(r),c[s].c(),c[s].m(t,null))}for(;s<c.length;s+=1)c[s].d(1);c.length=d.length}},d(e){e&&o(a),k(c,e)}}}function I(e){let a,t,m,k,w,v,b=e[7].title+"";return{c(){a=s("li"),t=s("a"),m=d(b),w=c(),this.h()},l(e){a=r(e,"LI",{class:!0});var s=n(a);t=r(s,"A",{href:!0});var i=n(t);m=h(i,b),i.forEach(o),w=f(s),s.forEach(o),this.h()},h(){i(t,"href",k=e[3].path+"#"+e[7].id),g(t,"active",e[7]===e[2]),i(a,"class",v="toc-item toc-"+e[7].depth)},m(e,s){p(e,a,s),l(a,t),l(t,m),l(a,w)},p(e,s){2&s&&b!==(b=e[7].title+"")&&u(m,b),10&s&&k!==(k=e[3].path+"#"+e[7].id)&&i(t,"href",k),6&s&&g(t,"active",e[7]===e[2]),2&s&&v!==(v="toc-item toc-"+e[7].depth)&&i(a,"class",v)},d(e){e&&o(a)}}}function J(e){let a,t,m,d,h,g,u,k,A,j=e[1]&&E(e);return g=new $({}),{c(){a=s("main"),j&&j.c(),t=c(),m=s("div"),h=c(),w(g.$$.fragment),this.h()},l(e){a=r(e,"MAIN",{class:!0});var s=n(a);j&&j.l(s),t=f(s),m=r(s,"DIV",{class:!0});var i=n(m);h=f(i),v(g.$$.fragment,i),i.forEach(o),s.forEach(o),this.h()},h(){d=new q(h),i(m,"class","markdown flex-1 min-w-0 p-4 lg:pr-12 overflow-auto"),i(a,"class","flex md:fs")},m(s,r){p(s,a,r),j&&j.m(a,null),l(a,t),l(a,m),d.m('<p>This project is heavily inspired by <a href="https://github.com/dundalek/markmap">dundalek&#39;s markmap</a>.</p>\n<h2 id="introduction">Introduction</h2>\n<h3 id="what-is-markmap">What is markmap?</h3>\n<p>Markmap is a combination of markdown and mindmap. It parses markdown content and extract its intrinsic hierarchical structure and renders an interactive mindmap, aka markmap.</p>\n<p>The easiest way to use it is to load your markdown content to the <a href="/repl">try it out</a> 👉 page and see your markmap on the right.</p>\n<p>You can also try it in:</p>\n<ul>\n<li><a href="https://marketplace.visualstudio.com/items?itemName=gera2ld.markmap-vscode">VSCode</a> 🚀</li>\n<li>command-line: see <a href="#markmap-cli">markmap-cli</a> 👇</li>\n<li>Vim / Neovim: see <a href="#coc-markmap">coc-markmap</a> 👇</li>\n</ul>\n<h2 id="projects">Projects</h2>\n<h3 id="markmap-lib">markmap-lib</h3>\n<p><img src="https://img.shields.io/npm/v/markmap-lib.svg" alt="NPM"></p>\n<p>Transform Markdown to data used by markmap.</p>\n<h4 id="installation">Installation</h4>\n<pre><code class="language-sh">$ yarn add markmap-lib</code></pre>\n<h4 id="usage">Usage</h4>\n<p>Parse markdown and create a node tree, return the root node and a <code>features</code> object containing the active features during parsing.</p>\n<p>Transform Markdown to markmap data:</p>\n<pre><code class="language-js">import { Transformer } from &#39;markmap-lib&#39;;\n\nconst transformer = new Transformer();\n\n// 1. transform markdown\nconst { root, features } = transformer.transform(markdown);\n\n// 2. get assets\n// either get assets required by used features\nconst { styles, scripts } = transformer.getUsedAssets(features);\n// or get all possible assets that could be used later\nconst { styles, scripts } = transformer.getAssets(features);</code></pre>\n<p>Now we have the data for rendering. See <a href="#markmap-view">markmap-view</a> 👇 for how to use them.</p>\n<h3 id="markmap-view">markmap-view</h3>\n<p><img src="https://img.shields.io/npm/v/markmap-view.svg" alt="NPM"></p>\n<p>Render a markmap from transformed data.</p>\n<h4 id="installation-1">Installation</h4>\n<pre><code class="language-sh">$ yarn add markmap-view</code></pre>\n<h4 id="usage-1">Usage</h4>\n<p>Create an SVG element with explicit width and height:</p>\n<pre><code class="language-html">&lt;script src=&quot;https://cdn.jsdelivr.net/npm/d3@6&quot;&gt;&lt;/script&gt;\n&lt;script src=&quot;https://cdn.jsdelivr.net/npm/markmap-view&quot;&gt;&lt;/script&gt;\n\n&lt;svg id=&quot;markmap&quot; style=&quot;width: 800px; height: 800px&quot;&gt;&lt;/svg&gt;</code></pre>\n<p>We got <code>{ root }</code> from transforming, and possible extraneous assets <code>{ styles, scripts }</code>.</p>\n<p>Now we can render a markmap to the SVG element:</p>\n<pre><code class="language-js">// load with &lt;script&gt;\nconst { markmap } = window;\n// or with ESM\nimport * as markmap from &#39;markmap-view&#39;;\n\nconst { Markmap, loadCSS, loadJS } = markmap;\n\n// 1. load assets\nif (styles) loadCSS(styles);\nif (scripts) loadJS(scripts, { getMarkmap: () =&gt; markmap });\n\n// 2. create markmap\n// `options` is optional, i.e. `undefined` can be passed here\nMarkmap.create(&#39;#markmap&#39;, options, root);</code></pre>\n<p>The first argument of <code>Markmap.create</code> can also be an actual SVG element, for example:</p>\n<pre><code class="language-js">const svgEl = document.querySelector(&#39;#markmap&#39;);\nMarkmap.create(svgEl, options, data);</code></pre>\n<h3 id="markmap-cli">markmap-cli</h3>\n<p><img src="https://img.shields.io/npm/v/markmap-cli.svg" alt="NPM"></p>\n<p>Use markmap command-line in a local terminal.</p>\n<h4 id="usage-2">Usage</h4>\n<pre><code class="language-sh">$ npx markmap-cli markmap.md</code></pre>\n<p>You can also install it globally:</p>\n<pre><code class="language-sh">$ yarn global add markmap-cli\n$ markmap markmap.md</code></pre>\n<p>There is a watch mode so that you could edit the Markdown file and get updates on the fly:</p>\n<pre><code class="language-sh">$ markmap -w markmap.md</code></pre>\n<h3 id="coc-markmap">coc-markmap</h3>\n<p><img src="https://img.shields.io/npm/v/coc-markmap.svg" alt="NPM"></p>\n<h4 id="installation-2">Installation</h4>\n<p>Make sure <a href="https://github.com/neoclide/coc.nvim">coc.nvim</a> is started.</p>\n<p>Then install with the Vim command:</p>\n<pre><code>:CocInstall coc-markmap</code></pre>\n<h4 id="usage-3">Usage</h4>\n<p>Open a Markdown file in Vim / Neovim, and execute:</p>\n<pre><code class="language-viml">:CocCommand markmap.create</code></pre>\n<p>An HTML file with the same basename as the Markdown file will be created and opened in your default browser.</p>\n<p>Visualization of selected text is also supported.</p>\n<h2 id="migration-notes">Migration notes</h2>\n<h3 id="010x---011x">0.10.x -&gt; 0.11.x</h3>\n<p>There is a transformer instance now:</p>\n<pre><code class="language-diff">- import { transform, getUsedAssets, getAssets, fillTemplate } from &#39;markmap-lib&#39;;\n+ import { Transformer, fillTemplate } from &#39;markmap-lib&#39;;\n\n+ const transformer = new Transformer();\n\n- const { root, features } = transform(markdown);\n+ const { root, features } = transformer.transform(markdown);\n\n- const { styles, scripts } = getUsedAssets(features);\n+ const { styles, scripts } = transformer.getUsedAssets(features);\n  // or\n- const { styles, scripts } = getAssets();\n+ const { styles, scripts } = transformer.getAssets();</code></pre>\n<h3 id="09x---010x">0.9.x -&gt; 0.10.x</h3>\n<p>The entrance has changed:</p>\n<pre><code class="language-diff">- import { transform, getUsedAssets, getAssets } from &#39;markmap-lib/dist/transform&#39;;\n- import { fillTemplate } from &#39;markmap-lib/dist/template&#39;;\n+ import { transform, getUsedAssets, getAssets, fillTemplate } from &#39;markmap-lib&#39;;\n\n- import * as markmap from &#39;markmap-lib/dist/view&#39;;\n- import { Markmap, loadCSS, loadJS } from &#39;markmap-lib/dist/view&#39;;\n+ import * as markmap from &#39;markmap-view&#39;;\n+ import { Markmap, loadCSS, loadJS } from &#39;markmap-view&#39;;</code></pre>\n<h3 id="08x---09x">0.8.x -&gt; 0.9.x</h3>\n<p>In 0.9.x the plugins at rendering time are removed in favor of the transforming plugins. As a result, the generated markmap can be loaded faster with less overhead and hopefully without flash of untranspiled code. The transforming plugins are enabled on demand, i.e. when the markdown content is detected to have the feature included.</p>\n<p>So the changes are:</p>\n<h4 id="transforming">Transforming</h4>\n<p>We get both the root node and a map of used features. Then we get the assets list for future usage.</p>\n<pre><code class="language-diff">- import { transform } from &#39;markmap-lib/dist/transform&#39;;\n+ import { transform, getUsedAssets, getAssets } from &#39;markmap-lib/dist/transform&#39;;\n\n- const root = transform(markdown);\n+ const { root, features } = transform(markdown);\n\n+ const assets = getUsedAssets(features);\n+ // or just get all possible assets if the content may change in the future\n+ const assets = getAssets();</code></pre>\n<h4 id="filling-the-template">Filling the template</h4>\n<p>We need to inject the extraneous assets required by plugins to the output.</p>\n<pre><code class="language-diff">  import { fillTemplate } from &#39;markmap-lib/dist/template&#39;;\n\n- const html = fillTemplate(root);\n+ const html = fillTemplate(root, assets);</code></pre>\n<h4 id="render">Render</h4>\n<p>We don&#39;t need to load the view plugins any more, but we&#39;ll have to include the assets if plugin features are used.</p>\n<pre><code class="language-diff">- import { Markmap, loadPlugins } from &#39;markmap-lib/dist/view&#39;;\n+ import * as markmap from &#39;markmap-lib/dist/view&#39;;\n+ import { Markmap, loadCSS, loadJS } from &#39;markmap-lib/dist/view&#39;;\n\n+ const { styles, scripts } = assets;\n+ if (styles) loadCSS(styles);\n+ if (scripts) loadJS(scripts, { getMarkmap: () =&gt; markmap });\n\n- loadPlugins([\n-   &#39;mathJax&#39;,\n-   &#39;prism&#39;,\n- ])\n- .then(() =&gt; {\n    Markmap.create(&#39;#markmap&#39;, null, data);\n- });</code></pre>\n<p>Note that the scripts may want to access <code>markmap</code> module, so we should export a <code>getMarkmap</code> method to <code>loadScript</code>. However this can be omitted if your markmap library is loaded from CDN and can be accessed via <code>window.markmap</code>.</p>\n<pre><code class="language-diff">+ &lt;script src=&quot;https://cdn.jsdelivr.net/npm/markmap-lib/dist/browser/view.min.js&quot;&gt;&lt;/script&gt;</code></pre>\n<pre><code class="language-diff">  console.log(window.markmap); // -&gt; the markmap object\n- if (scripts) loadJS(scripts, { getMarkmap: () =&gt; markmap });\n+ if (scripts) loadJS(scripts);</code></pre>\n',m),l(m,h),b(g,m,null),e[6](m),u=!0,k||(A=y(m,"scroll",e[5]),k=!0)},p(e,[s]){e[1]?j?j.p(e,s):(j=E(e),j.c(),j.m(a,t)):j&&(j.d(1),j=null)},i(e){u||(S(g.$$.fragment,e),u=!0)},o(e){x(g.$$.fragment,e),u=!1},d(t){t&&o(a),j&&j.d(),M(g),e[6](null),k=!1,A()}}}const P=U([{type:"script",data:{src:"https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-core.min.js"}},{type:"script",data:{src:"https://cdn.jsdelivr.net/npm/prismjs@1/plugins/autoloader/prism-autoloader.min.js"}}]);function V(e,a,t){let s;const{page:r}=A();let n,o,i;function m(){if(!o)return;let e;for(const a of o){if(a.el.getBoundingClientRect().top>100)break;e=a}t(2,i=e||o[0])}return j(e,r,(e=>t(3,s=e))),T((async()=>{n.querySelectorAll("a[href]").forEach((e=>{const a=e.getAttribute("href");a.startsWith("#")&&(e.href=s.path+a)})),t(1,o=Array.from(n.querySelectorAll("h1,h2,h3,h4,h5,h6"),(e=>({el:e,id:e.id,title:e.textContent,depth:+e.tagName.toLowerCase().slice(1)})))),m(),await P,window.Prism.highlightAllUnder(n)})),[n,o,i,s,r,m,function(e){C[e?"unshift":"push"]((()=>{n=e,t(0,n)}))}]}export default class extends e{constructor(e){super(),a(this,e,V,J,t,{})}}
