import{j as t}from"./vendor-gzd0YkcT.js";import{i as o,w as r,k as l}from"./main-D9e2qkBQ.js";const i="#F59E0B",e={id:"wispin",fn:o,nom:"Spinner de Carga",icon:"fa-spinner",color:i,desc:"Bloquea botones con spinner y texto personalizado. Restaura con false. Una sola funcion.",code:`wiSpin('#btn', true, 'Guardando...');
// restaurar:
wiSpin('#btn', false);`,demo:()=>`<div class="cp_demo_row">
    <button id="wsp_card_btn" onclick="this._t&&clearTimeout(this._t);wiSpin(this,true,'Guardando...');this._t=setTimeout(()=>wiSpin(this,false),2000)">
      <i class="fas fa-save"></i> Guardar
    </button>
  </div>`,main:()=>{}},n=[{id:"activar",titulo:"Activar spinner",desc:"Pasa el selector del boton, true y el texto que se mostrara durante la carga.",html:'&lt;button id="btn-guardar"&gt;Guardar&lt;/button&gt;',js:`import { wiSpin } from './widev.js';
wiSpin('#btn-guardar', true, 'Guardando...');`,demo:()=>`<div class="cp_demo_row">
      <button id="wsp_d1"><i class="fas fa-save"></i> Guardar</button>
      <button class="wsp_trigger" data-target="#wsp_d1" data-msg="Guardando...">Activar</button>
      <button class="wsp_off" data-target="#wsp_d1">Restaurar</button>
    </div>`},{id:"desactivar",titulo:"Desactivar spinner",desc:"Patron tipico: activar antes del await, desactivar en finally para garantizar restauracion.",html:'&lt;button id="btn-enviar"&gt;Enviar&lt;/button&gt;',js:`import { wiSpin } from './widev.js';

async function enviar() {
  wiSpin('#btn-enviar', true, 'Enviando...');
  try {
    await fetch('/api/datos');
  } finally {
    wiSpin('#btn-enviar', false);
  }
}`,demo:()=>`<div class="cp_demo_row">
      <button id="wsp_d2">Enviar formulario</button>
      <button class="wsp_trigger" data-target="#wsp_d2" data-msg="Enviando..." data-delay="2000">Simular envio</button>
    </div>`},{id:"texto",titulo:"Texto personalizado",desc:"El tercer argumento adapta el mensaje al contexto de cada accion.",html:'&lt;button id="btn"&gt;Accion&lt;/button&gt;',js:`import { wiSpin } from './widev.js';
wiSpin('#btn', true, 'Cargando datos...');
wiSpin('#btn', true, 'Subiendo archivo...');
wiSpin('#btn', true, 'Procesando pago...');`,demo:()=>`<div class="cp_demo_row" style="flex-wrap:wrap;gap:.8vh">
      <button id="wsp_d3">Accion</button>
      <button class="wsp_trigger" data-target="#wsp_d3" data-msg="Cargando datos...">Datos</button>
      <button class="wsp_trigger" data-target="#wsp_d3" data-msg="Subiendo archivo...">Archivo</button>
      <button class="wsp_trigger" data-target="#wsp_d3" data-msg="Procesando pago...">Pago</button>
    </div>`},{id:"multiple",titulo:"Multiples botones",desc:"Cada boton se gestiona de forma independiente. Puedes tener varios activos al mismo tiempo.",html:`&lt;button id="a"&gt;A&lt;/button&gt;
&lt;button id="b"&gt;B&lt;/button&gt;`,js:`import { wiSpin } from './widev.js';
wiSpin('#a', true, 'Cargando A...');
wiSpin('#b', true, 'Cargando B...');
// Se restauran de forma independiente
wiSpin('#a', false);
wiSpin('#b', false);`,demo:()=>`<div class="cp_demo_row">
      <button id="wsp_ma">Boton A</button>
      <button id="wsp_mb">Boton B</button>
      <button class="wsp_trigger" data-target="#wsp_ma" data-msg="Procesando A...">Spin A</button>
      <button class="wsp_trigger" data-target="#wsp_mb" data-msg="Procesando B...">Spin B</button>
      <button class="wsp_off" data-target="#wsp_ma,#wsp_mb">Reset</button>
    </div>`}],d=(a,s,c)=>`
  <div class="doc_code_blk">
    <div class="doc_code_lbl"><span class="doc_code_tag doc_tag_${a}">${a.toUpperCase()}</span></div>
    <pre id="${s}"><code class="language-${a}">${c}</code></pre>
    <button class="doc_copy" data-pre="${s}" title="Copiar ${a.toUpperCase()}"><i class="fas fa-copy"></i></button>
  </div>`,p=a=>`
  <section class="doc_sec" id="${a.id}">
    <h2 class="doc_h2">${a.titulo}</h2>
    <p class="doc_p">${a.desc}</p>
    ${a.html?`<div class="doc_tabs">${d("html",`dp_h_${a.id}`,a.html)}${d("js",`dp_j_${a.id}`,a.js)}</div>`:""}
    <div class="doc_demo">
      ${a.html?'<div class="doc_demo_res"><i class="fas fa-eye"></i> Resultado</div>':""}
      ${a.demo()}
    </div>
  </section>`,m=()=>`
<div class="doc_wrap">
  <aside class="doc_side">
    <div class="doc_side_hd"><i class="fas fa-spinner" style="color:${i}"></i><span>wiSpin</span><span class="cp_badge">v${o.v}</span></div>
    <div class="doc_side_info"><p class="doc_side_tit">${e.nom}</p><p class="doc_side_desc">${e.desc}</p></div>
    <nav class="doc_nav">${n.map((a,s)=>`<a href="#${a.id}" class="doc_nav_a"><span class="doc_nav_num">${s+1}</span>${a.titulo}</a>`).join("")}</nav>
  </aside>
  <main class="doc_main">
    <div class="doc_hero">
      <h1><i class="fas fa-spinner" style="color:${i}"></i> wiSpin</h1>
      <p>Bloquea botones con un spinner y texto de carga. Restaura el estado original con <code>false</code>. Ideal para formularios y peticiones async.</p>
      <div class="doc_badges">
        <span class="doc_bdg"><i class="fas fa-lock"></i> Bloquea boton</span>
        <span class="doc_bdg"><i class="fas fa-spinner fa-spin"></i> Spinner</span>
        <span class="doc_bdg"><i class="fas fa-font"></i> Texto custom</span>
      </div>
    </div>
    ${n.map(p).join("")}
  </main>
</div>`,b=()=>{window.Prism&&Prism.highlightAll(),t(document).on("click.wsp",".doc_nav_a",function(a){a.preventDefault();const s=t(t(this).attr("href"));s.length&&t("html,body").animate({scrollTop:s.offset().top-80},300),t(".doc_nav_a").removeClass("active"),t(this).addClass("active")}).on("click.wsp",".doc_copy",function(){r(t(`#${t(this).data("pre")}`).text(),this,"¡Copiado!")}).on("click.wsp",".wsp_trigger",function(){const a=t(t(this).data("target")),s=+t(this).data("delay")||2e3;a.each(function(){o(this,!0,(t(this).closest("[data-msg]").length,""))}),o(a[0],!0,t(this).data("msg")),setTimeout(()=>a.each(function(){o(this,!1)}),s)}).on("click.wsp",".wsp_off",function(){t(t(this).data("target").split(",")).each(function(){o(this,!1)})}),l(n.map(a=>a.id),".doc_nav_a")},w=()=>t(document).off(".wsp");export{w as cleanup,b as init,m as render,e as wi};
