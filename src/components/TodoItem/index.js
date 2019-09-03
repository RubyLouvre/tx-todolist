import React from 'react';
import './index.css'
import store from '../../models/TodoList';
function TodoItem({ todo }) {
    return (
        <li
            className={todo.finished ? "finished item" : "todo item"}
        >
            <input
                onChange={()=>{
                    todo.finished = !todo.finished
                }}
                checked={todo.finished}
                type="checkbox"
            />
            {todo.title}
            <span
                className="del-button"
                onClick={()=>{
                    store.deleteTodo(todo)
                }}
            >
                删除
            </span>
        </li>
    );
}

export default TodoItem
