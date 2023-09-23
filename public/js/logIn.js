let submit = document.querySelector("#submitaaea")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let valorEmail, valorPassword

const mongoose = require("mongoose")
mongoose.connect(
  "mongodb+srv://ramimerlo31:Legolass3110@ramimerlo.ekatfox.mongodb.net/?retryWrites=true&w=majority"
)
const Usuario = mongoose.model("Usuario", {
  nombre: String,
  apellido: String,
  email: String,
  contrasenia: String,
  foto: String,
})

for (const key in Usuario) {
  console.log(key)
}

submit.addEventListener("click", async () => {
  let valorEmail = email.value
  let valorPassword = password.value
  console.log(valorPassword, valorEmail)
})
