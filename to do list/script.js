const formTask = document.getElementById("form-task");
const inputTask = document.getElementById("input-task");
const buttonTask = document.getElementById("button-task");
const listTask = document.getElementById("list-task");

let tasks = [];

if (localStorage.getItem("tasks") !== null) {
  tasks = JSON.parse(localStorage.getItem("tasks"));
  displayTask();
}

formTask.addEventListener("submit", addTask);

function addTask(e) {
  e.preventDefault();
  const taskText = inputTask.value;
  if (taskText === "") {
    alert("Please enter task name");
    return;
  }

  tasks.unshift(taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTask();
  inputTask.value = "";
}

function displayTask() {
  listTask.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "";
    li.innerHTML = task;

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger button-delete";
    deleteButton.innerHTML = "X";
    deleteButton.addEventListener("click", () => deleteTask(index));

    li.appendChild(deleteButton);
    listTask.appendChild(li);
  });
}

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.removeItem("tasks", JSON.stringify(tasks));
  displayTask();
}
