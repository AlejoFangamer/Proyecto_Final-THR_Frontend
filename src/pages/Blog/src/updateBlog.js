const blogList = document.getElementById("blog-lista");

export function updateBlog() {  
fetch("https://thr-backend-w0ns-dev.fl0.io/blog")
    .then((res) => res.json())
    .then((blog) => {
        if (blog.error) {
            const noBlogsMessage = document.createElement("p");
            noBlogsMessage.textContent = "No se encontraron blogs :(";
            blogList.appendChild(noBlogsMessage);
            return;
        }
    }); 
}