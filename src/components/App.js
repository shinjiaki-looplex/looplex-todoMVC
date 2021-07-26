import './App.css';
import { useState } from 'react'
import { Input } from 'antd'
import { observer } from 'mobx-react-lite'

import TodoListView from './TodoListView'

const App = observer(({ store }) => {
  const [todo, setTodo] = useState('')

  function handleSubmit (ev) {
    ev.preventDefault()
    store.add(todo)
    console.log(todo)
    console.log(store.toJSON())
    setTodo('')
  }

  return (
    <div className="App">
      <header className="header">
        <img id="logo" src="https://todomvc.com/site-assets/logo-icon.png" alt="logo-icon" />
        <h1 id="title" >Looplex TodoMVC</h1>
      </header>

      <Input
        onPressEnter={handleSubmit}
        className="input"
        placeholder='What needs to be done?'
        name='todo'
        value={todo}
        onChange={ev => setTodo(ev.target.value)}
      />

      <TodoListView
        store={store}
        onChange={ev => setTodo(ev.target.value)}
      />
    </div>
  );
})

export default App;
