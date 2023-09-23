const mongoose = require("mongoose")
const Usuario = new mongoose.Schema({
  nombre: { type: String },
  apellido: { type: String },
  email: { type: String },
  contrasenia: { type: String },
  foto: { type: String },
})

module.exports = mongoose.model("Usuario", Usuario)
