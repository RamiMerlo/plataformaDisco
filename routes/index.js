const express = require("express")
const router = express.Router()
const Usuario = require("../models/users.js")

router.post("/Usuario", async (req, res) => {
  try {
    await Usuario.create(req.body)
    res.status(200).send("Funciono todo bien")
  } catch (error) {
    res.status(500).send("error del servidor")
  }
})

router.get("/Usuario", async (req, res) => {
  try {
    const usuarios = await Usuario.find()
    if (usuarios) {
      res.status(200).send(usuarios)
    } else {
      res.status(200).send("No hay usuarios guardados")
    }
  } catch (error) {
    res.status(500).send("error del servidor")
  }
})

router.delete("/Usuario/:id", async (req, res) => {
  try {
    await Usuario.findByIdAndDelete(req.params.id)
    res.status(204).send("usuario borrado")
  } catch (error) {
    res.status(500).send("error del servidor")
  }
})
module.exports = router
