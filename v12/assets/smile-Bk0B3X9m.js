import{j as s}from"./vendor-gzd0YkcT.js";import{auth as _,db as u}from"./firebase-FKEQDC1h.js";import{k as y,q as x,w as M,c as S,f as k,d as b,h as D,l as N}from"./firebase-BOfkfuSs.js";import{N as c,w as q,a as A,S as I,f as d,j as T}from"./main-D5U9dSRd.js";let r=[],m=null,o=null;const C="wi_mensajes_cache",p=()=>T("wiSmile")||{},H=a=>{try{localStorage.setItem(C,JSON.stringify(a))}catch{}},w=()=>{try{return JSON.parse(localStorage.getItem(C)||"[]")}catch{return[]}},V=()=>{const{nombre:a="",usuario:e="",email:t=""}=p(),i=a||e||t||_.currentUser?.email||"";return`
  <div class="smile_container">

    <div class="smile_header">
      <div class="header_info">
        <img src="/logo.webp" alt="${A}" class="header_avatar" />
        <div class="header_text">
          <h1>Mis Mensajes</h1>
          <p>${I()} <strong>${i}</strong></p>
        </div>
      </div>
      <div class="header_status">
        <span class="status_dot"></span>
        <span class="status_text">Cargando...</span>
      </div>
    </div>

    <div class="smile_chat" id="smileChat">
      ${h(w())}
    </div>

    <div class="smile_input">
      <div class="input_wrapper">
        <textarea id="nuevoMensaje"
          placeholder="Escribe un mensaje."
          rows="1" maxlength="500"></textarea>
        <span class="char_count" id="charCount">0/500</span>
      </div>
      <button id="btnEnviar" disabled ${d("Enviar · Enter")}>
        <i class="fas fa-paper-plane"></i>
      </button>
    </div>

    <div class="modal_overlay" id="modalEliminar">
      <div class="modal_content">
        <i class="fas fa-trash-alt"></i>
        <h3>¿Eliminar mensaje?</h3>
        <p>Esta acción no se puede deshacer</p>
        <div class="modal_actions">
          <button class="btn_cancelar" id="btnCancelar">Cancelar</button>
          <button class="btn_confirmar" id="btnConfirmar">Eliminar</button>
        </div>
      </div>
    </div>

  </div>`},z=()=>{const{email:a}=p(),e=a||_.currentUser?.email;if(!e)return c("Inicia sesión primero","error"),window.location.hash="#/auth?mode=login";s(document).on("input.sm","#nuevoMensaje",function(){s("#charCount").text(`${s(this).val().length}/500`),s("#btnEnviar").prop("disabled",!s(this).val().trim()),s(this).css("height","auto").css("height",Math.min(this.scrollHeight,150)+"px")}).on("keydown.sm","#nuevoMensaje",t=>{t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),v(e))}).on("click.sm","#btnEnviar",()=>v(e)).on("click.sm",".msg_item",function(t){if(s(t.target).closest(".btn_delete").length)return;const i=r.find(n=>n.id===s(this).data("id"));i&&(q(i.mensaje,this,'¡Copiado! <i class="fas fa-check-circle"></i>'),s(this).addClass("copied"),setTimeout(()=>s(this).removeClass("copied"),800))}).on("click.sm",".btn_delete",function(t){t.stopPropagation(),o=s(this).data("id"),s("#modalEliminar").addClass("show")}).on("click.sm","#btnCancelar, #modalEliminar",t=>{s(t.target).is("#btnCancelar, #modalEliminar")&&(s("#modalEliminar").removeClass("show"),o=null)}).on("click.sm","#btnConfirmar",J),m=y(x(S(u,"wiMensajes"),M("email","==",e)),{includeMetadataChanges:!1},t=>{r=t.docs.map(i=>({id:i.id,...i.data()})).sort((i,n)=>(n.fecha?.seconds||0)-(i.fecha?.seconds||0)),H(r),s("#smileChat").html(h(r)),g(!0)},t=>{console.error("❌",t),g(!1);const i=w();i.length?(r=i,s("#smileChat").html(h(r)),c("Caché local 📦","warning",2e3)):s("#smileChat").html(E("fa-wifi-slash","Sin conexión","Verifica tu internet"))})},v=async a=>{const e=s("#nuevoMensaje"),t=e.val().trim();if(!t)return;const{usuario:i="",nombre:n=""}=p(),f=`m${Date.now()}`,$=s("#btnEnviar").prop("disabled",!0).html('<i class="fas fa-spinner fa-pulse"></i>');try{await k(b(u,"wiMensajes",f),{id:f,mensaje:t,email:a,usuario:n||i||a,fecha:D()}),e.val("").css("height","auto").trigger("focus"),s("#charCount").text("0/500")}catch(j){console.error("❌",j),c("Error al guardar","error")}finally{$.prop("disabled",!1).html('<i class="fas fa-paper-plane"></i>')}},J=async()=>{if(!o)return;const a=o;o=null,s("#modalEliminar").removeClass("show"),s(`.msg_item[data-id="${a}"]`).addClass("deleting");try{await N(b(u,"wiMensajes",a)),c("Mensaje eliminado 🗑️","success",1500)}catch(e){console.error("❌",e),s(`.msg_item[data-id="${a}"]`).removeClass("deleting"),c("Error al eliminar","error")}},g=a=>{s(".status_dot").toggleClass("active",a).toggleClass("error",!a),s(".status_text").text(a?"En vivo":"Desconectado")},h=a=>a?.length?a.map(e=>`
    <div class="msg_item" data-id="${e.id}" ${d("Click para copiar")}>
      <div class="msg_content">
        <p class="msg_texto">${L(e.mensaje).replace(/\n/g,"<br>")}</p>
        <div class="msg_footer">
          <span class="msg_fecha">${O(e.fecha)}</span>
          <i class="fas fa-check-double msg_check"></i>
        </div>
      </div>
      <button class="btn_delete" data-id="${e.id}" ${d("Eliminar")}>
        <i class="fas fa-trash"></i>
      </button>
    </div>`).join(""):E("fa-comment-dots","Sin mensajes aún","Escribe tu primer mensaje 👇"),E=(a,e,t)=>`
  <div class="chat_empty">
    <i class="fas ${a}"></i>
    <p>${e}</p><span>${t}</span>
  </div>`,L=a=>String(a||"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[e]),O=a=>{if(!a)return"Ahora";const e=a.toDate?.()||new Date((a.seconds||0)*1e3),t=Date.now()-e,i=~~(t/6e4),n=~~(t/36e5),l=~~(t/864e5);return i<1?"Ahora":i<60?`${i}m`:n<24?`${n}h`:l<7?`${l}d`:e.toLocaleDateString("es",{day:"2-digit",month:"short"})},B=()=>{m?.(),s(document).off(".sm"),[r,m,o]=[[],null,null]};export{B as cleanup,z as init,V as render};
