let nombre = document.querySelector("#signUpName")
let apellido = document.querySelector("#Apellido")
let correo = document.querySelector("#email")
let contrasenia = document.querySelector("#password")
let foto = document.querySelector("#profileImage")
let submit = document.querySelector("#submitted")
let done = false

const newUser = async () => {
  try {
    const usuario = {
      nombre: nombre.value,
      apellido: apellido.value,
      email: email.value,
      contrasenia: contrasenia.value,
      foto: foto.value,
    }

    axios.post("/Usuario", usuario, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    done = true
  } catch (error) {
    console.log(error)
  }
}

submit.addEventListener("click", async () => {
  await newUser()
  if (done) {
    window.location.href = "../html/logIn.html"
  }
})
