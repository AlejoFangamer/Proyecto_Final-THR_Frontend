import { menuAnimations } from "../Menu/script.js";
import { startAnim } from "../startPageAnim.js";
import { getAllMembers } from "./src/getAllMembers.js";

document.addEventListener("DOMContentLoaded", async () => {
  startAnim();
  menuAnimations();
  await getAllMembers();
});
