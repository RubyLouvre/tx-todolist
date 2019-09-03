import React from 'react';
import './index.css'

function TodoForm({ addTodo, textareaRef }) {
    return (
        <form className="create" onSubmit={addTodo}>
            <p className="input">
                <span className="hint">任务：</span>
                <textarea
                    ref={textareaRef}
                    placeholder="添加新任务吧。。。"
                ></textarea>
            </p>
            <p>
                <button type="submit">创建</button>
            </p>
        </form>
    );
}
export default TodoForm