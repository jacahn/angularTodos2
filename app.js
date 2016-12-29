angular
  .module("todoApp", [])
  .controller("todoCtrl", [todoController])

function todoController(){
  this.todos=todoData
  this.addTodo = function(){
    // console.log("clicked");

    let todo = {name: this.newTodo, completed: false}
    this.todos.push(todo)
  }
}

let todoData = [
  {name: "Run", completed: false},
  {name: "Play", completed: false},
  {name: "Eat", completed: false},
  {name: "Sleep", completed: true},
  {name: "Goof", completed: false}
]
