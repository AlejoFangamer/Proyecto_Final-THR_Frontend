const loadingOverlay = document.getElementById("loading-overlay");

export function mostrarPantallaDeCarga() {
  loadingOverlay.style.display = "block";
}

// Ocultar la pantalla de carga después de que se complete el fetch
export function ocultarPantallaDeCarga() {
  loadingOverlay.style.display = "none";
}
