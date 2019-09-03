import React from 'react';
import './index.css'
function TodoItem({ todo, updateTodo,  deleteTodo }) {
    return (
        <li
            className={todo.finished ? "finished item" : "todo item"}
        >
            <input
                onChange={updateTodo}
                checked={todo.finished}
                type="checkbox"
            />
            {todo.title}
            <span
                className="del-button"
                onClick={deleteTodo}
            >
                删除
            </span>
        </li>
    );
}

export default TodoItem
