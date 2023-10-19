import { containerOverlay } from "./containerOverlayCtr";
import { crearJuego } from "./PostAllGames";

const loadingMessage = document.getElementById("loading-juegos");

loadingMessage.style.display = "block";

export function getAllGames() {
  fetch("https://thr-backend-w0ns-dev.fl0.io/juegos")
    .then((res) => res.json())
    .then((game) => {
      loadingMessage.style.display = "none";

      const allGameObject = game;
      console.log(allGameObject);
      
      if (Array.isArray(game)) {
        game.forEach((e) => {
          crearJuego(e);
        });
      } else {
        crearJuego(game);
      }

      containerOverlay(allGameObject);
    });
}
