let nav = document.querySelector("#nav")
let navImg = document.querySelector("#navImage")
let items = document.querySelectorAll(".navItems")
let usuarioFront = document.querySelector("#nickName")

navImg.addEventListener("click", () => {
  nav.classList.toggle("nav-opacity")
  items.forEach((item) => {
    item.classList.toggle("nav-items-toggled")
  })
})
