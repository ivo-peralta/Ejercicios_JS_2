const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("por favor ingresá una tarea antes de agregarla");
    taskInput.focus();
    return;
  }

  const listItem = document.createElement("li");
  listItem.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.textContent = "eliminar";

  deleteButton.addEventListener("click", function () {
    taskList.removeChild(listItem);
  });

  listItem.appendChild(deleteButton);
  taskList.appendChild(listItem);

  taskInput.value = "";
  taskInput.focus();
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addTask();
  }
});
