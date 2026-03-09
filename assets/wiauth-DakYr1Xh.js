import{j as a}from"./vendor-gzd0YkcT.js";import{m as i,w as n,k as r}from"./main-rt_IoUeW.js";const d="#EF4444",t={id:"wiauth",fn:i,nom:"Autenticacion Reactiva",icon:"fa-user-shield",color:d,desc:"Gestiona el estado de sesion de forma reactiva. Login, logout y listeners de auth en una sola API.",code:`wiAuth(loadUser, renderUI);
wiAuth.login(userData);
wiAuth.logout();`,demo:()=>`<div class="cp_demo_row">
    <div class="wau_badge ${i.logged?"wau_on":""}">
      <i class="fas fa-circle"></i> ${i.logged?"Sesion activa":"Sin sesion"}
    </div>
  </div>`,main:()=>{}},c=[{id:"listener",titulo:"Auth listener",desc:"Registra una funcion que se ejecuta automaticamente cuando el estado de autenticacion cambia.",html:'&lt;div id="ui"&gt;&lt;/div&gt;',js:`import { wiAuth } from './widev.js';

wiAuth(
  async (reload) => {
    // cargar datos del usuario
    if (reload) await loadUser();
  },
  () => {
    // renderizar la UI
    renderApp();
  }
);`,demo:()=>`<div class="wau_demo">
      <div class="wau_row"><i class="fas fa-check-circle" style="color:#10B981"></i> Listener registrado</div>
      <div class="wau_row"><i class="fas fa-sync" style="color:#F59E0B"></i> Se ejecuta al cambiar auth</div>
    </div>`},{id:"login",titulo:"Login",desc:"Guarda los datos del usuario en localStorage con expiracion configurable. Por defecto 24 horas.",html:'&lt;button id="btn-login"&gt;Iniciar sesion&lt;/button&gt;',js:`import { wiAuth } from './widev.js';

const user = {
  uid: 'abc123',
  email: 'user@ejemplo.com',
  nombre: 'Wilder'
};

wiAuth.login(user);       // 24h por defecto
wiAuth.login(user, 72);  // 72 horas`,demo:()=>`<div class="wau_demo">
      <div class="wau_row"><code>wiAuth.login(user)</code> → guarda en localStorage</div>
      <div class="wau_row"><code>wiAuth.login(user, 72)</code> → expira en 72h</div>
    </div>`},{id:"logout",titulo:"Logout",desc:"Elimina la sesion del localStorage y emite el evento a todos los listeners registrados.",html:'&lt;button id="btn-salir"&gt;Cerrar sesion&lt;/button&gt;',js:`import { wiAuth } from './widev.js';

// Cerrar sesion
wiAuth.logout();

// Consultar estado
console.log(wiAuth.logged); // false
console.log(wiAuth.user);   // null`,demo:()=>`<div class="wau_demo">
      <div class="wau_row"><code>wiAuth.logout()</code> → limpia localStorage</div>
      <div class="wau_row"><code>wiAuth.logged</code> → <span style="color:#10B981">true</span> / <span style="color:#EF4444">false</span></div>
      <div class="wau_row"><code>wiAuth.user</code> → objeto usuario o null</div>
    </div>`},{id:"emit",titulo:"Emit — notificar cambios",desc:"Usa emit para notificar manualmente a todos los listeners cuando el estado de auth cambia.",html:"",js:`import { wiAuth } from './widev.js';

// Registrar listener adicional
wiAuth.on(async () => {
  console.log('Auth cambio:', wiAuth.user);
  actualizarHeader();
});

// Emitir cambio manualmente
wiAuth.emit(nuevoUser);`,demo:()=>`<div class="wau_demo">
      <div class="wau_row"><code>wiAuth.on(fn)</code> → registra listener</div>
      <div class="wau_row"><code>wiAuth.emit(user)</code> → notifica a todos</div>
    </div>`}],e=(o,s,l)=>`
  <div class="doc_code_blk">
    <div class="doc_code_lbl"><span class="doc_code_tag doc_tag_${o}">${o.toUpperCase()}</span></div>
    <pre id="${s}"><code class="language-${o}">${l}</code></pre>
    <button class="doc_copy" data-pre="${s}" title="Copiar ${o.toUpperCase()}"><i class="fas fa-copy"></i></button>
  </div>`,u=o=>`
  <section class="doc_sec" id="${o.id}">
    <h2 class="doc_h2">${o.titulo}</h2>
    <p class="doc_p">${o.desc}</p>
    ${o.html?`<div class="doc_tabs">${e("html",`dp_h_${o.id}`,o.html)}${e("js",`dp_j_${o.id}`,o.js)}</div>`:`<div class="doc_tabs">${e("js",`dp_j_${o.id}`,o.js)}</div>`}
    <div class="doc_demo">
      <div class="doc_demo_res"><i class="fas fa-eye"></i> Resultado</div>
      ${o.demo()}
    </div>
  </section>`,p=()=>`
<div class="doc_wrap">
  <aside class="doc_side">
    <div class="doc_side_hd"><i class="fas fa-user-shield" style="color:${d}"></i><span>wiAuth</span><span class="cp_badge">v${i.v}</span></div>
    <div class="doc_side_info"><p class="doc_side_tit">${t.nom}</p><p class="doc_side_desc">${t.desc}</p></div>
    <nav class="doc_nav">${c.map((o,s)=>`<a href="#${o.id}" class="doc_nav_a"><span class="doc_nav_num">${s+1}</span>${o.titulo}</a>`).join("")}</nav>
  </aside>
  <main class="doc_main">
    <div class="doc_hero">
      <h1><i class="fas fa-user-shield" style="color:${d}"></i> wiAuth</h1>
      <p>Gestiona la sesion de forma reactiva con <code>localStorage</code>. Registra listeners, hace login/logout y consulta el estado con <code>wiAuth.logged</code> y <code>wiAuth.user</code>.</p>
      <div class="doc_badges">
        <span class="doc_bdg"><i class="fas fa-bolt"></i> Reactivo</span>
        <span class="doc_bdg"><i class="fas fa-database"></i> localStorage</span>
        <span class="doc_bdg"><i class="fas fa-clock"></i> Expiracion</span>
      </div>
    </div>
    ${c.map(u).join("")}
  </main>
</div>`,w=()=>{window.Prism&&Prism.highlightAll(),a(document).on("click.wau",".doc_nav_a",function(o){o.preventDefault();const s=a(a(this).attr("href"));s.length&&a("html,body").animate({scrollTop:s.offset().top-80},300),a(".doc_nav_a").removeClass("active"),a(this).addClass("active")}).on("click.wau",".doc_copy",function(){n(a(`#${a(this).data("pre")}`).text(),this,"¡Copiado!")}),r(c.map(o=>o.id),".doc_nav_a")},h=()=>a(document).off(".wau");export{h as cleanup,w as init,p as render,t as wi};
