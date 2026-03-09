import{j as a}from"./vendor-gzd0YkcT.js";import{a as o,v as d,c as m,b as f,d as e,S as u,f as n,y as h}from"./main-D9e2qkBQ.js";const $=["Build fast & beautiful 🚀","SPA Router sin hash ✅","Utilidades JS listas 🎯","Temas dinámicos 🎨"],b=[{valor:8,label:"Páginas doc",sufijo:""},{valor:20,label:"Componentes",sufijo:"+"},{valor:8,label:"Utilidades JS",sufijo:""},{valor:5,label:"Temas de color",sufijo:""}],r=[{id:"componentes",icon:"fa-cubes",color:"#FF5C69",nombre:"Componentes",desc:"Sistema completo de UI: notificaciones, tooltips, spinner y más",items:[{icon:"fa-bell",name:"Notificaciones",desc:"Toasts elegantes con 4 tipos"},{icon:"fa-comment-dots",name:"Tooltips",desc:"Dinámicos con posición inteligente"},{icon:"fa-spinner",name:"Spinner",desc:"Loading en botones con estado"}]},{id:"utilidades",icon:"fa-wand-magic-sparkles",color:"#FFB800",nombre:"Utilidades JS",desc:"Funciones listas para auth, storage, fechas, IP y más",items:[{icon:"fa-shield-halved",name:"Auth Signal",desc:"Sistema de sesión reactivo v2.0"},{icon:"fa-hard-drive",name:"LocalStorage",desc:"Cache con expiración automática"},{icon:"fa-globe",name:"Sistema IP",desc:"Geolocalización del visitante"}]},{id:"modales",icon:"fa-window-restore",color:"#7000FF",nombre:"Modales",desc:"Sistema completo: básico, formulario, confirmación, wizard",items:[{icon:"fa-circle-check",name:"Confirmación",desc:"Flujos de decisión elegantes"},{icon:"fa-list-ol",name:"Wizard",desc:"Modales por pasos interactivos"},{icon:"fa-images",name:"Galería",desc:"Visualizador de imágenes modal"}]},{id:"guias",icon:"fa-book-open",color:"#29C72E",nombre:"Guías",desc:"Aprende a instalar, configurar y dominar Widev paso a paso",items:[{icon:"fa-download",name:"Instalación",desc:"3 comandos y listo para producir"},{icon:"fa-route",name:"Rutas SPA",desc:"Router sin hash, historia nativa"},{icon:"fa-rocket",name:"Deploy",desc:"Firebase Hosting + Git tags"}]},{id:"acerca",icon:"fa-circle-info",color:"#0EBEFF",nombre:"Acerca",desc:"Stack técnico, filosofía y el historial de versiones del proyecto",items:[{icon:"fa-layer-group",name:"Stack",desc:"Vite, jQuery, Firebase, CSS Vars"},{icon:"fa-lightbulb",name:"Filosofía",desc:"Ligero, modular, legible y rápido"},{icon:"fa-code-branch",name:"Versiones",desc:"Historial de cambios desde v6"}]}],g=[{icon:"fa-bolt",titulo:"Ligero y rápido",desc:"Sin CSS frameworks. Vite + jQuery + CSS variables puro. El bundle final es mínimo y el HMR es instantáneo."},{icon:"fa-puzzle-piece",titulo:"Modular al 100%",desc:"Cada página es un módulo independiente con su propio CSS. Importa solo lo que necesitas, cuando lo necesitas."},{icon:"fa-palette",titulo:"5 temas dinámicos",desc:"Cielo, Dulce, Paz, Mora y Futuro. Cambia de tema con CSS variables sin recargar ni compilar nada."}],y=[{done:!0,txt:"📦 Crear nuevo componente",color:"#29C72E"},{done:!0,txt:"⚡ Configurar wiSmart",color:"#29C72E"},{done:!1,txt:"📝 Documentar utilidades",color:"#0EBEFF"},{done:!1,txt:"🚀 Deploy a Firebase",color:"#FF5C69"}],S=["Componentes","Utilidades","Modales","Guías","Acerca"],w=i=>`
  <div class="ini_stat">
    <div class="ini_stat_n" data-target="${i.valor}" data-sufijo="${i.sufijo}">0</div>
    <div class="ini_stat_l">${i.label}</div>
  </div>`,C=(i,s)=>`
  <div class="ini_prev_day${s===0?" active":""}">
    <span class="ini_prev_day_n">${i}</span>
    <div class="ini_prev_dots">
      <span class="ini_dot" style="background:#0EBEFF"></span>
      ${s<3?'<span class="ini_dot" style="background:#29C72E"></span>':""}
      ${s===0?'<span class="ini_dot" style="background:#FF5C69"></span>':""}
    </div>
  </div>`,k=i=>`
  <div class="ini_prev_task${i.done?"":" pending"}">
    <i class="fas ${i.done?"fa-circle-check":"fa-circle"}" style="color:${i.done?"#29C72E":i.color}"></i>
    ${i.txt}
  </div>`,F=i=>`
  <div class="ini_cat_card" style="--cc:${i.color}">
    <div class="ini_cat_bar"></div>
    <div class="ini_cat_top">
      <div class="ini_cat_ico"><i class="fas ${i.icon}"></i></div>
      <div class="ini_cat_info"><h3>${i.nombre}</h3><p>${i.desc}</p></div>
    </div>
    <ul class="ini_cat_tools">
      ${i.items.map(s=>`
        <li><a href="/${i.id}" class="ini_tool_a">
          <i class="fas ${s.icon}"></i>
          <div><strong>${s.name}</strong><span>${s.desc}</span></div>
          <i class="fas fa-arrow-right ini_ext"></i>
        </a></li>`).join("")}
    </ul>
  </div>`,j=(i,s)=>`
  <div class="ini_about_card" style="--d:${s*.15}s">
    <div class="ini_card_ico"><i class="fas ${i.icon}"></i></div>
    <h3>${i.titulo}</h3>
    <p>${i.desc}</p>
  </div>`,U=()=>`
<div class="ini_wrap">

  <!-- ===== HERO ===== -->
  <section class="ini_hero">
    <div class="ini_hero_content">

      <div class="ini_saludo" style="--d:0s">
        <span>${u()} </span><span class="ini_wave">👋</span>
      </div>

      <h1 class="ini_titulo" style="--d:.18s">
        Tu framework web <span class="ini_grad">minimalista</span>
      </h1>

      <div class="ini_roles" style="--d:.36s">
        ${$.map((i,s)=>`<span class="ini_role${s===0?" active":""}">${i}</span>`).join("")}
      </div>

      <p class="ini_sub" style="--d:.54s">
        ${o} es un ecosistema de utilidades JS + sistema de temas + SPA router.
        Todo lo que necesitas para construir apps web rápidas y hermosas sin frameworks pesados.
      </p>

      <div class="ini_stats" id="in_stats" style="--d:.72s">
        ${b.map(w).join("")}
      </div>

      <div class="ini_btns" style="--d:.9s">
        <a href="/componentes" class="ini_btn_p"><i class="fas fa-rocket"></i> Ver componentes</a>
        <a href="/guias" class="ini_btn_s"><i class="fas fa-book-open"></i> Guía de inicio</a>
      </div>

    </div>

    <!-- Derecha: preview del proyecto -->
    <div class="ini_hero_visual">
      <div class="ini_planner_preview" style="--d:.3s">
        <div class="ini_prev_header">
          <i class="fas fa-code-branch"></i>
          <span>${o} ${d} 🚀</span>
          <span class="ini_prev_badge"><i class="fas fa-circle"></i> Activo</span>
        </div>
        <div class="ini_prev_cols">
          <div class="ini_prev_left">${S.map(C).join("")}</div>
          <div class="ini_prev_right">
            <div class="ini_prev_note_title"><i class="fas fa-list-check"></i> Dev tasks</div>
            ${y.map(k).join("")}
            <div class="ini_prev_add"><i class="fas fa-plus"></i> Nueva tarea...</div>
          </div>
        </div>
      </div>
      <div class="ini_ftech ini_ft1" style="--d:.5s"  ${n("Componentes")}><i class="fas fa-cubes"></i></div>
      <div class="ini_ftech ini_ft2" style="--d:.65s" ${n("Utilidades")}><i class="fas fa-wand-magic-sparkles"></i></div>
      <div class="ini_ftech ini_ft3" style="--d:.8s"  ${n("Modales")}><i class="fas fa-window-restore"></i></div>
      <div class="ini_ftech ini_ft4" style="--d:.95s" ${n("Temas")}><i class="fas fa-palette"></i></div>
    </div>
  </section>

  <!-- ===== MÓDULOS ===== -->
  <section class="ini_cats_sec">
    <div class="ini_sec_head">
      <h2 class="ini_sec_tit">Todo lo que <span class="ini_grad">necesitas</span></h2>
      <div class="ini_sec_line"></div>
      <p class="ini_sec_desc">5 secciones documentadas para dominar el framework</p>
    </div>
    <div class="ini_cats_grid">${r.map(F).join("")}</div>
  </section>

  <!-- ===== ¿POR QUÉ? ===== -->
  <section class="ini_about_sec">
    <div class="ini_sec_head">
      <h2 class="ini_sec_tit">¿Por qué <span class="ini_grad">${o}?</span></h2>
      <div class="ini_sec_line"></div>
    </div>
    <div class="ini_about_grid">${g.map(j).join("")}</div>
  </section>

  <!-- ===== CTA ===== -->
  <section class="ini_cta_sec">
    <div class="ini_cta_wrap">
      <i class="fas fa-rocket ini_cta_ico"></i>
      <h2>¿Listo para construir con ${o}? 🚀</h2>
      <p>Explora la documentación y domina el framework ✨</p>
      <div class="ini_cta_chips">
        ${r.map(i=>`<a href="/${i.id}" class="ini_chip" style="--cc:${i.color}" ${n(i.desc)}><i class="fas ${i.icon}"></i> ${i.nombre}</a>`).join("")}
      </div>
      <p class="ini_cta_autor">Hecho con ❤️ por <a href="${m}" target="_blank" rel="noopener">${f}</a> · ${d} © ${h()}</p>
    </div>
  </section>

</div>`;let p=null;const x=()=>{let i=0;const s=a(".ini_role");p=setInterval(()=>{s.removeClass("active"),s.eq(i=(i+1)%s.length).addClass("active")},2800),e("#in_stats",()=>{a(".ini_stat_n").each(function(){const c=a(this),t=+c.data("target"),_=c.data("sufijo")||"";let l=0;const v=setInterval(()=>{l+=t/50,l>=t?(c.text(t+_),clearInterval(v)):c.text(Math.floor(l))},28)})}),e(".ini_cat_card",null,{anim:"wi_fadeUp",stagger:80}),e(".ini_about_card",null,{anim:"wi_fadeUp",stagger:140}),e(".ini_cta_wrap",null,{anim:"wi_fadeUp"}),e(".ini_sec_head",null,{anim:"wi_fadeUp"}),a(document).on("click.inicio",".ini_prev_day",function(){a(".ini_prev_day").removeClass("active"),a(this).addClass("active")}),console.log(`🚀 ${o} ${d} · Inicio OK`)},P=()=>{clearInterval(p),a(document).off(".inicio")};export{P as cleanup,x as init,U as render};
