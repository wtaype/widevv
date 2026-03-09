import{j as a}from"./vendor-gzd0YkcT.js";import{p as d,w as l,k as n}from"./main-DsMaKeNy.js";const o="#6366F1",e={id:"wismart",fn:d,nom:"Carga Inteligente",icon:"fa-brain",color:o,desc:"Carga CSS y JS solo cuando el usuario interactua. Evita bloquear el primer render.",code:`wiSmart({
  css: ['https://fonts.googleapis.com/...'],
  js:  [() => import('https://cdn.../prism.js')]
});`,demo:()=>`<div class="cp_demo_row">
    <div class="wsm_chip"><i class="fas fa-check-circle"></i> CSS lazy loaded</div>
    <div class="wsm_chip"><i class="fas fa-check-circle"></i> JS on interaction</div>
  </div>`,main:()=>{}},c=[{id:"basico",titulo:"Uso basico",desc:"Pasa un objeto con arrays css y js. wiSmart los carga cuando el usuario toca, hace scroll o hace clic.",html:"",js:`import { wiSmart } from './widev.js';

wiSmart({
  css: [
    'https://fonts.googleapis.com/css2?family=Poppins&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css'
  ],
  js: [
    () => import('https://cdn.jsdelivr.net/npm/prismjs@1/prism.min.js')
  ]
});`,demo:()=>`<div class="wsm_demo">
      <div class="wsm_row"><i class="fas fa-file-code" style="color:#6366F1"></i> Fonts cargadas lazy</div>
      <div class="wsm_row"><i class="fas fa-file-code" style="color:#6366F1"></i> Font Awesome lazy</div>
      <div class="wsm_row"><i class="fas fa-file-alt" style="color:#F59E0B"></i> Prism.js on demand</div>
    </div>`},{id:"cache",titulo:"Cache inteligente",desc:"wiSmart recuerda si los recursos ya se cargaron (via localStorage). No los carga dos veces.",html:"",js:`import { wiSmart } from './widev.js';

// Primera visita: espera interaccion
// Segunda visita: carga inmediatamente
// La clave 'wiSmart' en localStorage controla esto
wiSmart({ css: [...], js: [...] });`,demo:()=>`<div class="wsm_demo">
      <div class="wsm_row"><i class="fas fa-database" style="color:#10B981"></i> Primera visita: lazy</div>
      <div class="wsm_row"><i class="fas fa-bolt" style="color:#F59E0B"></i> Segunda visita: inmediato</div>
    </div>`},{id:"eventos",titulo:"Eventos de activacion",desc:"Se activa en cualquiera de estos eventos del usuario: touchstart, scroll, click, mousemove.",html:"",js:`import { wiSmart } from './widev.js';

// Se activa al primer:
// - touchstart (movil)
// - scroll
// - click
// - mousemove
wiSmart({ css: [...], js: [...] });`,demo:()=>`<div style="display:flex;gap:1vh;flex-wrap:wrap">
      <div class="wsm_event"><i class="fas fa-hand-pointer"></i> touchstart</div>
      <div class="wsm_event"><i class="fas fa-mouse"></i> scroll</div>
      <div class="wsm_event"><i class="fas fa-hand-pointer"></i> click</div>
      <div class="wsm_event"><i class="fas fa-arrows-alt"></i> mousemove</div>
    </div>`},{id:"modulos",titulo:"Dynamic imports",desc:"El array js acepta funciones que devuelven import(). Permite cargar modulos ES6 de forma diferida.",html:"",js:`import { wiSmart } from './widev.js';

wiSmart({
  js: [
    () => import('https://cdn.../prism.min.js'),
    () => import('https://cdn.../chart.min.js'),
    async () => {
      const m = await import('./mi-modulo.js');
      m.init();
    }
  ]
});`,demo:()=>`<div class="wsm_demo">
      <div class="wsm_row"><i class="fas fa-code" style="color:#6366F1"></i> () =&gt; import('prism.js')</div>
      <div class="wsm_row"><i class="fas fa-code" style="color:#6366F1"></i> () =&gt; import('chart.js')</div>
    </div>`}],r=(s,i,t)=>`
  <div class="doc_code_blk">
    <div class="doc_code_lbl"><span class="doc_code_tag doc_tag_${s}">${s.toUpperCase()}</span></div>
    <pre id="${i}"><code class="language-${s}">${t}</code></pre>
    <button class="doc_copy" data-pre="${i}" title="Copiar ${s.toUpperCase()}"><i class="fas fa-copy"></i></button>
  </div>`,m=s=>`
  <section class="doc_sec" id="${s.id}">
    <h2 class="doc_h2">${s.titulo}</h2>
    <p class="doc_p">${s.desc}</p>
    <div class="doc_tabs">${r("js",`dp_j_${s.id}`,s.js)}</div>
    <div class="doc_demo">
      <div class="doc_demo_res"><i class="fas fa-eye"></i> Resultado</div>
      ${s.demo()}
    </div>
  </section>`,f=()=>`
<div class="doc_wrap">
  <aside class="doc_side">
    <div class="doc_side_hd"><i class="fas fa-brain" style="color:${o}"></i><span>wiSmart</span><span class="cp_badge">v${d.v}</span></div>
    <div class="doc_side_info"><p class="doc_side_tit">${e.nom}</p><p class="doc_side_desc">${e.desc}</p></div>
    <nav class="doc_nav">${c.map((s,i)=>`<a href="#${s.id}" class="doc_nav_a"><span class="doc_nav_num">${i+1}</span>${s.titulo}</a>`).join("")}</nav>
  </aside>
  <main class="doc_main">
    <div class="doc_hero">
      <h1><i class="fas fa-brain" style="color:${o}"></i> wiSmart</h1>
      <p>Carga CSS y JS solo cuando el usuario interactua con la pagina. Mejora el tiempo de primer render sin sacrificar funcionalidad.</p>
      <div class="doc_badges">
        <span class="doc_bdg"><i class="fas fa-rocket"></i> Primer render rapido</span>
        <span class="doc_bdg"><i class="fas fa-database"></i> Cache integrado</span>
        <span class="doc_bdg"><i class="fas fa-code"></i> Dynamic imports</span>
      </div>
    </div>
    ${c.map(m).join("")}
  </main>
</div>`,_=()=>{window.Prism&&Prism.highlightAll(),a(document).on("click.wsm",".doc_nav_a",function(s){s.preventDefault();const i=a(a(this).attr("href"));i.length&&a("html,body").animate({scrollTop:i.offset().top-80},300),a(".doc_nav_a").removeClass("active"),a(this).addClass("active")}).on("click.wsm",".doc_copy",function(){l(a(`#${a(this).data("pre")}`).text(),this,"¡Copiado!")}),n(c.map(s=>s.id),".doc_nav_a")},w=()=>a(document).off(".wsm");export{w as cleanup,_ as init,f as render,e as wi};
