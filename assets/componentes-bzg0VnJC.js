import{j as s}from"./vendor-gzd0YkcT.js";import{d as p}from"./main-B9pTXPbR.js";import{wi as r}from"./wicode-BpuX-fer.js";import{wi as d}from"./wivista-BiDMZI52.js";import{wi as n}from"./wispin-u5MVvuuo.js";import{wi as l}from"./wiscroll-BVKwoqK8.js";import{wi as m}from"./wiauth-BpgwwME9.js";import{wi as _}from"./wismart-B4M6_yFi.js";import{wi as f}from"./saludar-Am5tV6gp.js";import{wi as h}from"./notificacion-KmA9zJkv.js";import{wi as v}from"./mensaje-CoPkxt22.js";import{wi as $}from"./savels-CaC5YOO7.js";import{wi as w}from"./getls-Ccisa6Co.js";import{wi as u}from"./removels-L6SaHAWC.js";import{wi as g}from"./witip-C1fbUCyY.js";import{wi as C}from"./wiip-C_aNG9qI.js";import{wi as y}from"./widate-DvG3MAUX.js";import{wi as b}from"./wicopy-si1Ja63X.js";import{wi as j}from"./wisuma-6SWbSTwf.js";const o=[r,d,n,l,m,_,f,h,v,$,w,u,g,C,y,b,j],x=i=>`
  <a href="#cp_${i.id}" class="cp_side_item" data-id="${i.id}" style="--cc:${i.color}">
    <i class="fas ${i.icon}"></i>
    <span>${i.nom}</span>
    <span class="cp_side_ver">v${i.fn.v}</span>
  </a>`,S=i=>`
  <section class="cp_card" id="cp_${i.id}" style="--cc:${i.color}" data-nom="${i.nom.toLowerCase()} ${i.id}">
    <div class="cp_card_head">
      <div class="cp_card_ico"><i class="fas ${i.icon}"></i></div>
      <div class="cp_card_info"><h3>${i.nom}</h3><span class="cp_badge">v${i.fn.v}</span></div>
      <a href="/${i.id}" class="cp_card_ver">Ver docs <i class="fas fa-arrow-right"></i></a>
    </div>
    <p class="cp_card_desc">${i.desc}</p>
    <div class="cp_demo">${i.demo()}</div>
    <div class="cp_code_wrap">
      <div class="cp_code_head"><span><i class="fas fa-code"></i> Uso rápido</span><span class="cp_lang">JS</span></div>
      <pre><code class="language-js">${i.code}</code></pre>
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

</div>`,M=()=>{o.forEach(c=>c.main?.()),window.Prism&&Prism.highlightAll(),s(document).on("click.comp",".cp_side_item",function(c){c.preventDefault(),s(".cp_side_item").removeClass("active"),s(this).addClass("active");const a=s(s(this).attr("href"));a.length&&s("html,body").animate({scrollTop:a.offset().top-80},350)});const i=()=>{const c=s(window).scrollTop()+120;s(".cp_card").each(function(){const a=s(this).offset().top,e=a+s(this).outerHeight();if(c>=a&&c<e){const t=s(this).attr("id")?.replace("cp_","");s(".cp_side_item").removeClass("active"),s(`.cp_side_item[data-id="${t}"]`).addClass("active")}})};s(window).on("scroll.comp",i),i(),s(document).on("input.comp","#cp_search",function(){const c=s(this).val().toLowerCase().trim();let a=0;s(".cp_card").each(function(){const e=!c||s(this).data("nom").includes(c);s(this).toggle(e),e&&a++}),s(".cp_search_count").text(`${a} componente${a!==1?"s":""}`),s(".cp_empty").toggle(a===0)}),p(".cp_card",null,{anim:"wi_fadeUp",stagger:100}),s(".cp_side_item").first().addClass("active")},N=()=>{s(document).off(".comp"),s(window).off(".comp")};export{N as cleanup,M as init,K as render};
