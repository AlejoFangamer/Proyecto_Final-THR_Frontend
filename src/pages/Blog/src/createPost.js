import ScrollReveal from "scrollreveal";

const blogList = document.getElementById("blog-lista");
const blogTemplate = document.getElementById("blog-template");

export function crearPost(post) {
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
