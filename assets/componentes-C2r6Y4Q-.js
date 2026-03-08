import{j as s}from"./vendor-gzd0YkcT.js";import{d as p}from"./main-BdCEMKvu.js";import{wi as r}from"./wicode-BI_jPhqH.js";import{wi as d}from"./wivista-Bqg7XXdT.js";import{wi as n}from"./wispin-CZqpWgRB.js";import{wi as l}from"./wiscroll-CSqzLcE5.js";import{wi as m}from"./wiauth-OOcXgII2.js";import{wi as _}from"./wismart-B92b99vo.js";import{wi as f}from"./saludar-YCivU83h.js";import{wi as h}from"./notificacion-CXcCKqHl.js";import{wi as v}from"./mensaje-DgXGorqN.js";import{wi as $}from"./savels-ORlHiNIZ.js";import{wi as w}from"./getls-sYOphFD_.js";import{wi as u}from"./removels-D1BgRQxt.js";import{wi as g}from"./witip-DnTz-sI1.js";import{wi as C}from"./wiip-D3nLQF5i.js";import{wi as y}from"./widate-BazQAag5.js";import{wi as b}from"./wicopy-Dl7-AYic.js";import{wi as j}from"./wisuma-DVbmajsT.js";const o=[r,d,n,l,m,_,f,h,v,$,w,u,g,C,y,b,j],x=a=>`
  <a href="#cp_${a.id}" class="cp_side_item" data-id="${a.id}" style="--cc:${a.color}">
    <i class="fas ${a.icon}"></i>
    <span>${a.fn.name}</span>
    <span class="cp_side_ver">v${a.fn.v}</span>
  </a>`,S=a=>`
  <section class="cp_card" id="cp_${a.id}" style="--cc:${a.color}" data-nom="${a.nom.toLowerCase()} ${a.id}">
    <div class="cp_card_head">
      <div class="cp_card_ico"><i class="fas ${a.icon}"></i></div>
      <div class="cp_card_info"><h3>${a.fn.name}</h3><span class="cp_badge">v${a.fn.v}</span></div>
      <a href="/${a.id}" class="cp_card_ver">Ver docs <i class="fas fa-arrow-right"></i></a>
    </div>
    <p class="cp_card_desc">${a.desc}</p>
    <div class="cp_demo">${a.demo()}</div>
    <div class="cp_code_wrap">
      <div class="cp_code_head"><span><i class="fas fa-code"></i> Uso rápido</span><span class="cp_lang">JS</span></div>
      <pre><code class="language-js">${a.code}</code></pre>
    </div>
  </section>`,K=()=>`
<div class="cp_wrap">

  <header class="cp_header">
    <div>
      <span class="cp_hero_tag"><i class="fas fa-cube"></i> Componentes UI</span>
      <h1 class="cp_hero_tit">Componentes <span class="cp_grad">listos para usar</span></h1>
      <p class="cp_hero_sub">Demos en vivo. Clic en "Ver docs" para documentación completa.</p>
    </div>
    <div class="cp_hstat">
      <span class="cp_hstat_n">${o.length}</span>
      <span>Componentes</span>
    </div>
  </header>

  <div class="cp_layout">
    <aside class="cp_sidebar">
      <div class="cp_side_title"><i class="fas fa-layer-group"></i> Componentes</div>
      ${o.map(x).join("")}
    </aside>

    <div class="cp_content">
      <div class="cp_search_wrap">
        <i class="fas fa-search cp_search_ico"></i>
        <input id="cp_search" class="cp_search" type="text" placeholder="Buscar componente..." autocomplete="off">
        <span class="cp_search_count">${o.length} componentes</span>
      </div>
      <div class="cp_grid" id="cp_grid">
        ${o.map(S).join("")}
      </div>
      <p class="cp_empty" style="display:none"><i class="fas fa-search"></i> Sin resultados</p>
    </div>
  </div>

</div>`,M=()=>{o.forEach(c=>c.main?.()),window.Prism&&Prism.highlightAll(),s(document).on("click.comp",".cp_side_item",function(c){c.preventDefault(),s(".cp_side_item").removeClass("active"),s(this).addClass("active");const i=s(s(this).attr("href"));i.length&&s("html,body").animate({scrollTop:i.offset().top-80},350)});const a=()=>{const c=s(window).scrollTop()+120;s(".cp_card").each(function(){const i=s(this).offset().top,e=i+s(this).outerHeight();if(c>=i&&c<e){const t=s(this).attr("id")?.replace("cp_","");s(".cp_side_item").removeClass("active"),s(`.cp_side_item[data-id="${t}"]`).addClass("active")}})};s(window).on("scroll.comp",a),a(),s(document).on("input.comp","#cp_search",function(){const c=s(this).val().toLowerCase().trim();let i=0;s(".cp_card").each(function(){const e=!c||s(this).data("nom").includes(c);s(this).toggle(e),e&&i++}),s(".cp_search_count").text(`${i} componente${i!==1?"s":""}`),s(".cp_empty").toggle(i===0)}),p(".cp_card",null,{anim:"wi_fadeUp",stagger:100}),s(".cp_side_item").first().addClass("active")},N=()=>{s(document).off(".comp"),s(window).off(".comp")};export{N as cleanup,M as init,K as render};
