const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/login-Bdmu5qW2.js","assets/vendor-gzd0YkcT.js","assets/firebase-CR2OAwLn.js","assets/main-rt_IoUeW.js","assets/firebase-BEkkiCuJ.js","assets/login-pzxUIRzl.css"])))=>i.map(i=>d[i]);
import{M as o,m as i,t as l,_ as t}from"./main-rt_IoUeW.js";import{j as n}from"./vendor-gzd0YkcT.js";const e=a=>{o("Bienvenido "+a.nombre),n(".nv_right").html(`
    <a href="/milab" class="nv_item" data-page="milab"><i class="fa-solid fa-graduation-cap"></i> <span>Mi Lab</span></a>
    <a href="/smile" class="nv_item" data-page="smile"><i class="fa-solid fa-comments"></i> <span>Mensajes</span></a>
    <a href="/perfil" class="nv_item" data-page="perfil"><img src="${a.imagen||"./smile.avif"}" alt="${a.nombre}"><span>${a.nombre}</span></a>
    <button class="nv_item bt_salir" data-page="inicio"><i class="fa-solid fa-sign-out-alt"></i> <span>salir</span></button>
  `)},m=()=>{};i.on(a=>a?e(a):l.navigate("/"));const s=i.user;s?e(s):m();const c=["wiTema","wiSmart","wiFresh"];n(document).on("click.hdr",".bt_salir",async()=>{const{salir:a}=await t(async()=>{const{salir:r}=await import("./login-Bdmu5qW2.js");return{salir:r}},__vite__mapDeps([0,1,2,3,4,5]));a(c)});t(()=>import("./login-Bdmu5qW2.js"),__vite__mapDeps([0,1,2,3,4,5]));export{e as personal};
