import ScrollReveal from "scrollreveal";

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

        const image_container = listItem.querySelector(".img-container");
        memList.appendChild(listItem);

        ScrollReveal().reveal(".mem-item", {
          origin: "bottom",
          distance: "50px",
          delay: 200, // Retraso en milisegundos
          interval: 200,
          duration: 1000, // Duración de la animación en milisegundos
        });
      }

      if (Array.isArray(mem)) {
        mem.forEach((mem) => {
          crearPost(mem);
        });
      } else {
        crearPost(mem);
      }
    });
}
