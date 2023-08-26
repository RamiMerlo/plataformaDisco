let nombre, edad
let nombreValido = false
let nombreNuevo
do {
  nombre = prompt("Como te llamas?")
  if (nombre === "") {
    nombre = String(prompt("Debe ingresar un nombre valido."))
  } else if (nombre.length <= 2) {
    nombre = String(prompt("Debe ingresar un nombre mas largo."))
  } else {
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

miH5.textContent = `${nombreNuevo}, te recomendamos estas fechas`
