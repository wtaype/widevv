import{j as o}from"./vendor-gzd0YkcT.js";import{f as s,w as a,m as i}from"./main-BIvGcblr.js";const r={id:"wicode",fn:s,nom:"Bloques de Código",icon:"fa-code",color:"#00D4FF",desc:"Syntax highlight con Prism.js + botón copiar integrado",code:"wiCode('pre code');",demo:()=>`
    <pre><code class="language-js">const msg = '¡Hola Widev! 🚀';
console.log(msg);</code></pre>`,main:()=>{window.Prism&&Prism.highlightAll(),s("#cp_wicode pre code")}},c=[{id:"basico",titulo:"Uso básico",desc:"Una línea activa highlight + botón copiar en cualquier <code>pre &gt; code</code>.",code:`import { wiCode } from './widev.js';

wiCode('pre code');`,demo:()=>`<pre><code class="language-js">const msg = '¡Hola Widev! 🚀';
console.log(msg);</code></pre>`},{id:"selectores",titulo:"Selectores flexibles",desc:"Acepta cualquier selector CSS válido — clase, ID, atributo.",code:`wiCode('.mi-clase code');
wiCode('#miBloque pre code');
wiCode('[data-highlight] code');`,demo:()=>`<pre><code class="language-css">.card {
  background: var(--wb);
  border-radius: 1.2vh;
  padding: 3vh;
}</code></pre>`},{id:"multiples",titulo:"Múltiples bloques",desc:"Un solo llamado procesa todos los elementos del selector a la vez.",code:`// Procesa todos los pre code de la página
wiCode('pre code');

// Resultado: botón copiar en cada bloque`,demo:()=>`
      <pre><code class="language-js">const x = 1;</code></pre>
      <pre style="margin-top:1vh"><code class="language-html">&lt;div class="box"&gt;&lt;/div&gt;</code></pre>
      <pre style="margin-top:1vh"><code class="language-css">body { margin: 0; }</code></pre>`},{id:"prism",titulo:"Con Prism.js",desc:"Funciona perfecto junto a Prism. Llama <code>highlightAll()</code> antes de <code>wiCode()</code>.",code:`if (window.Prism) Prism.highlightAll();
wiCode('pre code');`,demo:()=>`<pre><code class="language-js">import { wiCode, wiVista, wiSpin }
  from './widev.js';

wiCode('pre code');</code></pre>`},{id:"version",titulo:"Versión",desc:"Consulta la versión actual directamente desde la función.",code:`import { wiCode } from './widev.js';
console.log(wiCode.v); // '1.0'`,demo:()=>`<div class="wcd_ver_demo">
      <span class="wcd_ver_tag"><i class="fas fa-code"></i> wiCode</span>
      <span class="wcd_ver_num">v${s.v}</span>
    </div>`}],l=e=>`
  <section class="wcd_sec" id="${e.id}">
    <h2 class="wcd_h2">${e.titulo}</h2>
    <p class="wcd_p">${e.desc}</p>
    <div class="wcd_demo">${e.demo()}</div>
    <div class="cp_code_wrap">
      <div class="cp_code_head">
        <span><i class="fas fa-code"></i> Código</span>
        <button class="wcd_copy" data-id="${e.id}"><i class="fas fa-copy"></i> Copiar</button>
      </div>
      <pre id="wcd_pre_${e.id}"><code class="language-js">${e.code}</code></pre>
    </div>
  </section>`,p=()=>`
<div class="wcd_wrap">
  <aside class="wcd_side">
    <div class="wcd_side_hd">
      <i class="fas fa-code" style="color:#00D4FF"></i>
      <span>wiCode</span>
      <span class="cp_badge">v${s.v}</span>
    </div>
    <nav class="wcd_nav">
      ${c.map(e=>`<a href="#${e.id}" class="wcd_nav_a">${e.titulo}</a>`).join("")}
    </nav>
    <div class="wcd_import cp_code_wrap">
      <div class="cp_code_head"><span>Import</span></div>
      <pre><code class="language-js">import { wiCode }
  from './widev.js';</code></pre>
    </div>
  </aside>

  <main class="wcd_main">
    <div class="wcd_hero">
      <h1><i class="fas fa-code" style="color:#00D4FF"></i> wiCode</h1>
      <p>Convierte cualquier <code>&lt;pre&gt;&lt;code&gt;</code> en un bloque con syntax highlight y botón copiar. Una sola línea.</p>
      <div class="wcd_badges">
        <span class="wcd_bdg"><i class="fas fa-bolt"></i> Una línea</span>
        <span class="wcd_bdg"><i class="fas fa-copy"></i> Botón copiar</span>
        <span class="wcd_bdg"><i class="fas fa-paint-brush"></i> Prism.js</span>
      </div>
    </div>
    ${c.map(l).join("")}
  </main>

</div>`,w=()=>{window.Prism&&Prism.highlightAll(),s("pre code"),o(document).on("click.wcd",".wcd_nav_a",function(e){e.preventDefault();const d=o(o(this).attr("href"));d.length&&o("html,body").animate({scrollTop:d.offset().top-80},300),o(".wcd_nav_a").removeClass("active"),o(this).addClass("active")}).on("click.wcd",".wcd_copy",function(){const e=o(this).data("id");a(o(`#wcd_pre_${e}`).text(),this,"¡Copiado!")}),i(c.map(e=>e.id),".wcd_nav_a")},m=()=>o(document).off(".wcd");export{m as cleanup,w as init,p as render,r as wi};
