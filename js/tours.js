let nombre,
  edad = ""
let nombreValido = false
let nombreNuevo
do {
  if (nombreValido == false) {
    nombre = prompt("Como te llamas?")
    console.log(nombre)
  }
  if (nombre === "") {
    nombre = String(prompt("Debe ingresar un nombre valido."))
  } else if (nombre.length <= 2) {
    nombre = String(prompt("Debe ingresar un nombre mas largo."))
  }
  if (nombre.length > 2 && nombre != "") {
    nombreValido = true
  }
} while (nombreValido == false)
let miH5 = document.querySelector("#sugerenciaTicket")

if (nombreValido == true) {
  const primeraLetra = nombre.charAt(0)
  const restoDelNombre = nombre.slice(1)

  nombreNuevo = String(
    primeraLetra.toUpperCase() + restoDelNombre.toLowerCase()
  )
}

swal(`Entendido, ${nombreNuevo}`, "", "success")
miH5.textContent = `${nombreNuevo}, te recomendamos estas fechas`
