import { navUsuario, usuariosSinR, navAdm } from "./funcionesNav.js";
const header = document.querySelector(".header");
const navbar = document.createElement("div");

let log = false;
localStorage.setItem("log", log);

/*const checkUser=(log,usuariosSinR,navUsuario)=>{
  if(log){
    navbar.innerHTML=navUsuario(usuario)
    header.append(navbar)
  }else{
    navbar.innerHTML=usuariosSinR(usuario)
  }
}*/

function navPag() {
  let log = localStorage.getItem("log");
  let usuario = JSON.parse(localStorage.getItem("userLogged"));
  if (log === "true") {
    if (usuario.rol === "usuario") {
      navbar.innerHTML = navUsuario(usuario);
      header.append(navbar);
      return;
    } else {
      navbar.innerHTML = navAdm("usuario");
      header.append(navbar);
    }
  } else {
    navbar.innerHTML = usuariosSinR(usuario);
    console.log(navbar);
    header.append(navbar);
    return;
  }
}

navPag();
/*
bygbyg.addEvenListenner((e){
localStorage.setItem("log", "false")
})*/
