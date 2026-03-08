import $ from 'jquery';
import { app, version, autor, linkme } from '../wii.js';
import { wiVista, year, wiTip, Saludar } from '../widev.js';

// ── DATA ──────────────────────────────────────────────────────
const roles = ['Build fast & beautiful 🚀', 'SPA Router sin hash ✅', 'Utilidades JS listas 🎯', 'Temas dinámicos 🎨'];

const stats = [
  { valor:8,  label:'Páginas doc',         sufijo:'' },
  { valor:20, label:'Componentes',         sufijo:'+' },
  { valor:8,  label:'Utilidades JS',       sufijo:'' },
  { valor:5,  label:'Temas de color',      sufijo:'' },
];

const features = [
  { id:'componentes', icon:'fa-cubes',               color:'#FF5C69', nombre:'Componentes',
    desc:'Sistema completo de UI: notificaciones, tooltips, spinner y más',
    items:[
      { icon:'fa-bell',             name:'Notificaciones', desc:'Toasts elegantes con 4 tipos' },
      { icon:'fa-comment-dots',     name:'Tooltips',       desc:'Dinámicos con posición inteligente' },
      { icon:'fa-spinner',          name:'Spinner',        desc:'Loading en botones con estado' },
    ]},
  { id:'utilidades',  icon:'fa-wand-magic-sparkles',  color:'#FFB800', nombre:'Utilidades JS',
    desc:'Funciones listas para auth, storage, fechas, IP y más',
    items:[
      { icon:'fa-shield-halved',    name:'Auth Signal',    desc:'Sistema de sesión reactivo v2.0' },
      { icon:'fa-hard-drive',       name:'LocalStorage',   desc:'Cache con expiración automática' },
      { icon:'fa-globe',            name:'Sistema IP',     desc:'Geolocalización del visitante' },
    ]},
  { id:'modales',     icon:'fa-window-restore',        color:'#7000FF', nombre:'Modales',
    desc:'Sistema completo: básico, formulario, confirmación, wizard',
    items:[
      { icon:'fa-circle-check',     name:'Confirmación',   desc:'Flujos de decisión elegantes' },
      { icon:'fa-list-ol',          name:'Wizard',         desc:'Modales por pasos interactivos' },
      { icon:'fa-images',           name:'Galería',        desc:'Visualizador de imágenes modal' },
    ]},
  { id:'guias',       icon:'fa-book-open',             color:'#29C72E', nombre:'Guías',
    desc:'Aprende a instalar, configurar y dominar Widev paso a paso',
    items:[
      { icon:'fa-download',         name:'Instalación',    desc:'3 comandos y listo para producir' },
      { icon:'fa-route',            name:'Rutas SPA',      desc:'Router sin hash, historia nativa' },
      { icon:'fa-rocket',           name:'Deploy',         desc:'Firebase Hosting + Git tags' },
    ]},
  { id:'acerca',      icon:'fa-circle-info',           color:'#0EBEFF', nombre:'Acerca',
    desc:'Stack técnico, filosofía y el historial de versiones del proyecto',
    items:[
      { icon:'fa-layer-group',      name:'Stack',          desc:'Vite, jQuery, Firebase, CSS Vars' },
      { icon:'fa-lightbulb',        name:'Filosofía',      desc:'Ligero, modular, legible y rápido' },
      { icon:'fa-code-branch',      name:'Versiones',      desc:'Historial de cambios desde v6' },
    ]},
];

const beneficios = [
  { icon:'fa-bolt',        titulo:'Ligero y rápido',       desc:'Sin CSS frameworks. Vite + jQuery + CSS variables puro. El bundle final es mínimo y el HMR es instantáneo.' },
  { icon:'fa-puzzle-piece',titulo:'Modular al 100%',       desc:'Cada página es un módulo independiente con su propio CSS. Importa solo lo que necesitas, cuando lo necesitas.' },
  { icon:'fa-palette',     titulo:'5 temas dinámicos',     desc:'Cielo, Dulce, Paz, Mora y Futuro. Cambia de tema con CSS variables sin recargar ni compilar nada.' },
];

