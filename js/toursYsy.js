let nombre
let nombreValido = false
let nombreNuevo

let edad = prompt("Cuantos años tenes?")

while (nombre == null) {
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
}
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

let tickets = {
  CDMX: 3,
  Barcelona: 1,
  Valencia: 5,
}

function getTickets(place) {
  disableSoldOutButtons(tickets)
  if (tickets[place] > 0) {
    swal("Sold!", `You have tickets to the ${place} concert`, "success")
    tickets[place]--
    if (tickets[place] == 0) {
      disableSoldOutButtons(place)
    }
  } else {
    swal(
      "Oh no!",
      `You are outta luck!, there are no more tickets for ${place}`,
      "info"
    )
  }
}

function disableSoldOutButtons(tickets) {
  for (const ciudad in tickets) {
    if (tickets[ciudad] == 0) {
      let boton = document.querySelector(`#${ciudad}`)
      boton.textContent = "Sold Out"
    }
  }
}
