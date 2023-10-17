import ScrollReveal from "scrollreveal";
import { mostrarPantallaDeCarga, ocultarPantallaDeCarga } from "./loadingFun";

export function getAllBlog() {
  const blogList = document.getElementById("blog-lista");
  const blogTemplate = document.getElementById("blog-template");
  const loadingMessage = document.getElementById("loading-blog");

  loadingMessage.style.display = "block";

  fetch("https://thr-backend-w0ns-dev.fl0.io/blog")
    .then((res) => res.json())
    .then((blog) => {
      function crearPost(post) {
        const listItem = document.importNode(blogTemplate.content, true);

        const editConfirm = listItem.querySelector(".edit-confirm");
        editConfirm.style.display = "none";

        listItem.querySelector(".blog-item").dataset.id = post.id_blog;

        listItem.querySelector(".blog-titulo").textContent = post.titulo_blog;
        listItem.querySelector(
          ".blog-autor"
        ).textContent = `Autor: ${post.autor_blog}`;

        const fechaBlog = new Date(post.fecha_blog);
        fechaBlog.setTime(
          fechaBlog.getTime() + fechaBlog.getTimezoneOffset() * 60 * 1000
        ); // Ajusta a la zona horaria local
        listItem.querySelector(
          ".blog-fecha"
        ).textContent = `${fechaBlog.toLocaleDateString()}`;

        const image = listItem.querySelector(".blog-imagen");
        image.src = post.thumb_blog;
        image.alt = "Thumbnail";

        const image_container = listItem.querySelector(".img-container");

        if (post.thumb_blog) {
          image.src = post.thumb_blog;
          image.alt = "Thumbnail";
        } else {
          image_container.style.display = "none";
          image.style.display = "none"; // Oculta la imagen si no hay thumb_blog
        }

        listItem.querySelector(".blog-desc").textContent = post.info_blog;

        blogList.appendChild(listItem);

        ScrollReveal().reveal(".blog-item", {
          origin: "bottom",
          distance: "50px",
          delay: 200, // Retraso en milisegundos
          interval: 200,
          duration: 1000, // Duración de la animación en milisegundos
          container: "#blog-lista",
        });
      }
      loadingMessage.style.display = "none";

      if (blog.error) {
        const noBlogsMessage = document.createElement("p");
        noBlogsMessage.textContent = "No se encontraron blogs :(";
        blogList.appendChild(noBlogsMessage);
        return;
      }

      if (Array.isArray(blog)) {
        blog.sort((a, b) => new Date(b.id_blog) - new Date(a.id_blog));

        blog.forEach((blog) => {
          crearPost(blog);
        });
      } else {
        crearPost(blog);
      }

      const del = document.querySelectorAll(".erase");
      const edit = document.querySelectorAll(".edit");
      const save = document.querySelectorAll(".edit-confirm");

      del.forEach((del) => {
        del.addEventListener("click", (e) => {
          mostrarPantallaDeCarga();
          const list = e.target.closest(".blog-item");
          const id = list.dataset.id;

          fetch(`https://thr-backend-w0ns-dev.fl0.io/blog/${id}`, {
            method: "DELETE",
          }).then((res) => {
            if (res.ok) {
              list.remove();
              ocultarPantallaDeCarga();
            }
          });
        });
      });

      edit.forEach((edit) => {
        edit.addEventListener("click", (e) => {
          const list = e.target.closest(".blog-item");
          const editOptions = list.querySelector(".edit-confirm");

          const descInput = list.querySelector(".blog-desc");
          const tituloInput = list.querySelector(".blog-titulo");

          descInput.innerHTML = `<textarea class="blog-desc-input">${descInput.textContent}</textarea>`;

          tituloInput.innerHTML = `<input class="blog-titulo-input" value = "${tituloInput.textContent}"></input>`;

          edit.style.display = "none";
          editOptions.style.display = "inline-block";
        });
      });

      save.forEach((save) => {
      save.addEventListener("click", (e) => {
        mostrarPantallaDeCarga();
        const blogItem = e.target.closest(".blog-item");
        const descInput = blogItem.querySelector(".blog-desc-input");
        const tituloInput = blogItem.querySelector(".blog-titulo-input");

        const blogId = blogItem.dataset.id;

        const formData = {
          titulo_blog: tituloInput.value,
          info_blog: descInput.value,
        };

        fetch(`https://thr-backend-w0ns-dev.fl0.io/blog/${blogId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }).then((res) => {
          if (!res.ok) {
            throw new Error("Error al agregar el blog");
          }
          location.reload();
        });

        console.log(JSON.stringify(formData));
      });
    });
    });
}
