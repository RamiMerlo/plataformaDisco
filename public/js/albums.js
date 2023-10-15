import { onLoad } from "../utils/utils.js"
import { logOut } from "../utils/utils.js"

const divAlbums = document.querySelector(".albums")

const renderAlbums = (album) => {
  const div = document.createElement("div")
  const albumTitle = document.createElement("h2")
  const albumDate = document.createElement("h2")
  const imgAlbum = document.createElement("img")
  const iconTrash = document.createElement("img")
  const addSongIcon = document.createElement("i")
  const editAlbumIcon = document.createElement("i")
  const listDiv = document.createElement("div")
  console.log(album)
  let urlPortada = album.portada
    ? album.portada
    : "https://imgur.com/0uSALUr.png"
  div.classList.add("albums-individual")
  let albumId = album._id ? album._id : ""
  let linkAlbum = album.link ? album.link : ""
  imgAlbum.setAttribute("src", urlPortada)
  iconTrash.setAttribute("src", "../images/trashy.png")
  addSongIcon.classList.add("ri-music-2-fill")
  addSongIcon.classList.add("addCustom")
  editAlbumIcon.classList.add("ri-settings-5-fill")
  editAlbumIcon.classList.add("editCustom")
  iconTrash.classList.add("trashCustom")
  listDiv.classList.add("listDiv")

  albumTitle.textContent = album.titulo
  albumDate.textContent = album.fecha
  div.appendChild(albumTitle)
  div.appendChild(albumDate)
  div.appendChild(imgAlbum)
  div.appendChild(iconTrash)
  div.appendChild(addSongIcon)
  div.appendChild(editAlbumIcon)
  div.appendChild(listDiv)
  divAlbums.appendChild(div)

  addSongIcon.addEventListener("click", (album) => {
    window.location.href = linkAlbum
  })

  editAlbumIcon.addEventListener("click", () => {
    localStorage.setItem("albumId", JSON.stringify(albumId))
    window.location.href = "./editAlbum.html"
  })

  renderSongs(album, listDiv)
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
  const songList = document.createElement("p")
  songList.classList.add("songEach")
  songList.textContent = album.descripcion
  listDiv.appendChild(songList)
}
