let nav = document.querySelector("#nav")
let navImg = document.querySelector("#navImage")
let items = document.querySelectorAll(".navItems")
let usuarioFront = document.querySelector("#nickName")
let fotoFront = document.querySelector("#fotoUser")

const usuarioGuardado = localStorage.getItem("usuario")

const usuarioObject = JSON.parse(usuarioGuardado)

usuarioFront.textContent = usuarioObject.nombre

let fotoBack = usuarioObject.foto
  ? usuarioObject.foto
  : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQGwyEeerP0CsqiGF0IPDbD_RATUfhv4aI3F2gpPbPfwzSeE-Jd"

fotoFront.setAttribute("src", fotoBack)

navImg.addEventListener("click", () => {
  nav.classList.toggle("nav-opacity")
  items.forEach((item) => {
    item.classList.toggle("nav-items-toggled")
  })
})
