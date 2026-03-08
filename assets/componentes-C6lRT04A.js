import{j as a}from"./vendor-gzd0YkcT.js";import{e as n,N as d,M as l,f as r,g as t,d as s,w as p,a as m,v as _,h as c}from"./main-BlXULIxV.js";const e=[{id:"notificaciones",icon:"fa-bell",color:"#FF5C69",nombre:"Notificaciones",ver:"v10.1",desc:"Toasts elegantes con 4 tipos: success, error, warning, info"},{id:"mensajes",icon:"fa-message",color:"#0EBEFF",nombre:"Mensajes",ver:"v10.1",desc:"Alertas tipo banner centradas con auto-cierre"},{id:"tooltips",icon:"fa-comment-dots",color:"#29C72E",nombre:"Tooltips",ver:"v11.0",desc:"Tooltips dinámicos con colores por tipo y posición inteligente"},{id:"modales",icon:"fa-window-restore",color:"#7000FF",nombre:"Modales",ver:"v10.4",desc:"Sistema completo de modales con backdrop, animaciones y accesibilidad"},{id:"spinner",icon:"fa-spinner",color:"#FFB800",nombre:"Spinner",ver:"v10.2",desc:"Loading elegante en botones con estado disabled automático"},{id:"codigo",icon:"fa-code",color:"#00D4FF",nombre:"Bloques de Código",ver:"v1.0",desc:"Syntax highlight con Prism.js + botón copiar integrado"},{id:"animaciones",icon:"fa-wand-magic-sparkles",color:"#FF5C69",nombre:"Animaciones",ver:"v12",desc:"Animaciones al scroll con IntersectionObserver inteligente"},{id:"copiar",icon:"fa-copy",color:"#29C72E",nombre:"Copiar Texto",ver:"v10.2",desc:"Copia cualquier texto al portapapeles con un click"}],u={notificacion:`// 4 tipos: success, error, warning, info
Notificacion('¡Guardado!', 'success');
Notificacion('Algo salió mal', 'error');
Notificacion('Ten cuidado', 'warning', 5000);`,mensaje:`// Alerta centrada con auto-cierre
Mensaje('¡Bienvenido a Widev!', 'success');
Mensaje('Error al cargar', 'error');`,tooltip:`// Vía JS
wiTip('#miBton', 'Hola mundo', 'info');

// Vía atributo HTML
<button \${wiTip('Tooltip mágico')}>Hover</button>`,modal:`// HTML del modal
<div id="miModal" class="wiModal">
  <div class="modalBody" style="background:var(--wb);padding:3vh">
    <button class="modalX"><i class="fas fa-xmark"></i></button>
    <h3>Mi Modal</h3>
    <p>Contenido aquí</p>
  </div>
</div>

// Abrir y cerrar
abrirModal('miModal');
cerrarModal('miModal');`,spinner:`// Activar loading
wiSpin('#miBtn');

// Desactivar (tras la operación)
wiSpin('#miBtn', false);`,codigo:`// Wrap automático de bloques <pre>
wiCode('pre code');

// Se agrega botón copiar y highlight`,animaciones:`// Fade up con stagger
wiVista('.cards', null, {
  anim: 'wi_fadeUp',
  stagger: 100
});

// Con callback personalizado
wiVista('.item', (el, i) => {
  el.style.color = 'var(--mco)';
}, { threshold: 0.3 });`,copiar:`// Copiar texto simple
wicopy('Hola mundo');

// Con tooltip de confirmación
wicopy('Texto copiado', '#miBtn', '¡Listo!');

// Copiar desde un selector
wicopy('.mi-parrafo');`},f=o=>`
  <div class="cp_card" id="cp_${o.id}" style="--cc:${o.color}">
    <div class="cp_card_head">
      <div class="cp_card_ico"><i class="fas ${o.icon}"></i></div>
      <div class="cp_card_info">
        <h3>${o.nombre}</h3>
        <span class="cp_badge">${o.ver}</span>
      </div>
    </div>
    <p class="cp_card_desc">${o.desc}</p>
    <div class="cp_demo" id="demo_${o.id}"></div>
    <div class="cp_code_wrap">
      <div class="cp_code_head">
        <span><i class="fas fa-code"></i> Código</span>
        <span class="cp_lang">JS</span>
      </div>
      <pre><code class="language-js">${u[o.id.replace("es","").replace("iones","ion").replace("ajes","aje")]||""}</code></pre>
    </div>
  </div>`,b=o=>`<a href="#cp_${o.id}" class="cp_nav_item" style="--cc:${o.color}"><i class="fas ${o.icon}"></i> ${o.nombre}</a>`,h=()=>`
<div class="cp_wrap">

  <section class="cp_hero">
    <div class="cp_hero_left">
      <span class="cp_hero_tag"><i class="fas fa-cube"></i> Componentes UI</span>
      <h1 class="cp_hero_tit">Componentes <span class="cp_grad">listos para usar</span></h1>
      <p class="cp_hero_sub">Prueba cada componente en vivo. Click, explora y copia el código directo a tu proyecto.</p>
    </div>
    <div class="cp_hero_count">
      <span class="cp_count_n">${e.length}</span>
      <span class="cp_count_l">Componentes</span>
    </div>
  </section>

  <nav class="cp_nav">${e.map(b).join("")}</nav>

  <div class="cp_grid">${e.map(f).join("")}</div>

  <section class="cp_cta">
    <i class="fas fa-cube cp_cta_ico"></i>
    <h2>¿Quieres usarlos en tu proyecto?</h2>
    <p>Importa solo lo que necesitas desde <strong>widev.js</strong></p>
    <div class="cp_code_wrap cp_cta_code">
      <pre><code class="language-js">import { Notificacion, Mensaje, wiTip, abrirModal, wiVista } from './widev.js';</code></pre>
    </div>
  </section>

</div>`,v={notificaciones:()=>`
    <div class="cp_demo_row">
      <button class="cp_btn" data-demo="noti" data-tipo="success"><i class="fas fa-check"></i> Success</button>
      <button class="cp_btn" data-demo="noti" data-tipo="error"><i class="fas fa-xmark"></i> Error</button>
      <button class="cp_btn" data-demo="noti" data-tipo="warning"><i class="fas fa-triangle-exclamation"></i> Warning</button>
      <button class="cp_btn" data-demo="noti" data-tipo="info"><i class="fas fa-info"></i> Info</button>
    </div>`,mensajes:()=>`
    <div class="cp_demo_row">
      <button class="cp_btn" data-demo="msg" data-tipo="success"><i class="fas fa-check"></i> Success</button>
      <button class="cp_btn" data-demo="msg" data-tipo="error"><i class="fas fa-xmark"></i> Error</button>
      <button class="cp_btn" data-demo="msg" data-tipo="warning"><i class="fas fa-triangle-exclamation"></i> Warning</button>
      <button class="cp_btn" data-demo="msg" data-tipo="info"><i class="fas fa-info"></i> Info</button>
    </div>`,tooltips:()=>`
    <div class="cp_demo_row">
      <button class="cp_btn cp_tip" ${c("Tooltip por defecto")}>Default</button>
      <button class="cp_btn cp_tip" ${c("¡Éxito!",null,"success")}>Success</button>
      <button class="cp_btn cp_tip" ${c("¡Cuidado!",null,"warning")}>Warning</button>
      <button class="cp_btn cp_tip" ${c("Info útil",null,"info")}>Info</button>
    </div>`,modales:()=>`
    <button class="cp_btn" data-demo="modal"><i class="fas fa-window-restore"></i> Abrir Modal</button>
    <div id="cpModal" class="wiModal">
      <div class="modalBody" style="background:var(--wb);padding:3vh">
        <button class="modalX"><i class="fas fa-xmark"></i></button>
        <h3 style="color:var(--tx);margin-bottom:1vh"><i class="fas fa-window-restore" style="color:var(--Mora)"></i> Modal de Ejemplo</h3>
        <p>Este es un modal creado con el sistema <strong>wiModal v10.4</strong>. Cierra con ESC, click afuera o el botón X.</p>
        <button class="cp_btn" style="margin-top:2vh" onclick="document.querySelector('.modalX').click()"><i class="fas fa-check"></i> Entendido</button>
      </div>
    </div>`,spinner:()=>`
    <div class="cp_demo_row">
      <button class="cp_btn cp_spin_btn" data-demo="spin"><i class="fas fa-spinner"></i> Click para cargar</button>
    </div>`,codigo:()=>`
    <div class="cp_demo_code_preview">
      <pre><code class="language-js">const saludo = '¡Hola Widev! 🚀';
console.log(saludo);</code></pre>
    </div>`,animaciones:()=>`
    <div class="cp_demo_row cp_anim_row">
      <div class="cp_anim_box wi_fadeUp">fadeUp</div>
      <div class="cp_anim_box wi_fadeLeft">fadeLeft</div>
      <div class="cp_anim_box wi_fadeRight">fadeRight</div>
      <div class="cp_anim_box wi_scale">scale</div>
    </div>
    <button class="cp_btn" data-demo="anim" style="margin-top:1vh"><i class="fas fa-rotate"></i> Repetir</button>`,copiar:()=>`
    <div class="cp_demo_row">
      <code class="cp_copy_txt">npm install widev</code>
      <button class="cp_btn" data-demo="copy"><i class="fas fa-copy"></i> Copiar</button>
    </div>`},y=()=>{e.forEach(o=>{const i=v[o.id];i&&a(`#demo_${o.id}`).html(i())}),window.Prism&&Prism.highlightAll(),n("pre code"),a(document).on("click.comp",'[data-demo="noti"]',function(){const o=a(this).data("tipo");d(`Notificación tipo ${o}`,o)}).on("click.comp",'[data-demo="msg"]',function(){const o=a(this).data("tipo");l(`Mensaje tipo ${o} ✨`,o)}).on("click.comp",'[data-demo="modal"]',()=>{r("cpModal")}).on("click.comp",'[data-demo="spin"]',function(){const o=a(this);t(o),setTimeout(()=>t(o,!1,"Click para cargar"),2e3)}).on("click.comp",'[data-demo="anim"]',()=>{a(".cp_anim_box").removeClass("wi_visible"),setTimeout(()=>s(".cp_anim_box",null,{anim:"",stagger:150}),50),a(".cp_anim_box").each(function(o){setTimeout(()=>a(this).addClass("wi_visible"),150*o)})}).on("click.comp",'[data-demo="copy"]',function(){p(a(".cp_copy_txt").text(),this,"¡Copiado!")}),a(document).on("click.comp",".cp_nav_item",function(o){o.preventDefault();const i=a(a(this).attr("href"));i.length&&a("html,body").animate({scrollTop:i.offset().top-80},400)}),s(".cp_card",null,{anim:"wi_fadeUp",stagger:100}),s(".cp_hero_left",null,{anim:"wi_fadeLeft"}),s(".cp_cta",null,{anim:"wi_fadeUp"}),console.log(`🧩 ${m} ${_} · Componentes OK`)},C=()=>{a(document).off(".comp"),console.log("🧹 Componentes limpiado")};export{C as cleanup,y as init,h as render};
