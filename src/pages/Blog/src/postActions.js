import { btnAnims } from "./buttonsAnimations";
import { mostrarPantallaDeCarga, ocultarPantallaDeCarga } from "./loadingFun";
import { updateBlog } from "./updateBlog";

export function postActions() {
    const del = document.querySelectorAll(".erase");
    const edit = document.querySelectorAll(".edit");
    const save = document.querySelectorAll(".edit-confirm");
    btnAnims(del);
    btnAnims(edit);
    btnAnims(save);
    console.log(del)
      del.forEach((del) => {
        del.addEventListener("click", (e) => {
          mostrarPantallaDeCarga();
          const list = e.target.closest(".blog-item");
          const id = list.dataset.id;

          fetch(`https://thr-backend-w0ns-dev.fl0.io/blog/${id}`, {
            method: "DELETE",
          }).then((res) => {
            if (res.ok) {
                updateBlog();
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
}