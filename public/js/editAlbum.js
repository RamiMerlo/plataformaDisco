let titulo = document.querySelector("#titulo")
let descripcion = document.querySelector("#descripcion")
let fecha = document.querySelector("#fecha")
let enlace = document.querySelector("#enlace")
let portada = document.querySelector("#portadaValue")
let submit = document.querySelector("#submitButton")
let done = false

const idGuardado = localStorage.getItem("albumId")

const idBack = JSON.parse(idGuardado)

const newAlbum = async () => {
  if (
    titulo.value != "" &&
    descripcion.value != "" &&
    fecha.value != "" &&
    enlace.value != "" &&
    portada.value != ""
  ) {
    try {
      const album = {
        titulo: titulo.value,
        descripcion: descripcion.value,
        fecha: fecha.value,
        link: enlace.value,
        portada: portada.value,
      }

      axios.put(`/album/${idBack}`, album, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      done = true
    } catch (error) {
      console.log(error)
      done == false
    }
  } else {
    if (titulo.value == "") {
      titulo.classList.add("emptyLine")
    } else {
      titulo.classList.toggle("emptyLine")
    }
    if (descripcion.value == "") {
      descripcion.classList.add("emptyLine")
    } else {
      descripcion.classList.toggle("emptyLine")
    }
    if (fecha.value == "") {
      fecha.classList.add("emptyLine")
    } else {
      fecha.classList.toggle("emptyLine")
    }
    if (enlace.value == "") {
      enlace.classList.add("emptyLine")
    } else {
      enlace.classList.toggle("emptyLine")
    }
    if (portada.value == "") {
      portada.classList.add("emptyLine")
    } else {
      portada.classList.toggle("emptyLine")
    }
    alert(
      "los campos marcados en rojo deben completarse antes de mandar el album"
    )
  }
}

submit.addEventListener("click", async () => {
  await newAlbum()
  if (done == true) {
    window.location.href = "../index.html"
  }
})
