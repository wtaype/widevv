import{j as a}from"./vendor-gzd0YkcT.js";import{r as d,w as n,k as r}from"./main-D5U9dSRd.js";const l="#F43F5E",c={id:"removels",fn:d,nom:"Limpiar localStorage",icon:"fa-trash-alt",color:l,desc:"Elimina una o varias claves de localStorage en una sola llamada. Admite multiples argumentos.",code:`removels('token');
removel('user', 'config', 'cache'); // multiples`,demo:()=>`<div class="cp_demo_row">
    <div class="rls_chip"><i class="fas fa-trash-alt"></i> removels('a', 'b', 'c')</div>
  </div>`,main:()=>{}},i=[{id:"una",titulo:"Eliminar una clave",desc:"Pasa la clave como argumento. La elimina del localStorage independientemente de su expiracion.",html:"",js:`import { removels } from './widev.js';

removel('token');
removel('sesion_temporal');
removel('cache_api');`,demo:()=>`<div class="rls_demo">
      <div class="rls_row"><code>removels('token')</code> → eliminado</div>
      <div class="rls_row"><code>removels('cache')</code> → eliminado</div>
    </div>`},{id:"multiple",titulo:"Multiples claves",desc:"Pasa tantas claves como necesites. Todas se eliminan en una sola llamada.",html:"",js:`import { removels } from './widev.js';

// Eliminar multiples a la vez
removel('user', 'token', 'config', 'cache');

// Tipico al cerrar sesion
removel('user', 'sesion', 'wiAuth');`,demo:()=>`<div class="rls_demo">
      <div class="rls_row"><code>removels('a', 'b', 'c')</code> → 3 eliminadas</div>
      <div class="rls_row"><code>removels(...array)</code> → spread compatible</div>
    </div>`},{id:"logout",titulo:"Patron logout",desc:"Patron tipico: al cerrar sesion limpiar todas las claves de autenticacion de una sola vez.",html:'&lt;button id="btn-logout"&gt;Cerrar sesion&lt;/button&gt;',js:`import { removels, wiAuth } from './widev.js';

$('#btn-logout').on('click', () => {
  removels('user', 'token', 'config', 'wiAuth');
  wiAuth.logout();
  location.href = '/login';
});`,demo:()=>`<div class="rls_demo">
      <div class="rls_row"><i class="fas fa-sign-out-alt" style="color:#F43F5E"></i> Limpia claves de auth</div>
      <div class="rls_row"><i class="fas fa-trash" style="color:#F43F5E"></i> Limpia cache de datos</div>
    </div>`}],e=(s,o,t)=>`
  <div class="doc_code_blk">
    <div class="doc_code_lbl"><span class="doc_code_tag doc_tag_${s}">${s.toUpperCase()}</span></div>
    <pre id="${o}"><code class="language-${s}">${t}</code></pre>
    <button class="doc_copy" data-pre="${o}" title="Copiar ${s.toUpperCase()}"><i class="fas fa-copy"></i></button>
  </div>`,m=s=>`
  <section class="doc_sec" id="${s.id}">
    <h2 class="doc_h2">${s.titulo}</h2>
    <p class="doc_p">${s.desc}</p>
    ${s.html?`<div class="doc_tabs">${e("html",`dp_h_${s.id}`,s.html)}${e("js",`dp_j_${s.id}`,s.js)}</div>`:`<div class="doc_tabs">${e("js",`dp_j_${s.id}`,s.js)}</div>`}
    <div class="doc_demo">
      <div class="doc_demo_res"><i class="fas fa-eye"></i> Resultado</div>
      ${s.demo()}
    </div>
  </section>`,_=()=>`
<div class="doc_wrap">
  <aside class="doc_side">
    <div class="doc_side_hd"><i class="fas fa-trash-alt" style="color:${l}"></i><span>removels</span><span class="cp_badge">v${d.v}</span></div>
    <div class="doc_side_info"><p class="doc_side_tit">${c.nom}</p><p class="doc_side_desc">${c.desc}</p></div>
    <nav class="doc_nav">${i.map((s,o)=>`<a href="#${s.id}" class="doc_nav_a"><span class="doc_nav_num">${o+1}</span>${s.titulo}</a>`).join("")}</nav>
  </aside>
  <main class="doc_main">
    <div class="doc_hero">
      <h1><i class="fas fa-trash-alt" style="color:${l}"></i> removels</h1>
      <p>Elimina claves de <code>localStorage</code>. Acepta multiples argumentos. Ideal para el flujo de logout.</p>
      <div class="doc_badges">
        <span class="doc_bdg"><i class="fas fa-trash"></i> Elimina claves</span>
        <span class="doc_bdg"><i class="fas fa-layer-group"></i> Multiples args</span>
        <span class="doc_bdg"><i class="fas fa-sign-out-alt"></i> Patron logout</span>
      </div>
    </div>
    ${i.map(m).join("")}
  </main>
</div>`,u=()=>{window.Prism&&Prism.highlightAll(),a(document).on("click.rls",".doc_nav_a",function(s){s.preventDefault();const o=a(a(this).attr("href"));o.length&&a("html,body").animate({scrollTop:o.offset().top-80},300),a(".doc_nav_a").removeClass("active"),a(this).addClass("active")}).on("click.rls",".doc_copy",function(){n(a(`#${a(this).data("pre")}`).text(),this,"¡Copiado!")}),r(i.map(s=>s.id),".doc_nav_a")},f=()=>a(document).off(".rls");export{f as cleanup,u as init,_ as render,c as wi};
