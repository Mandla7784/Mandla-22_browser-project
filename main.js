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

const task = {
  id: "1",
  title: document.querySelector("#title-input").value,
  description: document.querySelector("#desc-input").value,
};

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
    console.log(task);
  };
};

window.onload = saveAndDisplayTasks;
