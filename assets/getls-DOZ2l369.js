import{j as o}from"./vendor-gzd0YkcT.js";import{j as d,w as n,k as t}from"./main-D9e2qkBQ.js";const e="#06B6D4",c={id:"getls",fn:d,nom:"Leer de localStorage",icon:"fa-download",color:e,desc:"Lee un valor guardado con savels. Si expiro o no existe devuelve null automaticamente.",code:`const user = getls('usuario');
if (user) mostrarPerfil(user);`,demo:()=>`<div class="cp_demo_row">
    <div class="gls_chip"><i class="fas fa-check"></i> Valida expiracion automaticamente</div>
  </div>`,main:()=>{}},i=[{id:"basico",titulo:"Leer un valor",desc:"Pasa la clave y devuelve el valor original. Si expiro o no existe devuelve null.",html:"",js:`import { getls } from './widev.js';

const usuario = getls('usuario');

if (usuario) {
  console.log(usuario.nombre); // 'Wilder'
} else {
  // No existe o expiro
  redirigirALogin();
}`,demo:()=>`<div class="gls_demo">
      <div class="gls_row"><code>getls('existe')</code> → valor original</div>
      <div class="gls_row"><code>getls('expirado')</code> → null (auto-elimina)</div>
      <div class="gls_row"><code>getls('noexiste')</code> → null</div>
    </div>`},{id:"tipos",titulo:"Tipos preservados",desc:"getls deserializa automaticamente. Recuperas exactamente el mismo tipo que guardaste con savels.",html:"",js:`import { savels, getls } from './widev.js';

savels('config', { tema: 'Cielo', puntos: 42 });

const config = getls('config');
console.log(config.tema);   // 'Cielo'
console.log(config.puntos); // 42 (number, no string)`,demo:()=>`<div class="gls_demo">
      <div class="gls_row"><code>objeto.campo</code> → acceso directo</div>
      <div class="gls_row"><code>array[0]</code> → indexable</div>
      <div class="gls_row"><code>typeof num === 'number'</code> → tipado correcto</div>
    </div>`},{id:"patron",titulo:"Patron comun",desc:"Verificar sesion, cargar preferencias o cachear datos de API con una sola linea.",html:"",js:`import { getls, savels } from './widev.js';

// Cargar usuario o redirigir
const user = getls('user') ?? redirect('/login');

// Cache de API
let datos = getls('datos_api');
if (!datos) {
  datos = await fetchAPI();
  savels('datos_api', datos, 1);
}`,demo:()=>`<div class="gls_demo">
      <div class="gls_row"><i class="fas fa-user" style="color:#06B6D4"></i> Verificar sesion</div>
      <div class="gls_row"><i class="fas fa-palette" style="color:#06B6D4"></i> Cargar preferencias</div>
      <div class="gls_row"><i class="fas fa-database" style="color:#06B6D4"></i> Cache de API</div>
    </div>`}],r=(s,a,l)=>`
  <div class="doc_code_blk">
    <div class="doc_code_lbl"><span class="doc_code_tag doc_tag_${s}">${s.toUpperCase()}</span></div>
    <pre id="${a}"><code class="language-${s}">${l}</code></pre>
    <button class="doc_copy" data-pre="${a}" title="Copiar ${s.toUpperCase()}"><i class="fas fa-copy"></i></button>
  </div>`,v=s=>`
  <section class="doc_sec" id="${s.id}">
    <h2 class="doc_h2">${s.titulo}</h2>
    <p class="doc_p">${s.desc}</p>
    <div class="doc_tabs">${r("js",`dp_j_${s.id}`,s.js)}</div>
    <div class="doc_demo">
      <div class="doc_demo_res"><i class="fas fa-eye"></i> Resultado</div>
      ${s.demo()}
    </div>
  </section>`,_=()=>`
<div class="doc_wrap">
  <aside class="doc_side">
    <div class="doc_side_hd"><i class="fas fa-download" style="color:${e}"></i><span>getls</span><span class="cp_badge">v${d.v}</span></div>
    <div class="doc_side_info"><p class="doc_side_tit">${c.nom}</p><p class="doc_side_desc">${c.desc}</p></div>
    <nav class="doc_nav">${i.map((s,a)=>`<a href="#${s.id}" class="doc_nav_a"><span class="doc_nav_num">${a+1}</span>${s.titulo}</a>`).join("")}</nav>
  </aside>
  <main class="doc_main">
    <div class="doc_hero">
      <h1><i class="fas fa-download" style="color:${e}"></i> getls</h1>
      <p>Lee valores guardados con <code>savels</code>. Valida expiracion automaticamente. Devuelve <code>null</code> si no existe o ya expiro.</p>
      <div class="doc_badges">
        <span class="doc_bdg"><i class="fas fa-check"></i> Valida expiracion</span>
        <span class="doc_bdg"><i class="fas fa-code"></i> Tipos preservados</span>
        <span class="doc_bdg"><i class="fas fa-trash"></i> Auto-limpia</span>
      </div>
    </div>
    ${i.map(v).join("")}
  </main>
</div>`,g=()=>{window.Prism&&Prism.highlightAll(),o(document).on("click.gls",".doc_nav_a",function(s){s.preventDefault();const a=o(o(this).attr("href"));a.length&&o("html,body").animate({scrollTop:a.offset().top-80},300),o(".doc_nav_a").removeClass("active"),o(this).addClass("active")}).on("click.gls",".doc_copy",function(){n(o(`#${o(this).data("pre")}`).text(),this,"¡Copiado!")}),t(i.map(s=>s.id),".doc_nav_a")},m=()=>o(document).off(".gls");export{m as cleanup,g as init,_ as render,c as wi};
