import ScrollReveal from "scrollreveal";
import { obtenerColor } from "./roleColorManage";

const memList = document.getElementById("juego-lista");
const memTemplate = document.getElementById("juego-template");

export function crearJuego(post) {
  const listItem = document.importNode(memTemplate.content, true);

  listItem.querySelector(".juego-item").dataset.id = post.id_juego;

  listItem.querySelector(".juego-nombre").textContent = post.nombre_juego;

  const image = listItem.querySelector(".juego-imagen");
  image.src = post.p_img_juego;
  image.alt = post.nombre_juego;

  const image_background = listItem.querySelector(".juego-item-background");
  image_background.style.backgroundImage = `url(${post.b_img_juego})`;
  image_background.alt = post.nombre_juego;

  // post.genero_juego.forEach((e) => {
  //   const roleList = listItem.querySelector(".roles");
  //   const role = document.createElement("p");
  //   role.textContent = e;

  //   role.classList.add("rol", obtenerColor(role.textContent));

  //   roleList.append(role);
  // });

  memList.appendChild(listItem);

  ScrollReveal().reveal(".juego-item", {
    origin: "bottom",
    distance: "50px",
    delay: 200, // Retraso en milisegundos
    interval: 200,
    duration: 1000, // Duración de la animación en milisegundos
    container: "#juegos",
  });
}
