import { onLoad } from "../utils/utils.js"
import { logOut } from "../utils/utils.js"

const divAlbums = document.querySelector(".albums")

const renderAlbums = (album) => {
  const div = document.createElement("div")
  const imgAlbum = document.createElement("img")
  const iconTrash = document.createElement("img")
  const listDiv = document.createElement("div")
  const addSongIcon = document.createElement("img")
  console.log(album)
  div.classList.add("albums-individual")
  let urlPortada = album.portada
    ? album.portada
    : "https://imgur.com/0uSALUr.png"
  imgAlbum.setAttribute("src", urlPortada)
  iconTrash.setAttribute("src", "../images/trashy.png")
  addSongIcon.setAttribute(
    "src",
    "https://cdn.discordapp.com/attachments/672939400799453215/1161386687147016374/imagen_2023-10-10_163549874-removebg-preview.png?ex=65381ca3&is=6525a7a3&hm=0a25bb9365a3617d138950280881eca9dc033aeb6fc9fcdb9df3a6afe46a13ef&"
  )
  addSongIcon.classList.add("addCustom")
  iconTrash.classList.add("trashCustom")
  listDiv.classList.add("listDiv")
  div.appendChild(imgAlbum)
  div.appendChild(iconTrash)
  div.appendChild(listDiv)
  listDiv.appendChild(addSongIcon)
  divAlbums.appendChild(div)

  if (album["canciones"].length != 0) {
    renderSongs(album, listDiv)
  }
}

const getAlbums = async () => {
  try {
    const response = await axios.get("../album/todos")
    response.data.map((album) => {
      renderAlbums(album)
    })
    const trash = document.querySelectorAll(".trashCustom")
    for (let i = 0; i < trash.length; i++) {
      trash[i].addEventListener("click", () => {
        deleteAlbum(response.data[i]._id)
        location.reload()
      })
    }
  } catch (error) {
    console.log(error)
  }
}

getAlbums()

const deleteAlbum = async (album) => {
  try {
    await axios.delete(`/album/${album}`)
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

const renderSongs = (album, listDiv) => {
  for (let index = 0; index < album.canciones.length; index++) {
    const songList = document.createElement("p")
    songList.classList.add("songEach")
    songList.textContent = album.canciones[index].titulo
    listDiv.appendChild(songList)
  }
}
