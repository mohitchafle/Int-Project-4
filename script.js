// script.js
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");
  
  if (taskInput.value.trim() !== "") {
    var task = document.createElement("li");
    task.textContent = taskInput.value;
    
    task.addEventListener("click", function() {
      task.classList.toggle("completed");
    });
    
    taskList.appendChild(task);
    taskInput.value = "";
  }
}
