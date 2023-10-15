const mongoose = require("mongoose")

const Album = new mongoose.Schema({
  titulo: { type: String, required: [true, "el titulo es requerido"] },
  descripcion: {
    type: String,
    required: [true, "la descripcion es requerida"],
    min: 5,
    max: 200,
  },
  fecha: {
    type: String,
    min: 1,
    required: [true, "la fecha es requerida"],
  },
  link: { type: String, required: [true, "el link es requerido"] },
  portada: { type: String, required: [true, "la portada es requerida"] },
})

module.exports = mongoose.model("Album", Album)
