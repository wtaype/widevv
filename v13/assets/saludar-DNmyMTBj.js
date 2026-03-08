import{j as s}from"./vendor-gzd0YkcT.js";import{S as d,w as t,k as r}from"./main-DOj_tjpW.js";const c="#F97316",i={id:"saludar",fn:d,nom:"Saludo Dinamico",icon:"fa-hand-wave",color:c,desc:"Devuelve el saludo correcto segun la hora del dia. Buenos dias, tardes o noches automatico.",code:`const saludo = Saludar();
// "Buenos días, " / "Buenas tardes, " / "Buenas noches, "`,demo:()=>`<div class="cp_demo_row">
    <div class="sal_badge"><i class="fas fa-clock"></i> ${d()}<b>Widev</b></div>
  </div>`,main:()=>{}},n=[{id:"basico",titulo:"Uso basico",desc:"Llama a Saludar() y concatena el nombre. Devuelve el saludo adecuado segun la hora actual.",html:'&lt;p id="saludo"&gt;&lt;/p&gt;',js:`import { Saludar } from './widev.js';

const nombre = 'Wilder';
document.getElementById('saludo').textContent = Saludar() + nombre;`,demo:()=>`<div class="sal_demo">
      <p class="sal_text"><span class="sal_hora">${d()}</span><span class="sal_nombre">Wilder</span> 👋</p>
    </div>`},{id:"dinamico",titulo:"Con nombre dinamico",desc:"Combina Saludar() con el nombre del usuario autenticado para un saludo personalizado.",html:'&lt;h2 id="bienvenida"&gt;&lt;/h2&gt;',js:`import { Saludar, wiAuth } from './widev.js';

const user = wiAuth.user;
const nombre = user?.nombre || 'visitante';

document.getElementById('bienvenida').textContent =
  Saludar() + nombre + '!';`,demo:()=>`<div class="sal_demo">
      <p class="sal_text"><span class="sal_hora">${d()}</span><span class="sal_nombre">usuario!</span></p>
    </div>`},{id:"rangos",titulo:"Rangos de hora",desc:"La funcion evalua la hora actual y devuelve el saludo correspondiente segun tres rangos del dia.",html:"",js:`// Logica interna de Saludar():
const hrs = new Date().getHours();

if (hrs >= 5  && hrs < 12) return 'Buenos días, ';
if (hrs >= 12 && hrs < 18) return 'Buenas tardes, ';
return 'Buenas noches, ';`,demo:()=>`<div style="display:flex;gap:1vh;flex-wrap:wrap">
      <div class="sal_rng"><b>5:00 - 11:59</b> Buenos días</div>
      <div class="sal_rng"><b>12:00 - 17:59</b> Buenas tardes</div>
      <div class="sal_rng"><b>18:00 - 4:59</b> Buenas noches</div>
    </div>`}],e=(a,o,l)=>`
  <div class="doc_code_blk">
    <div class="doc_code_lbl"><span class="doc_code_tag doc_tag_${a}">${a.toUpperCase()}</span></div>
    <pre id="${o}"><code class="language-${a}">${l}</code></pre>
    <button class="doc_copy" data-pre="${o}" title="Copiar ${a.toUpperCase()}"><i class="fas fa-copy"></i></button>
  </div>`,u=a=>`
  <section class="doc_sec" id="${a.id}">
    <h2 class="doc_h2">${a.titulo}</h2>
    <p class="doc_p">${a.desc}</p>
    ${a.html?`<div class="doc_tabs">${e("html",`dp_h_${a.id}`,a.html)}${e("js",`dp_j_${a.id}`,a.js)}</div>`:`<div class="doc_tabs">${e("js",`dp_j_${a.id}`,a.js)}</div>`}
    <div class="doc_demo">
      <div class="doc_demo_res"><i class="fas fa-eye"></i> Resultado</div>
      ${a.demo()}
    </div>
  </section>`,m=()=>`
<div class="doc_wrap">
  <aside class="doc_side">
    <div class="doc_side_hd"><i class="fas fa-hand-wave" style="color:${c}"></i><span>Saludar</span><span class="cp_badge">v${d.v}</span></div>
    <div class="doc_side_info"><p class="doc_side_tit">${i.nom}</p><p class="doc_side_desc">${i.desc}</p></div>
    <nav class="doc_nav">${n.map((a,o)=>`<a href="#${a.id}" class="doc_nav_a"><span class="doc_nav_num">${o+1}</span>${a.titulo}</a>`).join("")}</nav>
  </aside>
  <main class="doc_main">
    <div class="doc_hero">
      <h1><i class="fas fa-hand-wave" style="color:${c}"></i> Saludar</h1>
      <p>Devuelve el saludo correcto segun la hora del dia. Concatena con el nombre del usuario para mensajes de bienvenida dinamicos.</p>
      <div class="doc_badges">
        <span class="doc_bdg"><i class="fas fa-clock"></i> Hora automatica</span>
        <span class="doc_bdg"><i class="fas fa-user"></i> Nombre custom</span>
        <span class="doc_bdg"><i class="fas fa-bolt"></i> Puro JS</span>
      </div>
    </div>
    ${n.map(u).join("")}
  </main>
</div>`,_=()=>{window.Prism&&Prism.highlightAll(),s(document).on("click.sal",".doc_nav_a",function(a){a.preventDefault();const o=s(s(this).attr("href"));o.length&&s("html,body").animate({scrollTop:o.offset().top-80},300),s(".doc_nav_a").removeClass("active"),s(this).addClass("active")}).on("click.sal",".doc_copy",function(){t(s(`#${s(this).data("pre")}`).text(),this,"¡Copiado!")}),r(n.map(a=>a.id),".doc_nav_a")},h=()=>s(document).off(".sal");export{h as cleanup,_ as init,m as render,i as wi};
