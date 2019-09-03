import React from "react";
import "./index.css";
import store from "../../models/TodoList";

var textarea = React.createRef();
function addTodo(e) {
    var dom = textarea.current;
    var value = dom.value;
    e.preventDefault();
    if (value) {
        store.addTodo(value);
        dom.value = "";
    }
}
function TodoForm() {
    return (
        <form className="create" onSubmit={addTodo}>
            <p className="input">
                <span className="hint">任务：</span>
                <textarea
                    ref={textarea}
                    placeholder="添加新任务吧。。。"
                ></textarea>
            </p>
            <p>
                <button type="submit">创建</button>
            </p>
        </form>
    );
}
export default TodoForm;
