const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createAttribute("img");
  inputBox.className = "input-box";
  inputBox.setAttributeNode("contenteditable", "true");
  img.src = "assets/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
});
