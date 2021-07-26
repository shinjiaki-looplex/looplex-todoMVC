import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import { TodoList } from './models/Todo';

import { onSnapshot } from 'mobx-state-tree'

let store = TodoList.create({})

if (localStorage.getItem("todolistapp")) {
  const json = JSON.parse(localStorage.getItem("todolistapp"))
  if (TodoList.is(json)) store = json
}

const todoList = TodoList.create(store)

onSnapshot(todoList, snapshot => {
  localStorage.setItem("todolistapp", JSON.stringify(snapshot))
})

ReactDOM.render(
  <React.StrictMode>
    <App store={todoList}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
