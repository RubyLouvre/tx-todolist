import React from "react";
import "./index.css";
import TodoItem from "../../components/TodoItem"
import TodoForm from "../../components/TodoForm"
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            finishedCount: 0
        };
    }
    textareaRef = (dom)=>{
        if(dom){
            this.textarea = dom
        }
    }
    addTodo(e) {
        var dom = this.textarea;
        var value = dom.value;

        if (value) {
            e.preventDefault();
            this.setState({
                todos: this.state.todos.concat({
                    title: value,
                    id: `todo-${Math.random()}`,
                    finished: false
                })
            });
            dom.value = "";
        }
    }
    updateTodo(todo) {
        var ok = (todo.finished = !todo.finished);
        this.setState({
            todos: this.state.todos.concat(),
            finishedCount: this.state.finishedCount + (ok ? 1 : -1)
        });
    }
    deleteTodo(todo) {
        this.setState({
            todos: this.state.todos.filter(el => {
                return el !== todo;
            }),
            finishedCount: this.state.finishedCount + (todo.finished ? -1 : 0)
        });
    }
    render() {
        return (
            <main>
                <h1 className="header">任务标签</h1>
                <section>
                    <ul className="todos">
                        {this.state.todos.map(todo => {
                            return (<TodoItem todo={todo}
                                key={todo.id}
                                deleteTodo={this.deleteTodo.bind(this, todo)}
                                updateTodo={this.updateTodo.bind(this, todo)}
                                ></TodoItem>
                            );
                        })}
                    </ul>
                    <details>
                        <summary>
                            {this.state.finishedCount}已完成/
                            {this.state.todos.length}总数
                        </summary>
                    </details>
                </section>
                <footer>
                  <TodoForm textareaRef={this.textareaRef} addTodo={this.addTodo.bind(this)}>
                  </TodoForm>
                </footer>
            </main>
        );
    }
}

export default TodoList;
