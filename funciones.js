import { navUsuario, usuariosSinR } from "./funcionesNav.js";
const header = document.querySelector(".header");
const navbar = document.createElement("div");

let log = false;
localStorage.setItem("log", log);

function navPag() {
  let log = localStorage.getItem("log");
  let usuario = JSON.parse(localStorage.getItem("userLogged"));
  if (log === "true") {
    if (usuario.rol === "usuario") {
      navbar.innerHTML = navUsuario(usuario);
      header.append(navbar);
      return;
    } /*else {
    }*/
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
