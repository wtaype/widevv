import{j as o}from"./vendor-gzd0YkcT.js";import{o as d,w as t,k as n}from"./main-BdCEMKvu.js";const i="#0EA5E9",c={id:"wiip",fn:d,nom:"Sistema de IP",icon:"fa-globe",color:i,desc:"Obtiene la IP y datos geograficos del usuario. Cache con localStorage para evitar llamadas extras.",code:`const ip = await wiIp();
console.log(ip.query); // '190.x.x.x'

const geo = await wiIp(true); // con geolocation`,demo:()=>`<div class="cp_demo_row">
    <div class="wip_chip"><i class="fas fa-globe"></i> IP + GeoData bajo demanda</div>
  </div>`,main:()=>{}},e=[{id:"basico",titulo:"Obtener IP",desc:"Sin argumentos devuelve la IP publica del usuario. El resultado se cachea en localStorage 1 hora.",html:"",js:`import { wiIp } from './widev.js';

const data = await wiIp();
console.log(data.query);   // IP: '190.123.45.67'
console.log(data.country); // 'Peru'
console.log(data.city);    // 'Lima'`,demo:()=>`<div class="wip_demo">
      <div class="wip_row"><code>data.query</code> → IP publica</div>
      <div class="wip_row"><code>data.country</code> → pais</div>
      <div class="wip_row"><code>data.city</code> → ciudad</div>
    </div>`},{id:"geolocalizacion",titulo:"Con geolocalizacion",desc:"Pasa true para obtener los datos geograficos completos: pais, ciudad, latitud, longitud, zona horaria, etc.",html:"",js:`import { wiIp } from './widev.js';

const geo = await wiIp(true);

console.log(geo.country);  // 'Peru'
console.log(geo.city);     // 'Lima'
console.log(geo.lat);      // -12.046374
console.log(geo.lon);      // -77.042793
console.log(geo.timezone); // 'America/Lima'`,demo:()=>`<div class="wip_demo">
      <div class="wip_row"><code>geo.lat / geo.lon</code> → coordenadas</div>
      <div class="wip_row"><code>geo.timezone</code> → zona horaria</div>
      <div class="wip_row"><code>geo.isp</code> → proveedor internet</div>
    </div>`},{id:"cache",titulo:"Cache automatico",desc:"wiIp cachea el resultado en localStorage. La segunda llamada es instantanea sin costo de red.",html:"",js:`import { wiIp } from './widev.js';

// Primera vez: llama a la API (1 request)
const ip1 = await wiIp();

// Segunda vez: desde cache (0 requests)
const ip2 = await wiIp();

// ip1.query === ip2.query → true`,demo:()=>`<div class="wip_demo">
      <div class="wip_row"><i class="fas fa-wifi" style="color:#0EA5E9"></i> Primera vez: 1 request HTTP</div>
      <div class="wip_row"><i class="fas fa-bolt" style="color:#F59E0B"></i> Siguiente vez: desde cache</div>
    </div>`}],r=(a,s,l)=>`
  <div class="doc_code_blk">
    <div class="doc_code_lbl"><span class="doc_code_tag doc_tag_${a}">${a.toUpperCase()}</span></div>
    <pre id="${s}"><code class="language-${a}">${l}</code></pre>
    <button class="doc_copy" data-pre="${s}" title="Copiar ${a.toUpperCase()}"><i class="fas fa-copy"></i></button>
  </div>`,p=a=>`
  <section class="doc_sec" id="${a.id}">
    <h2 class="doc_h2">${a.titulo}</h2>
    <p class="doc_p">${a.desc}</p>
    <div class="doc_tabs">${r("js",`dp_j_${a.id}`,a.js)}</div>
    <div class="doc_demo">
      <div class="doc_demo_res"><i class="fas fa-eye"></i> Resultado</div>
      ${a.demo()}
    </div>
  </section>`,m=()=>`
<div class="doc_wrap">
  <aside class="doc_side">
    <div class="doc_side_hd"><i class="fas fa-globe" style="color:${i}"></i><span>wiIp</span><span class="cp_badge">v${d.v}</span></div>
    <div class="doc_side_info"><p class="doc_side_tit">${c.nom}</p><p class="doc_side_desc">${c.desc}</p></div>
    <nav class="doc_nav">${e.map((a,s)=>`<a href="#${a.id}" class="doc_nav_a"><span class="doc_nav_num">${s+1}</span>${a.titulo}</a>`).join("")}</nav>
  </aside>
  <main class="doc_main">
    <div class="doc_hero">
      <h1><i class="fas fa-globe" style="color:${i}"></i> wiIp</h1>
      <p>Obtiene la IP publica y datos geograficos del usuario. Cache automatico en <code>localStorage</code> para evitar requests innecesarios.</p>
      <div class="doc_badges">
        <span class="doc_bdg"><i class="fas fa-map-marker-alt"></i> Geolocalizacion</span>
        <span class="doc_bdg"><i class="fas fa-database"></i> Cache auto</span>
        <span class="doc_bdg"><i class="fas fa-bolt"></i> Async/await</span>
      </div>
    </div>
    ${e.map(p).join("")}
  </main>
</div>`,u=()=>{window.Prism&&Prism.highlightAll(),o(document).on("click.wip",".doc_nav_a",function(a){a.preventDefault();const s=o(o(this).attr("href"));s.length&&o("html,body").animate({scrollTop:s.offset().top-80},300),o(".doc_nav_a").removeClass("active"),o(this).addClass("active")}).on("click.wip",".doc_copy",function(){t(o(`#${o(this).data("pre")}`).text(),this,"¡Copiado!")}),n(e.map(a=>a.id),".doc_nav_a")},w=()=>o(document).off(".wip");export{w as cleanup,u as init,m as render,c as wi};
