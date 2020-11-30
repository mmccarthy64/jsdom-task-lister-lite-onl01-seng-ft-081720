document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");

  const newTaskUl = document.getElementById("list");

  newTaskForm.addEventListener("submit", createNewTask);
});

  const createNewTask = event => {
    event.preventDefault();

    const newTaskDescription = document.getElementById("new-task-description");
    const newTask = document.createElement("li");
    newTask.innerHTML = newTaskDescription.value;

    appendNewTask(newTask);
    event.target.reset();
  }

  const appendNewTask = task => {
    document.getElementById("tasks").appendChild(task);
  };