import { menuAnimations } from "../Menu/script.js";
import { getAllMembers } from "./src/getAllMembers.js";

document.addEventListener("DOMContentLoaded", () => {
  menuAnimations();
  getAllMembers();
});
