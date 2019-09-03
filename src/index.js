import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './pages/TodoList';
import {Provider} from 'mobx-react';
import store from './models/TodoList'
ReactDOM.render(
<Provider store={store}>
   <TodoList />
</Provider>
, document.getElementById('root'));

