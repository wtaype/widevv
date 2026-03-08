import{j as c}from"./vendor-gzd0YkcT.js";import{k as l,w as t}from"./main-D5U9dSRd.js";const i="#10B981",e={id:"wiscroll",fn:l,nom:"Scroll Spy",icon:"fa-location-arrow",color:i,desc:"Resalta el link de navegacion activo segun la seccion visible en pantalla. IntersectionObserver.",code:"wiScroll(['hero','about','contact'], '.nav-link');",demo:()=>`<div class="cp_demo_row wsc_demo_wrap">
    <nav class="wsc_nav">
      <a class="wsc_lnk active" href="#wsc_s1">Inicio</a>
      <a class="wsc_lnk" href="#wsc_s2">Sobre mi</a>
      <a class="wsc_lnk" href="#wsc_s3">Contacto</a>
    </nav>
    <div class="wsc_content">
      <div id="wsc_s1" class="wsc_sec">Seccion: Inicio</div>
      <div id="wsc_s2" class="wsc_sec">Seccion: Sobre mi</div>
      <div id="wsc_s3" class="wsc_sec">Seccion: Contacto</div>
    </div>
  </div>`,main:()=>{}},o=[{id:"basico",titulo:"Uso basico",desc:"Array de IDs de secciones + selector del nav. wiScroll activa la clase active en el link correcto.",html:`&lt;nav&gt;
  &lt;a class="nav-link" href="#inicio"&gt;Inicio&lt;/a&gt;
  &lt;a class="nav-link" href="#sobre"&gt;Sobre&lt;/a&gt;
&lt;/nav&gt;
&lt;section id="inicio"&gt;...&lt;/section&gt;
&lt;section id="sobre"&gt;...&lt;/section&gt;`,js:`import { wiScroll } from './widev.js';
wiScroll(['inicio', 'sobre'], '.nav-link');`,demo:()=>`<div class="wsc_demo_inline">
      <div class="wsc_pill active">Inicio</div>
      <div class="wsc_pill">Sobre</div>
      <div class="wsc_pill">Contacto</div>
      <span style="color:var(--tx3);font-size:var(--fz_s3)">← activo segun scroll</span>
    </div>`},{id:"clase",titulo:"Clase personalizada",desc:'El tercer argumento cls cambia la clase que se aplica. Por defecto es "active".',html:'&lt;a class="side-item" href="#s1"&gt;Item 1&lt;/a&gt;',js:`import { wiScroll } from './widev.js';
wiScroll(['s1','s2','s3'], '.side-item', {
  cls: 'is-visible'
});`,demo:()=>`<div class="wsc_demo_inline">
      <div class="wsc_pill wsc_custom">Item 1 <span class="wsc_badge">is-visible</span></div>
      <div class="wsc_pill">Item 2</div>
      <div class="wsc_pill">Item 3</div>
    </div>`},{id:"margin",titulo:"Margen de activacion",desc:"margin controla cuando se activa el observer. Util para headers fijos o layouts con padding.",html:'&lt;a class="nav-a" href="#s1"&gt;Seccion 1&lt;/a&gt;',js:`import { wiScroll } from './widev.js';
wiScroll(['s1','s2'], '.nav-a', {
  margin: '-10% 0px -80% 0px'
});`,demo:()=>`<div style="display:flex;gap:1vh;flex-wrap:wrap">
      <div class="wvs_opt"><b>margin:</b> '-20% 0px -70% 0px'</div>
      <div class="wvs_opt"><b>cls:</b> 'active'</div>
    </div>`},{id:"sidebar",titulo:"Sidebar de documentacion",desc:"Patron clasico: sidebar con links que se resaltan al hacer scroll por las secciones del contenido.",html:`&lt;aside&gt;
  &lt;a class="doc_nav_a" href="#intro"&gt;Intro&lt;/a&gt;
  &lt;a class="doc_nav_a" href="#uso"&gt;Uso&lt;/a&gt;
&lt;/aside&gt;`,js:`import { wiScroll } from './widev.js';

const secciones = ['intro','uso','api','ejemplos'];
const obs = wiScroll(secciones, '.doc_nav_a');

// Para desconectar el observer:
obs.disconnect();`,demo:()=>`<div style="display:flex;gap:1vh;flex-wrap:wrap">
      <div class="wsc_pill active">Intro</div>
      <div class="wsc_pill">Uso</div>
      <div class="wsc_pill">API</div>
      <div class="wsc_pill">Ejemplos</div>
    </div>`}],d=(s,a,n)=>`
  <div class="doc_code_blk">
    <div class="doc_code_lbl"><span class="doc_code_tag doc_tag_${s}">${s.toUpperCase()}</span></div>
    <pre id="${a}"><code class="language-${s}">${n}</code></pre>
    <button class="doc_copy" data-pre="${a}" title="Copiar ${s.toUpperCase()}"><i class="fas fa-copy"></i></button>
  </div>`,r=s=>`
  <section class="doc_sec" id="${s.id}">
    <h2 class="doc_h2">${s.titulo}</h2>
    <p class="doc_p">${s.desc}</p>
    ${s.html?`<div class="doc_tabs">${d("html",`dp_h_${s.id}`,s.html)}${d("js",`dp_j_${s.id}`,s.js)}</div>`:""}
    <div class="doc_demo">
      ${s.html?'<div class="doc_demo_res"><i class="fas fa-eye"></i> Resultado</div>':""}
      ${s.demo()}
    </div>
  </section>`,_=()=>`
<div class="doc_wrap">
  <aside class="doc_side">
    <div class="doc_side_hd"><i class="fas fa-location-arrow" style="color:${i}"></i><span>wiScroll</span><span class="cp_badge">v${l.v}</span></div>
    <div class="doc_side_info"><p class="doc_side_tit">${e.nom}</p><p class="doc_side_desc">${e.desc}</p></div>
    <nav class="doc_nav">${o.map((s,a)=>`<a href="#${s.id}" class="doc_nav_a"><span class="doc_nav_num">${a+1}</span>${s.titulo}</a>`).join("")}</nav>
  </aside>
  <main class="doc_main">
    <div class="doc_hero">
      <h1><i class="fas fa-location-arrow" style="color:${i}"></i> wiScroll</h1>
      <p>Resalta automaticamente el link de navegacion segun la seccion visible. Basado en <code>IntersectionObserver</code>. Devuelve el observer para poder desconectarlo.</p>
      <div class="doc_badges">
        <span class="doc_bdg"><i class="fas fa-bolt"></i> Una linea</span>
        <span class="doc_bdg"><i class="fas fa-sliders-h"></i> Configurable</span>
        <span class="doc_bdg"><i class="fas fa-unlink"></i> disconnect()</span>
      </div>
    </div>
    ${o.map(r).join("")}
  </main>
</div>`,m=()=>{window.Prism&&Prism.highlightAll(),c(document).on("click.wsc",".doc_nav_a",function(s){s.preventDefault();const a=c(c(this).attr("href"));a.length&&c("html,body").animate({scrollTop:a.offset().top-80},300),c(".doc_nav_a").removeClass("active"),c(this).addClass("active")}).on("click.wsc",".doc_copy",function(){t(c(`#${c(this).data("pre")}`).text(),this,"¡Copiado!")}),l(o.map(s=>s.id),".doc_nav_a")},w=()=>c(document).off(".wsc");export{w as cleanup,m as init,_ as render,e as wi};
