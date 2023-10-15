const express = require("express")
const router = express.Router()
const Usuario = require("../models/users.js")
const Album = require("../models/albums.js")
const app = express()

app.use("/health", (req, res) => res.sendStatus(200))

router.post("/Usuario", async (req, res) => {
  try {
    await Usuario.create(req.body)
    res.status(200).send("Funciono todo bien")
  } catch (error) {
    res.status(500).send("error del servidor")
  }
})

router.get("/Usuario/todos", async (req, res) => {
  try {
    const usuarios = await Usuario.find()
    if (usuarios.length) {
      res.status(200).send({ Usuarios: usuarios })
    } else {
      res.status(200).send("No hay usuarios guardados")
    }
  } catch (error) {
    res.status(500).send("Error del servidor")
  }
})

router.delete("/Usuario/:id", async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndDelete(req.params.id)
    res.status(204).send()
  } catch (error) {
    res.status(500).send("Error del servidor")
  }
})
//
//
//
//
//
router.post("/album/agregar", async (req, res) => {
  try {
    let album = await Album.create(req.body)
    res.status(200).send(album)
  } catch (error) {
    res.status(500).send({ "error al agregar un album": error })
  }
})

// Una ruta para editar un album.
router.put("/album/:id", async (req, res) => {
  try {
    const album = await Album.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    res.status(200).send(album)
  } catch (error) {
    res.status(500).send({ "error al agregar un album": error })
  }
})

// Una ruta para agregar una canción del album.
router.put("/song/:idAlbum", async (req, res) => {
  try {
    let album = await Album.findById(req.params.idAlbum)
    album.canciones.push(req.body)
    await Album.findByIdAndUpdate(req.params.idAlbum, album, {
      new: true,
    })
    res.status(200).send(album)
  } catch (error) {
    res.status(500).send({ "error solicitar todos los albums": error })
  }
})

// Una ruta para eliminar una canción del album.
router.put("/song/delete/:idAlbum", async (req, res) => {
  let idSong = req.query.idSong
  try {
    let album = await Album.findById(req.params.idAlbum)
    let albumActualizado = album.canciones.filter(
      (cancion) => cancion._id != idSong
    )
    album.canciones = albumActualizado
    await Album.findByIdAndUpdate(req.params.idAlbum, album, {
      new: true,
    })
    res.status(200).send({ mensaje: "Cancion eliminada correctamente" })
  } catch (error) {
    res.status(500).send(error)
  }
})

// Una ruta que devuelva todos los albums.
router.get("/album/todos", async (req, res) => {
  try {
    let albums = await Album.find()
    res.status(200).send(albums)
  } catch (error) {
    res.status(500).send({ "error solicitar todos los albums": error })
  }
})

// Una ruta que devuelva la información de un album especifíco.
router.get("/album/:id", async (req, res) => {
  try {
    let album = await Album.findById(req.params.id)
    res.status(200).send(album)
  } catch (error) {
    res.status(500).send({ "error solicitar todos los albums": error })
  }
})

// Una ruta para eliminar un album.
router.delete("/album/:idAlbum", async (req, res) => {
  try {
    await Album.findByIdAndDelete(req.params.idAlbum)
    res.status(200).send("Album eliminado correctamente")
  } catch (error) {
    res.status(500).send({ "error al eliminar el album": error })
  }
})
module.exports = router
