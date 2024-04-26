const [saveButton, deleteButton, cancelButton] = [
  "btn-save",
  "btn-delete",
  "btn-cancel",
].map((id) => {
  return document.getElementById(id);
});

//elements with a class name
const form = document.querySelector(".modal");
const [boardsButtons, headerName, addNewTaskButton] = [
  ".boards button",
  ".header-name",

  ".btn-add-new-task",
].map((selector) => document.querySelectorAll(selector));

//save and display tasks to UI

const saveAndDisplayTasks = function () {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  addNewTaskButton[0].onclick = () => {
    const modalOverlay = document.querySelector(".over-lay");
    modalOverlay.style.display = "flex";
  };

  cancelButton.onclick = () => {
    const modalOverlay = document.querySelector(".over-lay");
    modalOverlay.style.display = "none";
  };
};


window.onload = saveAndDisplayTasks;






const task = {
  id:
}
















