let nav = document.querySelector("#nav")
let navImg = document.querySelector("#navImage")
let items = document.querySelectorAll(".navItems")
let usuarioFront = document.querySelector("#nickName")

// const express = require("express")
// const app = express()
// const mongoose = require("mongoose")
// const url =
//   "mongodb+srv://ramimerlo31:Legolass3110@ramimerlo.ekatfox.mongodb.net/?retryWrites=true&w=majority"
// const routes = require("./routes/index")

// app.use(express.json())
// app.use("/", routes)

// const connectMongo = async () => {
//   try {
//     await mongoose.connect(url)
//     app.listen(3000, () => {
//       console.log("escuchando en el puerto 3000 y la base de datos conectada")
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }

// connectMongo()
navImg.addEventListener("click", () => {
  nav.classList.toggle("nav-opacity")
  items.forEach((item) => {
    item.classList.toggle("nav-items-toggled")
  })
})
