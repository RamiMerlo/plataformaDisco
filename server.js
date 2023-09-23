const express = require("express")
const app = express()
const mongoose = require("mongoose")
const path = require("path")
const url =
  "mongodb+srv://ramimerlo31:Legolass3110@ramimerlo.ekatfox.mongodb.net/?retryWrites=true&w=majority"
const routes = require("./routes/index")

app.use(express.json())
app.use("/", routes)
app.use(express.static(path.join(__dirname, "public")))

const connectMongo = async () => {
  try {
    await mongoose.connect(url)
    app.listen(3000, () => {
      console.log("escuchando en el puerto 3000 y la base de datos conectada")
    })
  } catch (error) {
    console.log(error)
  }
}

connectMongo()
