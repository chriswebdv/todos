const textarea = document.querySelector("textarea");
const addButton = document.querySelector(".addButton");
const todoContainer = document.querySelector(".todo-container");

let todoList = [];

function addTodo() {
  const todo = textarea.value;
  if (!todo) {
    return;
  }
  console.log("Add todo: ", todo);
  todoList.push(todo);
  textarea.value = ""; // resets to empty
  updateUI();
}

function updateUI() {}

addButton.addEventListener("click", addTodo);
