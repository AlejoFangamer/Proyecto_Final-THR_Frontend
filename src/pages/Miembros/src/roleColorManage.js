const colores = {
  "Programador": "rojo",
  "Artista": "azul",
  "Diseñador": "verde",
  "Musico": "amarillo",
  "Escritor": "rosa",
  "Tester": "naranja",
};

export function obtenerColor(nombre) {
  if (nombre in colores) {
    return colores[nombre];
  } else {
    return "gris";
  }
}