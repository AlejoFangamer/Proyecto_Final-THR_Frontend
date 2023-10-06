export function checkInputs() {
  const urlInput = document.getElementById("imagen");
  const tituloInput = document.getElementById("nombre");
  const autorInput = document.getElementById("autor");
  const descInput = document.getElementById("mensaje");
  const submitButton = document.getElementById("submitBtn");

  const urlRegex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*\/?$/;

  const validateFields = () => {
    const isURLValid = urlInput.value.trim() !== "";
    const isNameValid = tituloInput.value.trim() !== "";
    const isAutorValid = autorInput.value.trim() !== "";
    const isDescValid = descInput.value.trim() !== "";

    if (isNameValid && isAutorValid && isDescValid & isURLValid) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  };

  urlInput.addEventListener("input", validateFields);
  tituloInput.addEventListener("input", validateFields);
  autorInput.addEventListener("input", validateFields);
  descInput.addEventListener("input", validateFields);
}
