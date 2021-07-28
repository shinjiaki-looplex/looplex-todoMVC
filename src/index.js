import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import reportWebVitals from './reportWebVitals'

import { TodoList } from './models/Todo'

import { onSnapshot } from 'mobx-state-tree'

const storedState = localStorage.getItem('todolistapp')
const storeCandidate = JSON.parse(storedState)
if (!TodoList.is(storeCandidate)) {
  // FIX: reconciliate user data with new schemata
}
const initialState = storedState && TodoList.is(storeCandidate) ? storeCandidate : {}
const store = TodoList.create(initialState)
onSnapshot(store, snapshot => {
  localStorage.setItem('todolistapp', JSON.stringify(snapshot))
})

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
