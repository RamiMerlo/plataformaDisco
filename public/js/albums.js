import { onLoad } from "../utils/utils.js"
import { logOut } from "../utils/utils.js"

const redirect = (id) => {
  window.location.href = `../Album/Album.html?album=${id}`
}

const divAlbums = document.querySelector(".albums")

const renderAlbums = (album) => {
  const div = document.createElement("div")
  const imgAlbum = document.createElement("img")
  const iconTrash = document.createElement("i")
  console.log(album)
  div.classList.add("albums-individual")
  let urlPortada = album.portada
    ? album.portada
    : "https://imgur.com/0uSALUr.png"
  imgAlbum.setAttribute("src", urlPortada)
  iconTrash.classList.add("fas")
  iconTrash.classList.add("fa-trash-alt")
  iconTrash.classList.add("trash")

  // agregamos un addEvenListener
  imgAlbum.addEventListener("click", () => {
    redirect(album._id)
  })
  div.appendChild(imgAlbum)
  div.appendChild(iconTrash)
  divAlbums.appendChild(div)
}

const getAlbums = async () => {
  try {
    const response = await axios.get("../album/todos")
    response.data.map((album) => {
      renderAlbums(album)
    })
    const trash = document.querySelectorAll("i")
    for (let i = 0; i < trash.length; i++) {
      trash[i].addEventListener("click", () => {
        deleteAlbum(response.data[i]._id)
      })
    }
  } catch (error) {
    console.log(error)
  }
}

getAlbums()

const deleteAlbum = async (album) => {
  try {
    await axios.delete(`../../album/${album}`)
    swal({
      title: "Album eliminado correctamente",
      icon: "success",
    })
    const albums = document.querySelectorAll(".albums-individual")
    albums.forEach((album) => album.remove())
    const response = await axios.get("../../album/todos")
    response.data.map((album) => {
      renderAlbums(album)
    })
  } catch (error) {
    console.log(error.message)
  }
}
