import { crearPost } from "./createPost";
import { postActions } from "./postActions";

export function getAllBlog() {
  const loadingMessage = document.getElementById("loading-blog");
  const blogList = document.getElementById("blog-lista");
  
  loadingMessage.style.display = "block";

  fetch("https://thr-backend-w0ns-dev.fl0.io/blog")
    .then((res) => res.json())
    .then((blog) => {
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
      postActions();
    })
}
