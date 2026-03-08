import{j as s}from"./vendor-gzd0YkcT.js";import{e as p}from"./main-a-wQmWB4.js";import{wi as d}from"./wicode-djWkY9zT.js";const e=[d],n=c=>`
  <a href="#cp_${c.id}" class="cp_side_item" data-id="${c.id}" style="--cc:${c.color}">
    <i class="fas ${c.icon}"></i>
    <span>${c.nom}</span>
    <span class="cp_side_ver">v${c.fn.v}</span>
  </a>`,l=c=>`
  <section class="cp_card" id="cp_${c.id}" style="--cc:${c.color}" data-nom="${c.nom.toLowerCase()} ${c.id}">
    <div class="cp_card_head">
      <div class="cp_card_ico"><i class="fas ${c.icon}"></i></div>
      <div class="cp_card_info"><h3>${c.nom}</h3><span class="cp_badge">v${c.fn.v}</span></div>
      <a href="/${c.id}" class="cp_card_ver">Ver docs <i class="fas fa-arrow-right"></i></a>
    </div>
    <p class="cp_card_desc">${c.desc}</p>
    <div class="cp_demo">${c.demo()}</div>
    <div class="cp_code_wrap">
      <div class="cp_code_head"><span><i class="fas fa-code"></i> Uso rápido</span><span class="cp_lang">JS</span></div>
      <pre><code class="language-js">${c.code}</code></pre>
    </div>
  </section>`,h=()=>`
<div class="cp_wrap">

  <header class="cp_header">
    <div>
      <span class="cp_hero_tag"><i class="fas fa-cube"></i> Componentes UI</span>
      <h1 class="cp_hero_tit">Componentes <span class="cp_grad">listos para usar</span></h1>
      <p class="cp_hero_sub">Demos en vivo. Clic en "Ver docs" para documentación completa.</p>
    </div>
    <div class="cp_hstat">
      <span class="cp_hstat_n">${e.length}</span>
      <span>Componentes</span>
    </div>
  </header>

  <div class="cp_layout">
    <aside class="cp_sidebar">
      <div class="cp_side_title"><i class="fas fa-layer-group"></i> Componentes</div>
      ${e.map(n).join("")}
    </aside>

    <div class="cp_content">
      <div class="cp_search_wrap">
        <i class="fas fa-search cp_search_ico"></i>
        <input id="cp_search" class="cp_search" type="text" placeholder="Buscar componente..." autocomplete="off">
        <span class="cp_search_count">${e.length} componentes</span>
      </div>
      <div class="cp_grid" id="cp_grid">
        ${e.map(l).join("")}
      </div>
      <p class="cp_empty" style="display:none"><i class="fas fa-search"></i> Sin resultados</p>
    </div>
  </div>

</div>`,v=()=>{e.forEach(i=>i.main?.()),window.Prism&&Prism.highlightAll(),s(document).on("click.comp",".cp_side_item",function(i){i.preventDefault(),s(".cp_side_item").removeClass("active"),s(this).addClass("active");const a=s(s(this).attr("href"));a.length&&s("html,body").animate({scrollTop:a.offset().top-80},350)});const c=()=>{const i=s(window).scrollTop()+120;s(".cp_card").each(function(){const a=s(this).offset().top,o=a+s(this).outerHeight();if(i>=a&&i<o){const t=s(this).attr("id")?.replace("cp_","");s(".cp_side_item").removeClass("active"),s(`.cp_side_item[data-id="${t}"]`).addClass("active")}})};s(window).on("scroll.comp",c),c(),s(document).on("input.comp","#cp_search",function(){const i=s(this).val().toLowerCase().trim();let a=0;s(".cp_card").each(function(){const o=!i||s(this).data("nom").includes(i);s(this).toggle(o),o&&a++}),s(".cp_search_count").text(`${a} componente${a!==1?"s":""}`),s(".cp_empty").toggle(a===0)}),p(".cp_card",null,{anim:"wi_fadeUp",stagger:100}),s(".cp_side_item").first().addClass("active")},f=()=>{s(document).off(".comp"),s(window).off(".comp")};export{f as cleanup,v as init,h as render};
