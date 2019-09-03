import {observable, computed, action} from "mobx";
import Todo from "./Todo"
class TodoList {
    @observable todos = []
    @computed get finishedCount(){
        return this.todos.filter(todo =>{
            return todo.finished
        }).length
    }
    @action addTodo(title) {
        if (title) {
            this.todos.push(new Todo(title))
        }
    }
    @action deleteTodo(todo) {
        this.todos.remove(todo)
    }
}
var store = new TodoList
export default store