const tareasPreview = [
  { done:true,  txt:'📦 Crear nuevo componente',     color:'#29C72E' },
  { done:true,  txt:'⚡ Configurar wiSmart',          color:'#29C72E' },
  { done:false, txt:'📝 Documentar utilidades',       color:'#0EBEFF' },
  { done:false, txt:'🚀 Deploy a Firebase',           color:'#FF5C69' },
];

const diasPreview = ['Comp', 'Util', 'Mod', 'Guía', 'Acerca'];

// ── PLANTILLAS ────────────────────────────────────────────────
const tplStat = s => `
  <div class="ini_stat">
    <div class="ini_stat_n" data-target="${s.valor}" data-sufijo="${s.sufijo}">0</div>
    <div class="ini_stat_l">${s.label}</div>
  </div>`;

const tplDia = (d, i) => `
  <div class="ini_prev_day${i===0?' active':''}">
    <span class="ini_prev_day_n">${d}</span>
    <div class="ini_prev_dots">
      <span class="ini_dot" style="background:#0EBEFF"></span>
      ${i<3?'<span class="ini_dot" style="background:#29C72E"></span>':''}
      ${i===0?'<span class="ini_dot" style="background:#FF5C69"></span>':''}
    </div>
  </div>`;

const tplTarea = t => `
  <div class="ini_prev_task${t.done?'':' pending'}">
    <i class="fas ${t.done?'fa-circle-check':'fa-circle'}" style="color:${t.done?'#29C72E':t.color}"></i>
    ${t.txt}
  </div>`;

const tplFeature = f => `
  <div class="ini_cat_card" style="--cc:${f.color}">
    <div class="ini_cat_bar"></div>
    <div class="ini_cat_top">
      <div class="ini_cat_ico"><i class="fas ${f.icon}"></i></div>
      <div class="ini_cat_info"><h3>${f.nombre}</h3><p>${f.desc}</p></div>
    </div>
    <ul class="ini_cat_tools">
      ${f.items.map(it=>`
        <li><a href="/${f.id}" class="ini_tool_a">
          <i class="fas ${it.icon}"></i>
          <div><strong>${it.name}</strong><span>${it.desc}</span></div>
          <i class="fas fa-arrow-right ini_ext"></i>
        </a></li>`).join('')}
    </ul>
  </div>`;

const tplBeneficio = (b, i) => `
  <div class="ini_about_card" style="--d:${i*.15}s">
    <div class="ini_card_ico"><i class="fas ${b.icon}"></i></div>
    <h3>${b.titulo}</h3>
    <p>${b.desc}</p>
  </div>`;

