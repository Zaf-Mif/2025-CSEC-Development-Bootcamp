const todoInput = document.getElementById("todoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");
const totalTodosSpan = document.getElementById("totalTodos");
const completedTodosSpan = document.getElementById("completedTodos");
const clearAllBtn = document.getElementById("clearAllBtn");
const emptyMessage = document.getElementById("emptyMessage");

let totalTodos = 0;
let completedTodos = 0;

// Update empty message
function updateEmptyMessage() {
  emptyMessage.style.display = totalTodos === 0 ? "block" : "none";
}

// Add Todo
addTodoBtn.addEventListener("click", () => {
  const todoText = todoInput.value.trim();

  if (todoText === "") {
    alert("Please enter a todo!");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = todoText;

  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("todo-buttons");

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  buttonDiv.appendChild(completeBtn);
  buttonDiv.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(buttonDiv);
  todoList.appendChild(li);

  totalTodos++;
  totalTodosSpan.textContent = totalTodos;
  updateEmptyMessage();

  todoInput.value = "";

  // Complete Todo
  completeBtn.addEventListener("click", () => {
    li.classList.toggle("completed");

    if (li.classList.contains("completed")) {
      completedTodos++;
    } else {
      completedTodos--;
    }

    completedTodosSpan.textContent = completedTodos;
  });

  // Delete Todo
  deleteBtn.addEventListener("click", () => {
    if (li.classList.contains("completed")) {
      completedTodos--;
      completedTodosSpan.textContent = completedTodos;
    }

    todoList.removeChild(li);
    totalTodos--;
    totalTodosSpan.textContent = totalTodos;
    updateEmptyMessage();
  });
});

// Clear All Todos
clearAllBtn.addEventListener("click", () => {
  todoList.innerHTML = "";
  totalTodos = 0;
  completedTodos = 0;
  totalTodosSpan.textContent = 0;
  completedTodosSpan.textContent = 0;
  updateEmptyMessage();
});

// Initial state
updateEmptyMessage();
