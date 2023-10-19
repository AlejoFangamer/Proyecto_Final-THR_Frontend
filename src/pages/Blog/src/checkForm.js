import { mostrarPantallaDeCarga, ocultarPantallaDeCarga } from "./loadingFun";

const formulario = document.getElementById("miFormulario");
export function initFormulario() {
  formulario.addEventListener("submit", async (event) => {
    event.preventDefault();
    mostrarPantallaDeCarga();

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
        ocultarPantallaDeCarga();
        alert("Error al agregar el blog");
        throw new Error("Error al agregar el blog");
      }
      alert("Blog agregado con éxito");
      location.reload();
    });
  });
};

export function checkInputs() {
  const urlInput = document.getElementById("imagen");
  const tituloInput = document.getElementById("nombre");
  const autorInput = document.getElementById("autor");
  const descInput = document.getElementById("mensaje");
  const submitButton = document.getElementById("submitBtn");

  const validateFields = () => {
    const isNameValid = tituloInput.value.trim() !== "";
    const isAutorValid = autorInput.value.trim() !== "";
    const isDescValid = descInput.value.trim() !== "";

    //rango de 600 caracteres para la descripción
    const isDescLengthValid = descInput.value.trim().length <= 600;

    //rango de 80 caracteres para el autor
    const isAutorLengthValid = autorInput.value.trim().length <= 80;

    //rango de 100 caracteres para el titulo
    const isTituloLengthValid = tituloInput.value.trim().length <= 100;

    if (isNameValid && isAutorValid && isDescValid && isDescLengthValid && isAutorLengthValid && isTituloLengthValid) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  };

  urlInput.addEventListener("input", validateFields);
  tituloInput.addEventListener("input", validateFields);
  autorInput.addEventListener("input", validateFields);
  descInput.addEventListener("input", validateFields);
  validateFields();
}
