/*const todoTitle = document.querySelector("#todo-title");
const todoDescription = document.querySelector("#todo-description");
const TodoButton = document.querySelector("#btn");
const todoList = document.querySelector("#todo-list");
let todos = [];


 
TodoButton.addEventListener("click", function() {
    const title = todoTitle.value;
    const description = todoDescription.value;
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    todoItem.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
    `;
    todoList.appendChild(todoItem);
    todoTitle.value = "";
    todoDescription.value = "";
});*/

const btn = document.getElementById("btn");
const title = document.getElementById("todo-title");
const description = document.getElementById("todo-description");
const todoList = document.getElementById("todo-list");
const todos = JSON.parse(localStorage.getItem("todos")) || [];
let tvalue = title.value;
let dvalue = description.value;

btn.addEventListener("click", () => {
    if (title.value === "") {return alert("Please enter a title");
   }
    todos.push({
        title: title.value,
        description: description.value
       }
       )
    
       title.value = "";
       description.value = "";
       renderTodos();
});
function save (){
    localStorage.setItem("todos", JSON.stringify(todos));
}
function renderTodos() {
    todoList.innerHTML = "";
    todos.forEach(todo => {
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");
        todoItem.innerHTML = `
            <h3>${todo.title}</h3>
            <p>${todo.description}</p>
        `;
        todoList.appendChild(todoItem);
    });
}