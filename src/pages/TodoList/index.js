import React from "react";
import "./index.css";
import TodoItem from "../../components/TodoItem"
import TodoForm from "../../components/TodoForm"

import {inject, observer} from 'mobx-react';
@inject(function(context){
    return {
        finishedCount: context.store.finishedCount,
        todos: context.store.todos
    }
})
@observer
class TodoList extends React.Component {
    render() {
        return (
            <main>
                <h1 className="header">任务标签</h1>
                <section>
                    <ul className="todos">
                        {this.props.todos.map(todo => {
                            return (<TodoItem  todo={todo} key={todo.id} />
                            );
                        })}
                    </ul>
                    <details>
                        <summary>
                            {this.props.finishedCount}已完成/{this.props.todos.length}总数
                        </summary>
                    </details>
                </section>
                <footer>
                  <TodoForm>
                  </TodoForm>
                </footer>
            </main>
        );
    }
}

export default TodoList;
