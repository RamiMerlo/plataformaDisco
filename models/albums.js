const mongoose = require("mongoose")

const Album = new mongoose.Schema({
  titulo: { type: String, required: [true, "el titulo es requerido"] },
  descripcion: {
    type: String,
    required: [true, "la descripcion es requerida"],
    min: 5,
    max: 200,
  },
  anioLanzamiento: {
    type: String,
    required: [true, "la fecha de lanzamiento es requerida"],
    min: 1,
  },
  canciones: [
    {
      titulo: { type: String },
      duracion: { type: String },
      link: { type: String },
    },
  ],
  portada: { type: String },
})

module.exports = mongoose.model("Album", Album)
