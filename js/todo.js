const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");

let todos = [];

function saveTodo() {
  localStorage.setItem("todo-list", JSON.stringify(todos));
}

function removeTodo(e) {
  const removeLi = e.target.parentElement;
  removeLi.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(removeLi.id));
  saveTodo();
}

function paintTodo(todoValue) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.id = todoValue.id;
  button.innerText = "─";
  span.innerText = todoValue.text;
  li.appendChild(button);
  li.appendChild(span);
  todoList.appendChild(li);
  button.addEventListener("click", removeTodo);
}

function todoSubmit(e) {
  e.preventDefault();
  const todoValue = todoInput.value;
  todoInput.value = "";
  const todoValueObj = {
    text: todoValue,
    id: Date.now(),
  };
  todos.push(todoValueObj);
  paintTodo(todoValueObj);
  saveTodo();
}

todoForm.addEventListener("submit", todoSubmit);

const savedTodos = localStorage.getItem("todo-list");
if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
