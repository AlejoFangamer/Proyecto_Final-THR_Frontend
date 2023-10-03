//Cargar DOM
import ScrollReveal from "scrollreveal";

document.addEventListener("DOMContentLoaded", () => {
  const blogList = document.getElementById("blog-lista");
  const blogTemplate = document.getElementById("blog-template");
  const loadingMessage = document.getElementById("loading-blog");

  loadingMessage.style.display = "block";

  fetch("https://thr-backend-w0ns-dev.fl0.io/blog")
    .then((res) => res.json())
    .then((blog) => {
      blog.sort((a, b) => new Date(b.id_blog) - new Date(a.id_blog));

      blog.forEach((blog) => {
        const listItem = document.importNode(blogTemplate.content, true);

        loadingMessage.style.display = "none";

        listItem.querySelector(".blog-titulo").textContent = blog.titulo_blog;
        listItem.querySelector(
          ".blog-autor"
        ).textContent = `Autor: ${blog.autor_blog}`;

        const fechaBlog = new Date(blog.fecha_blog);
        fechaBlog.setTime(
          fechaBlog.getTime() + fechaBlog.getTimezoneOffset() * 60 * 1000
        ); // Ajusta a la zona horaria local
        listItem.querySelector(
          ".blog-fecha"
        ).textContent = `${fechaBlog.toLocaleDateString()}`;

        const image = listItem.querySelector(".blog-imagen");
        image.src = blog.thumb_blog;
        image.alt = "Thumbnail";

        const image_container = listItem.querySelector(".img-container");

        if (blog.thumb_blog) {
          image.src = blog.thumb_blog;
          image.alt = "Thumbnail";
        } else {
          image_container.style.display = "none";
          image.style.display = "none"; // Oculta la imagen si no hay thumb_blog
        }

        listItem.querySelector(".blog-desc").textContent = blog.info_blog;

        blogList.appendChild(listItem);

        ScrollReveal().reveal(".blog-item", {
          origin: "bottom",
          distance: "50px",
          delay: 200, // Retraso en milisegundos
          interval: 200,
          duration: 1000, // Duración de la animación en milisegundos
        });
      });
    });
  // document.addEventListener("click", (e) => {
  //   if (e.target.matches("button")) {
  //     const article = e.target.closest("article");
  //     const id = article.dataset.id;

  //     fetch(`https://thr-backend-w0ns-dev.fl0.io/blog/${id}`, {
  //       method: "DELETE",
  //     }).then((res) => {
  //       if (res.ok) {
  //         article.remove();
  //       }
  //     });
  //   }
  // });

  const formulario = document.getElementById("miFormulario");

  formulario.addEventListener("submit", async (event) => {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    const formData = new FormData(formulario);

    const formDataObject = {};

    formData.forEach((value, key) => {
      if (!formDataObject.hasOwnProperty(key)) {
        formDataObject[key] = value;
      }
    });

    console.log(formDataObject);

    await fetch(`https://thr-backend-w0ns-dev.fl0.io/blog/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json', // Especifica el tipo de contenido como JSON
      },
      body: JSON.stringify(formDataObject)
    }).then((res) => {
      if (!res.ok) {
        throw new Error("Error al agregar el blog");
      }
    });

    alert("Blog agregado con éxito");
    location.reload();

    // try {
    //   const response = await fetch('https://thr-backend-w0ns-dev.fl0.io/blog', {
    //     method: 'POST',
    //     body: formData,
    //   });

    //   if (!response.ok) {
    //     throw new Error('Error al enviar el formulario');
    //   }

    //   alert('Formulario enviado con éxito');
    //   formulario.reset(); // Limpia el formulario después de enviarlo
    // } catch (error) {
    //   console.error('Error al enviar el formulario:', error);
    //   alert('Hubo un error al enviar el formulario');
    // }
  });
});
