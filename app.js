document.getElementById("add_btn").addEventListener("click", function (event) {
  event.preventDefault();

  let ordered_list = document.getElementById("todo_list");

  fetch("http://localhost:3000/todos")
    .then((data) => data.json())
    .then((usable_data) => {
      usable_data.todos.forEach((todo) => {
        let li = document.createElement("li");
        li.textContent = todo.name;
        ordered_list.appendChild(li);
      });
    });
});