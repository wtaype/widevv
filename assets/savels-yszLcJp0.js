import{j as a}from"./vendor-gzd0YkcT.js";import{s as c,w as n,k as r}from"./main-D4kAMXFt.js";const i="#84CC16",d={id:"savels",fn:c,nom:"Guardar en localStorage",icon:"fa-save",color:i,desc:"Guarda cualquier valor en localStorage con expiracion automatica configurable en horas.",code:`savels('usuario', { nombre: 'Wilder' });
savels('config', datos, 72); // dura 72h`,demo:()=>`<div class="cp_demo_row">
    <div class="sls_chip"><i class="fas fa-database"></i> key + valor + expiracion</div>
  </div>`,main:()=>{}},e=[{id:"basico",titulo:"Guardar un valor",desc:"Pasa la clave, el valor (cualquier tipo) y las horas de expiracion. Por defecto 24 horas.",html:"",js:`import { savels } from './widev.js';

savels('usuario', { nombre: 'Wilder', rol: 'admin' });
savels('config',  { tema: 'Cielo', idioma: 'es' });
savels('token',   'abc123xyz', 1); // expira en 1 hora`,demo:()=>`<div class="sls_demo">
      <div class="sls_row"><code>savels('usuario', obj)</code> → 24h</div>
      <div class="sls_row"><code>savels('token', '...', 1)</code> → 1h</div>
      <div class="sls_row"><code>savels('config', obj, 168)</code> → 7 dias</div>
    </div>`},{id:"tipos",titulo:"Tipos de valor",desc:"savels serializa automaticamente. Guarda strings, numeros, objetos, arrays, booleanos.",html:"",js:`import { savels } from './widev.js';

savels('nombre',   'Wilder');          // string
savels('edad',     25);                 // numero
savels('activo',   true);               // boolean
savels('colores',  ['rojo','azul']);     // array
savels('usuario',  { id:1, rol:'dev' }); // objeto`,demo:()=>`<div style="display:flex;gap:.8vh;flex-wrap:wrap">
      <div class="sls_chip">String</div>
      <div class="sls_chip">Number</div>
      <div class="sls_chip">Boolean</div>
      <div class="sls_chip">Array</div>
      <div class="sls_chip">Object</div>
    </div>`},{id:"expiracion",titulo:"Expiracion configurable",desc:"El tercer argumento define las horas que durara el dato. Al expirar, getls devuelve null.",html:"",js:`import { savels } from './widev.js';

savels('sesion',   datos, 8);    // 8 horas
savels('cache',    datos, 0.5);  // 30 minutos
savels('prefs',    datos, 720);  // 30 dias
savels('token',    datos, 24);   // 1 dia (default)`,demo:()=>`<div class="sls_demo">
      <div class="sls_row"><b>0.5h</b> → 30 minutos</div>
      <div class="sls_row"><b>1h</b> → 1 hora</div>
      <div class="sls_row"><b>24h</b> → 1 dia (default)</div>
      <div class="sls_row"><b>720h</b> → 30 dias</div>
    </div>`}],t=(s,o,l)=>`
  <div class="doc_code_blk">
    <div class="doc_code_lbl"><span class="doc_code_tag doc_tag_${s}">${s.toUpperCase()}</span></div>
    <pre id="${o}"><code class="language-${s}">${l}</code></pre>
    <button class="doc_copy" data-pre="${o}" title="Copiar ${s.toUpperCase()}"><i class="fas fa-copy"></i></button>
  </div>`,v=s=>`
  <section class="doc_sec" id="${s.id}">
    <h2 class="doc_h2">${s.titulo}</h2>
    <p class="doc_p">${s.desc}</p>
    <div class="doc_tabs">${t("js",`dp_j_${s.id}`,s.js)}</div>
    <div class="doc_demo">
      <div class="doc_demo_res"><i class="fas fa-eye"></i> Resultado</div>
      ${s.demo()}
    </div>
  </section>`,u=()=>`
<div class="doc_wrap">
  <aside class="doc_side">
    <div class="doc_side_hd"><i class="fas fa-save" style="color:${i}"></i><span>savels</span><span class="cp_badge">v${c.v}</span></div>
    <div class="doc_side_info"><p class="doc_side_tit">${d.nom}</p><p class="doc_side_desc">${d.desc}</p></div>
    <nav class="doc_nav">${e.map((s,o)=>`<a href="#${s.id}" class="doc_nav_a"><span class="doc_nav_num">${o+1}</span>${s.titulo}</a>`).join("")}</nav>
  </aside>
  <main class="doc_main">
    <div class="doc_hero">
      <h1><i class="fas fa-save" style="color:${i}"></i> savels</h1>
      <p>Guarda cualquier tipo de valor en <code>localStorage</code> con expiracion automatica. Compatible con <code>getls</code> y <code>removels</code>.</p>
      <div class="doc_badges">
        <span class="doc_bdg"><i class="fas fa-database"></i> localStorage</span>
        <span class="doc_bdg"><i class="fas fa-clock"></i> Expiracion</span>
        <span class="doc_bdg"><i class="fas fa-code"></i> Cualquier tipo</span>
      </div>
    </div>
    ${e.map(v).join("")}
  </main>
</div>`,m=()=>{window.Prism&&Prism.highlightAll(),a(document).on("click.sls",".doc_nav_a",function(s){s.preventDefault();const o=a(a(this).attr("href"));o.length&&a("html,body").animate({scrollTop:o.offset().top-80},300),a(".doc_nav_a").removeClass("active"),a(this).addClass("active")}).on("click.sls",".doc_copy",function(){n(a(`#${a(this).data("pre")}`).text(),this,"¡Copiado!")}),r(e.map(s=>s.id),".doc_nav_a")},f=()=>a(document).off(".sls");export{f as cleanup,m as init,u as render,d as wi};
