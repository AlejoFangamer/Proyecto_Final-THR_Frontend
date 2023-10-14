import ScrollReveal from "scrollreveal";
import { containerOverlay } from "./containerOverlayCtr";
import { obtenerColor } from "./roleColorManage";

export function getAllMembers() {
  const memList = document.getElementById("mem-lista");
  const memTemplate = document.getElementById("mem-template");

  fetch("https://thr-backend-w0ns-dev.fl0.io/integrantes")
    .then((res) => res.json())
    .then((mem) => {
      function crearPost(post) {
        const listItem = document.importNode(memTemplate.content, true);

        listItem.querySelector(".mem-item").dataset.id = post.id_mem;

        listItem.querySelector(".mem-nombre").textContent = post.nombre_mem;

        const image = listItem.querySelector(".mem-imagen");
        image.src = post.img_mem;
        image.alt = post.nombre_mem;

        post.role_mem.forEach((e) => {
          const roleList = listItem.querySelector(".roles");
          const role = document.createElement("p");
          role.textContent = e;

          role.classList.add("rol",obtenerColor(role.textContent));

          roleList.append(role);
        })

        memList.appendChild(listItem);

        ScrollReveal().reveal(".mem-item", {
          origin: "bottom",
          distance: "50px",
          delay: 200, // Retraso en milisegundos
          interval: 200,
          duration: 1000, // Duración de la animación en milisegundos
          container: '#miembros' 
        });
      }

      if (Array.isArray(mem)) {
        mem.forEach((mem) => {
          crearPost(mem);
        });
      } else {
        crearPost(mem);
      }

      containerOverlay();
    });
}
