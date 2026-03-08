import{j as s}from"./vendor-gzd0YkcT.js";import{n as t,w as l,k as n}from"./main-DOj_tjpW.js";const d="#D97706",o={id:"widate",fn:t,nom:"Fechas Firebase",icon:"fa-calendar-alt",color:d,desc:"Formatea timestamps de Firebase Firestore. Guarda y lee fechas con cache en localStorage.",code:`const f = wiDate(timestamp);
f.get(doc.fecha, 'DD/MM/YYYY');
f.save(doc);`,demo:()=>`<div class="cp_demo_row">
    <div class="wdt_chip"><i class="fas fa-calendar-alt"></i> ${new Date().toLocaleDateString("es-PE",{day:"2-digit",month:"short",year:"numeric"})}</div>
  </div>`,main:()=>{}},c=[{id:"formato",titulo:"Formatear fecha",desc:"Pasa el timestamp de Firestore y el formato deseado. devuelve una cadena de texto formateada.",html:"",js:`import { wiDate } from './widev.js';

const f = wiDate(doc.timestamp);

f.get(doc.createdAt, 'DD/MM/YYYY');     // '08/03/2026'
f.get(doc.createdAt, 'YYYY-MM-DD');     // '2026-03-08'
f.get(doc.createdAt, 'DD MMM YYYY');    // '08 mar 2026'
f.get(doc.createdAt, 'HH:mm');          // '14:32'`,demo:()=>`<div class="wdt_demo">
      <div class="wdt_row"><code>'DD/MM/YYYY'</code> → 08/03/2026</div>
      <div class="wdt_row"><code>'DD MMM YYYY'</code> → 08 mar 2026</div>
      <div class="wdt_row"><code>'HH:mm'</code> → 14:32</div>
    </div>`},{id:"guardar",titulo:"Guardar con cache",desc:"save() guarda el documento con la fecha actual y lo cachea en localStorage para acceso rapido.",html:"",js:`import { wiDate } from './widev.js';

// Al guardar un documento
const f = wiDate(serverTimestamp());
f.save(docData);

// Al leer (con cache)
const data = f.get(docSnap, 'DD/MM/YYYY');`,demo:()=>`<div class="wdt_demo">
      <div class="wdt_row"><i class="fas fa-save" style="color:#D97706"></i> f.save() → guarda + cachea</div>
      <div class="wdt_row"><i class="fas fa-bolt" style="color:#F59E0B"></i> f.get() → desde cache</div>
    </div>`},{id:"formatos",titulo:"Formatos disponibles",desc:"Soporta los formatos mas comunes para mostrar fechas en interfaces en espanol.",html:"",js:`// Formatos de fecha
'DD/MM/YYYY'     → 08/03/2026
'YYYY-MM-DD'     → 2026-03-08
'DD MMM YYYY'    → 08 mar 2026
'DD MMMM YYYY'   → 08 marzo 2026
'HH:mm'          → 14:32
'DD/MM/YYYY HH:mm' → 08/03/2026 14:32`,demo:()=>`<div style="display:flex;gap:.8vh;flex-wrap:wrap">
      <div class="wdt_fmt">DD/MM/YYYY</div>
      <div class="wdt_fmt">YYYY-MM-DD</div>
      <div class="wdt_fmt">DD MMM YYYY</div>
      <div class="wdt_fmt">HH:mm</div>
    </div>`}],r=(a,e,i)=>`
  <div class="doc_code_blk">
    <div class="doc_code_lbl"><span class="doc_code_tag doc_tag_${a}">${a.toUpperCase()}</span></div>
    <pre id="${e}"><code class="language-${a}">${i}</code></pre>
    <button class="doc_copy" data-pre="${e}" title="Copiar ${a.toUpperCase()}"><i class="fas fa-copy"></i></button>
  </div>`,m=a=>`
  <section class="doc_sec" id="${a.id}">
    <h2 class="doc_h2">${a.titulo}</h2>
    <p class="doc_p">${a.desc}</p>
    <div class="doc_tabs">${r("js",`dp_j_${a.id}`,a.js)}</div>
    <div class="doc_demo">
      <div class="doc_demo_res"><i class="fas fa-eye"></i> Resultado</div>
      ${a.demo()}
    </div>
  </section>`,v=()=>`
<div class="doc_wrap">
  <aside class="doc_side">
    <div class="doc_side_hd"><i class="fas fa-calendar-alt" style="color:${d}"></i><span>wiDate</span><span class="cp_badge">v${t.v}</span></div>
    <div class="doc_side_info"><p class="doc_side_tit">${o.nom}</p><p class="doc_side_desc">${o.desc}</p></div>
    <nav class="doc_nav">${c.map((a,e)=>`<a href="#${a.id}" class="doc_nav_a"><span class="doc_nav_num">${e+1}</span>${a.titulo}</a>`).join("")}</nav>
  </aside>
  <main class="doc_main">
    <div class="doc_hero">
      <h1><i class="fas fa-calendar-alt" style="color:${d}"></i> wiDate</h1>
      <p>Formatea timestamps de Firebase Firestore. Cachea resultados y soporta multiples formatos de fecha para interfaces en espanol.</p>
      <div class="doc_badges">
        <span class="doc_bdg"><i class="fas fa-fire"></i> Firebase ready</span>
        <span class="doc_bdg"><i class="fas fa-database"></i> Cache auto</span>
        <span class="doc_bdg"><i class="fas fa-calendar"></i> Multi-formato</span>
      </div>
    </div>
    ${c.map(m).join("")}
  </main>
</div>`,_=()=>{window.Prism&&Prism.highlightAll(),s(document).on("click.wdt",".doc_nav_a",function(a){a.preventDefault();const e=s(s(this).attr("href"));e.length&&s("html,body").animate({scrollTop:e.offset().top-80},300),s(".doc_nav_a").removeClass("active"),s(this).addClass("active")}).on("click.wdt",".doc_copy",function(){l(s(`#${s(this).data("pre")}`).text(),this,"¡Copiado!")}),n(c.map(a=>a.id),".doc_nav_a")},Y=()=>s(document).off(".wdt");export{Y as cleanup,_ as init,v as render,o as wi};
