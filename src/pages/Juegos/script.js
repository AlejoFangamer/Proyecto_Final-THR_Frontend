import { menuAnimations } from "../Menu/script.js";
import { startAnim } from "../startPageAnim.js";
import { getAllGames } from "./src/getAllGames.js";

document.addEventListener("DOMContentLoaded", async () => {
  startAnim();
  menuAnimations();
  await getAllGames();
});
