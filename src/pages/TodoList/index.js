import React from "react";
import "./index.css";
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            finishedCount: 0
        };
    }
    addTodo(e) {
        var dom = this.refs.textarea;
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
                            return (
                                <li
                                    key={todo.id}
                                    className={
                                        todo.finished
                                            ? "finished item"
                                            : "todo item"
                                    }
                                >
                                    <input
                                        onChange={this.updateTodo.bind(
                                            this,
                                            todo
                                        )}
                                        checked={todo.finished}
                                        type="checkbox"
                                    />
                                    {todo.title}
                                    <span
                                        className="del-button"
                                        onClick={this.deleteTodo.bind(
                                            this,
                                            todo
                                        )}
                                    >
                                        删除
                                    </span>
                                </li>
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
                    <form className="create" onSubmit={this.addTodo.bind(this)}>
                        <p className="input">
                            <span className="hint">任务：</span>
                            <textarea
                                ref="textarea"
                                placeholder="添加新任务吧。。。"
                            ></textarea>
                        </p>
                        <p>
                            <button type="submit">创建</button>
                        </p>
                    </form>
                </footer>
            </main>
        );
    }
}

export default TodoList;
