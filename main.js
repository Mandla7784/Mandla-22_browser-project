const [saveButton, deleteButton, cancelButton] = [
  "btn-save",
  "btn-delete",
  "btn-cancel",
].map((id) => {
  return document.getElementById(id);
});

// elements with a class name
const form = document.querySelector(".modal");
const modalOverlay = document.querySelector(".over-lay");
const [boardsButtons, headerName, addNewTaskButton] = [
  ".boards button",
  ".header-name",
  ".btn-add-new-task",
].map((selector) => document.querySelectorAll(selector));

// save and display tasks to UI
const tasks = [];

const saveAndDisplayTasks = function () {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const description = document.querySelector("#desc-input").value;
    const title = document.querySelector("#title-input").value;

    const task = {
      id: "1",
      title: title,
      description: description,
    };

    tasks.push(task);
    const uniqueTasks = removeDuplicates(tasks);
    localStorage.setItem("tasks", JSON.stringify(uniqueTasks));
    displayTasks(uniqueTasks);
  });

  addNewTaskButton[0].onclick = () => {
    const modalOverlay = document.querySelector(".over-lay");
    modalOverlay.style.display = "flex";
  };

  saveButton.onclick = () => {
    modalOverlay.style.display = "none";
  };
};

window.onload = saveAndDisplayTasks;

function displayTasks() {
  const taskContainer = document.querySelector(".task");
  taskContainer.innerHTML = "";
  const fetchedTasks = JSON.parse(localStorage.getItem("tasks"));
  fetchedTasks.forEach((task) => {
    const taskElement = document.createElement("div");
    taskElement.innerHTML = `
      <p>${task.title}</p>
      <p>${task.description}</p>
    `;
    taskContainer.appendChild(taskElement);
  });
}

function removeDuplicates(arr) {
  const uniqueArray = [];
  const map = new Map();
  for (const item of arr) {
    if (!map.has(item.id)) {
      map.set(item.id, true);
      uniqueArray.push(item);
    }
  }
  return uniqueArray;
}