// ── RENDER ────────────────────────────────────────────────────
export const render = () => `
<link rel="stylesheet" href="./smiles/web/inicio.css">
<div class="ini_wrap">

  <!-- ===== HERO ===== -->
  <section class="ini_hero">
    <div class="ini_hero_content">

      <div class="ini_saludo" style="--d:0s">
        <span>${Saludar()} </span><span class="ini_wave">👋</span>
      </div>

      <h1 class="ini_titulo" style="--d:.18s">
        Tu framework web <span class="ini_grad">minimalista</span>
      </h1>

      <div class="ini_roles" style="--d:.36s">
        ${roles.map((r,i)=>`<span class="ini_role${i===0?' active':''}">${r}</span>`).join('')}
      </div>

      <p class="ini_sub" style="--d:.54s">
        ${app} es un ecosistema de utilidades JS + sistema de temas + SPA router.
        Todo lo que necesitas para construir apps web rápidas y hermosas sin frameworks pesados.
      </p>

      <div class="ini_stats" id="in_stats" style="--d:.72s">
        ${stats.map(tplStat).join('')}
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
          <span>${app} ${version} 🚀</span>
          <span class="ini_prev_badge"><i class="fas fa-circle"></i> Activo</span>
        </div>
        <div class="ini_prev_cols">
          <div class="ini_prev_left">${diasPreview.map(tplDia).join('')}</div>
          <div class="ini_prev_right">
            <div class="ini_prev_note_title"><i class="fas fa-list-check"></i> Dev tasks</div>
            ${tareasPreview.map(tplTarea).join('')}
            <div class="ini_prev_add"><i class="fas fa-plus"></i> Nueva tarea...</div>
          </div>
        </div>
      </div>
      <div class="ini_ftech ini_ft1" style="--d:.5s"  ${wiTip('Componentes')}><i class="fas fa-cubes"></i></div>
      <div class="ini_ftech ini_ft2" style="--d:.65s" ${wiTip('Utilidades')}><i class="fas fa-wand-magic-sparkles"></i></div>
      <div class="ini_ftech ini_ft3" style="--d:.8s"  ${wiTip('Modales')}><i class="fas fa-window-restore"></i></div>
      <div class="ini_ftech ini_ft4" style="--d:.95s" ${wiTip('Temas')}><i class="fas fa-palette"></i></div>
    </div>
  </section>

  <!-- ===== MÓDULOS ===== -->
  <section class="ini_cats_sec">
    <div class="ini_sec_head">
      <h2 class="ini_sec_tit">Todo lo que <span class="ini_grad">necesitas</span></h2>
      <div class="ini_sec_line"></div>
      <p class="ini_sec_desc">5 secciones documentadas para dominar el framework</p>
    </div>
    <div class="ini_cats_grid">${features.map(tplFeature).join('')}</div>
  </section>

  <!-- ===== ¿POR QUÉ? ===== -->
  <section class="ini_about_sec">
    <div class="ini_sec_head">
      <h2 class="ini_sec_tit">¿Por qué <span class="ini_grad">${app}?</span></h2>
      <div class="ini_sec_line"></div>
    </div>
    <div class="ini_about_grid">${beneficios.map(tplBeneficio).join('')}</div>
  </section>

  <!-- ===== CTA ===== -->
  <section class="ini_cta_sec">
    <div class="ini_cta_wrap">
      <i class="fas fa-rocket ini_cta_ico"></i>
      <h2>¿Listo para construir con ${app}? 🚀</h2>
      <p>Explora la documentación y domina el framework ✨</p>
      <div class="ini_cta_chips">
        ${features.map(f=>`<a href="/${f.id}" class="ini_chip" style="--cc:${f.color}" ${wiTip(f.desc)}><i class="fas ${f.icon}"></i> ${f.nombre}</a>`).join('')}
      </div>
      <p class="ini_cta_autor">Hecho con ❤️ por <a href="${linkme}" target="_blank" rel="noopener">${autor}</a> · ${version} © ${year()}</p>
    </div>
  </section>

</div>`;

// ── INIT ──────────────────────────────────────────────────────
let rolesTimer = null;

export const init = () => {

  // Roles rotantes
  let ri = 0;
  const $r = $('.ini_role');
  rolesTimer = setInterval(() => {
    $r.removeClass('active');
    $r.eq(ri = (ri + 1) % $r.length).addClass('active');
  }, 2800);

  // Stats contador — al entrar en viewport
  wiVista('#in_stats', () => {
    $('.ini_stat_n').each(function() {
      const $n = $(this), obj = +$n.data('target'), suf = $n.data('sufijo') || '';
      let v = 0;
      const t = setInterval(() => {
        v += obj / 50;
        if (v >= obj) { $n.text(obj + suf); clearInterval(t); }
        else $n.text(Math.floor(v));
      }, 28);
    });
  });

  // Scroll animations
  wiVista('.ini_cat_card',   null, { anim:'wi_fadeUp', stagger:80  });
  wiVista('.ini_about_card', null, { anim:'wi_fadeUp', stagger:140 });
  wiVista('.ini_cta_wrap',   null, { anim:'wi_fadeUp' });
  wiVista('.ini_sec_head',   null, { anim:'wi_fadeUp' });

  // Preview interactivo: click en días
  $(document).on('click.inicio', '.ini_prev_day', function() {
    $('.ini_prev_day').removeClass('active');
    $(this).addClass('active');
  });

  console.log(`🚀 ${app} ${version} · Inicio OK`);
};

export const cleanup = () => {
  clearInterval(rolesTimer);
  $(document).off('.inicio');
};