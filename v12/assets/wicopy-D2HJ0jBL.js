import{j as a}from"./vendor-gzd0YkcT.js";import{w as t,k as l}from"./main-DJlD55FR.js";const e="#22C55E",n={id:"wicopy",fn:t,nom:"Copiar al Portapapeles",icon:"fa-copy",color:e,desc:"Copia cualquier texto al portapapeles con feedback visual opcional en el elemento clickeado.",code:`wicopy('Texto a copiar');
wicopy(texto, btnElement, '¡Copiado!');`,demo:()=>`<div class="cp_demo_row">
    <button class="wcp_btn" onclick="wicopy('¡Hola desde widev!', this, '¡Copiado!')">
      <i class="fas fa-copy"></i> Copiar texto
    </button>
    <input id="wcp_inp" value="Texto de prueba" readonly style="flex:1;max-width:20ch">
    <button class="wcp_btn" onclick="wicopy(document.getElementById('wcp_inp').value, this, '¡Listo!')">
      <i class="fas fa-clipboard"></i> Copiar input
    </button>
  </div>`,main:()=>{window.wicopy=t}},s=[{id:"basico",titulo:"Copiar texto",desc:"Pasa el texto como primer argumento. Se copia al portapapeles usando la Clipboard API.",html:'&lt;button id="btn-copiar"&gt;Copiar&lt;/button&gt;',js:`import { wicopy } from './widev.js';

wicopy('Texto a copiar');

// Con elemento para feedback visual
$('#btn-copiar').on('click', function() {
  wicopy('Texto a copiar', this, '¡Copiado!');
});`,demo:()=>`<div class="cp_demo_row">
      <button class="wcp_btn" onclick="wicopy('Texto de ejemplo copiado!', this, '¡Copiado!')">
        <i class="fas fa-copy"></i> Copiar texto
      </button>
    </div>`},{id:"input",titulo:"Copiar desde input",desc:"Copia el valor de un input directamente. Ideal para campos de codigo, tokens o URLs.",html:`&lt;input id="token" value="mi-token-secreto"&gt;
&lt;button id="btn-copy"&gt;&lt;i class="fas fa-copy"&gt;&lt;/i&gt;&lt;/button&gt;`,js:`import { wicopy } from './widev.js';

$('#btn-copy').on('click', function() {
  const token = $('#token').val();
  wicopy(token, this, '¡Token copiado!');
});`,demo:()=>`<div class="cp_demo_row">
      <input id="wcp_token" value="wi-token-abc123xyz" readonly style="flex:1">
      <button class="wcp_btn" onclick="wicopy(document.getElementById('wcp_token').value, this, '¡Token copiado!')">
        <i class="fas fa-copy"></i> Copiar
      </button>
    </div>`},{id:"feedback",titulo:"Feedback visual",desc:"El segundo argumento es el elemento que muestra el feedback. El tercero es el mensaje. Se restaura solo.",html:'&lt;button id="btn"&gt;&lt;i class="fas fa-copy"&gt;&lt;/i&gt; Copiar&lt;/button&gt;',js:`import { wicopy } from './widev.js';

// Sin feedback
wicopy('Texto');

// Con elemento + mensaje
wicopy('Texto', btn, '¡Copiado!');

// El boton muestra '¡Copiado!' y se restaura automaticamente`,demo:()=>`<div class="cp_demo_row" style="flex-wrap:wrap;gap:.8vh">
      <button class="wcp_btn" onclick="wicopy('Sin feedback')">Sin feedback</button>
      <button class="wcp_btn" onclick="wicopy('Con feedback', this, '¡Listo! ✓')">Con feedback</button>
      <button class="wcp_btn" onclick="wicopy('Custom msg', this, 'Guardado 🎉')">Custom msg</button>
    </div>`}],i=(o,c,d)=>`
  <div class="doc_code_blk">
    <div class="doc_code_lbl"><span class="doc_code_tag doc_tag_${o}">${o.toUpperCase()}</span></div>
    <pre id="${c}"><code class="language-${o}">${d}</code></pre>
    <button class="doc_copy" data-pre="${c}" title="Copiar ${o.toUpperCase()}"><i class="fas fa-copy"></i></button>
  </div>`,p=o=>`
  <section class="doc_sec" id="${o.id}">
    <h2 class="doc_h2">${o.titulo}</h2>
    <p class="doc_p">${o.desc}</p>
    ${o.html?`<div class="doc_tabs">${i("html",`dp_h_${o.id}`,o.html)}${i("js",`dp_j_${o.id}`,o.js)}</div>`:`<div class="doc_tabs">${i("js",`dp_j_${o.id}`,o.js)}</div>`}
    <div class="doc_demo">
      <div class="doc_demo_res"><i class="fas fa-eye"></i> Resultado</div>
      ${o.demo()}
    </div>
  </section>`,m=()=>`
<div class="doc_wrap">
  <aside class="doc_side">
    <div class="doc_side_hd"><i class="fas fa-copy" style="color:${e}"></i><span>wicopy</span><span class="cp_badge">v${t.v}</span></div>
    <div class="doc_side_info"><p class="doc_side_tit">${n.nom}</p><p class="doc_side_desc">${n.desc}</p></div>
    <nav class="doc_nav">${s.map((o,c)=>`<a href="#${o.id}" class="doc_nav_a"><span class="doc_nav_num">${c+1}</span>${o.titulo}</a>`).join("")}</nav>
  </aside>
  <main class="doc_main">
    <div class="doc_hero">
      <h1><i class="fas fa-copy" style="color:${e}"></i> wicopy</h1>
      <p>Copia cualquier texto al portapapeles con <code>Clipboard API</code>. Muestra feedback visual en el elemento clickeado y se restaura automaticamente.</p>
      <div class="doc_badges">
        <span class="doc_bdg"><i class="fas fa-clipboard"></i> Clipboard API</span>
        <span class="doc_bdg"><i class="fas fa-eye"></i> Feedback visual</span>
        <span class="doc_bdg"><i class="fas fa-undo"></i> Auto-restaura</span>
      </div>
    </div>
    ${s.map(p).join("")}
  </main>
</div>`,_=()=>{window.wicopy=t,window.Prism&&Prism.highlightAll(),a(document).on("click.wcp",".doc_nav_a",function(o){o.preventDefault();const c=a(a(this).attr("href"));c.length&&a("html,body").animate({scrollTop:c.offset().top-80},300),a(".doc_nav_a").removeClass("active"),a(this).addClass("active")}).on("click.wcp",".doc_copy",function(){t(a(`#${a(this).data("pre")}`).text(),this,"¡Copiado!")}),l(s.map(o=>o.id),".doc_nav_a")},b=()=>{a(document).off(".wcp"),delete window.wicopy};export{b as cleanup,_ as init,m as render,n as wi};
