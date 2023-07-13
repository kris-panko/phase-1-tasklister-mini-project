document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded Kris");
});
const form = document.getElementById("create-task-form").addEventListener("click", (e) => {
  e.preventDefault();
});

const submitButton = document.getElementById("submitButton").addEventListener("click", () => createNewTask()); 

const createNewTask = () => {
  const formInput = document.getElementById("new-task-description")
  console.log(formInput.value);
  
  const node = document.createElement("li");
  const textNode = document.createTextNode(formInput.value);

  node.appendChild(textNode);
  document.getElementById("tasks").appendChild(node);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "x";
  deleteButton.addEventListener("click", () => {
    node.remove();
  });

  node.appendChild(deleteButton);


  
}