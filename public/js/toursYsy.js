const usuarioGuardado = localStorage.getItem("usuario")
const usuarioObject = JSON.parse(usuarioGuardado)

let nombre = usuarioObject.nombre
let nombreValido = false
let nombreNuevo
let edadValida = false

const botones = document.querySelectorAll(".conteinerFecha")
const textoBoton = document.querySelectorAll(".fecha")

let edadUsuario = parseInt(prompt("Ingrese su edad."))

if (edadUsuario < 18) {
  swal(
    "¡Vaya! Parece que eres menor de edad",
    "No podrás adquirir estos tickets.",
    "info"
  )
  for (let i = 0; i < botones.length; i++) {
    botones[i].setAttribute("disabled", "disabled")
    textoBoton[i].textContent = "❌"
  }
} else {
  edadValida = true
}

let miH5 = document.querySelector("#sugerenciaTicket")

miH5.textContent = `${nombre}, te recomendamos estas fechas`

let tickets = {
  CDMX: 3,
  Barcelona: 1,
  Valencia: 5,
}

function getTickets(place) {
  disableSoldOutButtons(tickets)
  if (tickets[place] > 0 && edadValida == true) {
    swal("Sold!", `You have tickets to the ${place} concert`, "success")
    tickets[place]--
    if (tickets[place] == 0) {
      disableSoldOutButtons(place)
    }
  } else if (edadValida == false) {
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
