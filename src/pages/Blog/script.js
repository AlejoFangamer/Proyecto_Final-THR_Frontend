//Cargar DOM
import { getAllBlog } from "./src/getAllBlog.js";
import { checkInputs } from "./src/checkForm.js"

document.addEventListener("DOMContentLoaded", () => {
  getAllBlog();
  checkInputs();

  const formulario = document.getElementById("miFormulario");

  formulario.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(formulario);
    const formDataObject = {};

    formData.forEach((value, key) => {
      if (!formDataObject.hasOwnProperty(key)) {
        formDataObject[key] = value == "" ? null : value;
      }
    });

    console.log(formDataObject);

    await fetch(`https://thr-backend-w0ns-dev.fl0.io/blog/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataObject),
    }).then((res) => {
      if (!res.ok) {
        throw new Error("Error al agregar el blog");
      }
      alert("Blog agregado con éxito");
      location.reload();
    });
  });
});
