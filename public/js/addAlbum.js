let titulo = document.querySelector("#titulo")
let descripcion = document.querySelector("#descripcion")
let fecha = document.querySelector("#fecha")
let portada = document.querySelector("#portadaValue")
let submit = document.querySelector("#submitButton")
let done = false

const newAlbum = async () => {
  try {
    const album = {
      titulo: titulo.value,
      descripcion: descripcion.value,
      fecha: fecha.value,
      portada: portada.value,
    }

    axios.post("/album/agregar", album, {
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
  await newAlbum()
  if (done) {
    window.location.href = "../index.html"
  }
})
