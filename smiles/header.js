import $ from 'jquery';
import { rutas } from './rutas/ruta.js';
import { getls, removels, Mensaje, wiAuth } from './widev.js';
import { auth, signOut } from './auth/wiauth.js';

// VISTA PERSONAL_________________________________
export const personal = wi => {
  Mensaje('Bienvenido ' + wi.nombre);
  $('.nv_right').html(`
    <a href="/milab" class="nv_item" data-page="milab"><i class="fa-solid fa-graduation-cap"></i> <span>Mi Lab</span></a>
    <a href="/smile" class="nv_item" data-page="smile"><i class="fa-solid fa-comments"></i> <span>Mensajes</span></a>
    <a href="/perfil" class="nv_item" data-page="perfil"><img src="${wi.imagen || './smile.avif'}" alt="${wi.nombre}"><span>${wi.nombre}</span></a>
    <button class="nv_item bt_salir" data-page="inicio"><i class="fa-solid fa-sign-out-alt"></i> <span>salir</span></button>
  `);
};

// VISTA PUBLICA_________________________________
const publico = () => {
  $('.nv_right').html('');
};

// MI AUTH_________________________________
wiAuth.on(wi => wi ? personal(wi) : (publico(), rutas.navigate('/')));
const wi = wiAuth.user; wi ? personal(wi) : publico();

// SALIR_________________________________
const KEEP_KEYS = ['wiTema', 'wiSmart', 'wiFresh'];
$(document).on('click.hdr', '.bt_salir', async () => {
  try { await signOut(auth); } catch(e) { console.error('signOut:', e); }
  wiAuth.logout(KEEP_KEYS);
});