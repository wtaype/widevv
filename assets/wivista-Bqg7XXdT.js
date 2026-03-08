import{j as a}from"./vendor-gzd0YkcT.js";import{d as t,w as n,k as v}from"./main-BdCEMKvu.js";const e="#7C3AED",l={id:"wivista",fn:t,nom:"Animaciones al Scroll",icon:"fa-eye",color:e,desc:"Activa clases CSS cuando un elemento entra al viewport. IntersectionObserver listo en una linea.",code:"wiVista('.card', null, { anim: 'wi_fadeUp', stagger: 100 });",demo:()=>`<div class="cp_demo_row">
    <div class="wvs_box">Box 1</div>
    <div class="wvs_box" style="animation-delay:.12s">Box 2</div>
    <div class="wvs_box" style="animation-delay:.24s">Box 3</div>
  </div>`,main:()=>{}},d=[{id:"basico",titulo:"Uso basico",desc:"Selector + clase de animacion. wiVista observa cada elemento y activa la clase cuando entra en pantalla.",html:`&lt;div class="card"&gt;Contenido&lt;/div&gt;
&lt;div class="card"&gt;Contenido&lt;/div&gt;`,js:`import { wiVista } from './widev.js';
wiVista('.card', null, { anim: 'wi_fadeUp' });`,demo:()=>`<div style="display:flex;gap:1vh">
      <div class="wvs_card">Card 1</div>
      <div class="wvs_card">Card 2</div>
      <div class="wvs_card">Card 3</div>
    </div>`},{id:"stagger",titulo:"Stagger — entrada escalonada",desc:"Cada elemento recibe un retardo incremental creando un efecto de cascada visual elegante.",html:`&lt;div class="item"&gt;Item 1&lt;/div&gt;
&lt;div class="item"&gt;Item 2&lt;/div&gt;
&lt;div class="item"&gt;Item 3&lt;/div&gt;`,js:`import { wiVista } from './widev.js';
wiVista('.item', null, { anim: 'wi_fadeUp', stagger: 150 });`,demo:()=>`<div style="display:flex;flex-direction:column;gap:.8vh;width:100%">
      <div class="wvs_item" style="animation-delay:0ms">Elemento 1</div>
      <div class="wvs_item" style="animation-delay:150ms">Elemento 2</div>
      <div class="wvs_item" style="animation-delay:300ms">Elemento 3</div>
    </div>`},{id:"callback",titulo:"Con callback",desc:"Segundo argumento: funcion que se ejecuta por cada elemento al entrar en pantalla.",html:'&lt;div class="seccion" id="s1"&gt;Seccion 1&lt;/div&gt;',js:`import { wiVista } from './widev.js';
wiVista('.seccion', el => {
  console.log('visible:', el.id);
  el.classList.add('destacado');
});`,demo:()=>`<div style="display:flex;gap:1vh">
      <div class="wvs_card wvs_click" onclick="this.classList.toggle('wvs_on')">Clic → toggle clase</div>
      <div class="wvs_card wvs_click" onclick="this.classList.toggle('wvs_on')">Clic → toggle clase</div>
    </div>`},{id:"opciones",titulo:"Opciones avanzadas",desc:"threshold controla cuanto del elemento debe ser visible. once:false reactiva al salir y volver a entrar.",html:'&lt;div class="elemento"&gt;...&lt;/div&gt;',js:`import { wiVista } from './widev.js';
wiVista('.elemento', null, {
  anim: 'wi_fadeUp',
  threshold: 0.3,
  once: false,
  stagger: 80
});`,demo:()=>`<div style="display:flex;gap:1vh;flex-wrap:wrap">
      <div class="wvs_opt"><b>threshold:</b> 0.3</div>
      <div class="wvs_opt"><b>once:</b> false</div>
      <div class="wvs_opt"><b>stagger:</b> 80ms</div>
      <div class="wvs_opt"><b>anim:</b> wi_fadeUp</div>
    </div>`}],c=(s,i,o)=>`
  <div class="doc_code_blk">
    <div class="doc_code_lbl"><span class="doc_code_tag doc_tag_${s}">${s.toUpperCase()}</span></div>
    <pre id="${i}"><code class="language-${s}">${o}</code></pre>
    <button class="doc_copy" data-pre="${i}" title="Copiar ${s.toUpperCase()}"><i class="fas fa-copy"></i></button>
  </div>`,r=s=>`
  <section class="doc_sec" id="${s.id}">
    <h2 class="doc_h2">${s.titulo}</h2>
    <p class="doc_p">${s.desc}</p>
    ${s.html?`<div class="doc_tabs">${c("html",`dp_h_${s.id}`,s.html)}${c("js",`dp_j_${s.id}`,s.js)}</div>`:""}
    <div class="doc_demo">
      ${s.html?'<div class="doc_demo_res"><i class="fas fa-eye"></i> Resultado</div>':""}
      ${s.demo()}
    </div>
  </section>`,_=()=>`
<div class="doc_wrap">
  <aside class="doc_side">
    <div class="doc_side_hd"><i class="fas fa-eye" style="color:${e}"></i><span>wiVista</span><span class="cp_badge">v${t.v}</span></div>
    <div class="doc_side_info"><p class="doc_side_tit">${l.nom}</p><p class="doc_side_desc">${l.desc}</p></div>
    <nav class="doc_nav">${d.map((s,i)=>`<a href="#${s.id}" class="doc_nav_a"><span class="doc_nav_num">${i+1}</span>${s.titulo}</a>`).join("")}</nav>
  </aside>
  <main class="doc_main">
    <div class="doc_hero">
      <h1><i class="fas fa-eye" style="color:${e}"></i> wiVista</h1>
      <p>Activa clases CSS cuando un elemento entra en pantalla. Basado en <code>IntersectionObserver</code>. Sin dependencias extra.</p>
      <div class="doc_badges">
        <span class="doc_bdg"><i class="fas fa-bolt"></i> Una linea</span>
        <span class="doc_bdg"><i class="fas fa-layer-group"></i> Stagger</span>
        <span class="doc_bdg"><i class="fas fa-code"></i> Callback</span>
      </div>
    </div>
    ${d.map(r).join("")}
  </main>
</div>`,w=()=>{window.Prism&&Prism.highlightAll(),a(document).on("click.wvs",".doc_nav_a",function(s){s.preventDefault();const i=a(a(this).attr("href"));i.length&&a("html,body").animate({scrollTop:i.offset().top-80},300),a(".doc_nav_a").removeClass("active"),a(this).addClass("active")}).on("click.wvs",".doc_copy",function(){n(a(`#${a(this).data("pre")}`).text(),this,"¡Copiado!")}),v(d.map(s=>s.id),".doc_nav_a")},g=()=>a(document).off(".wvs");export{g as cleanup,w as init,_ as render,l as wi};
