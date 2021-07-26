import { List, Button, Checkbox, Input } from 'antd'
import './App.css';
import { observer } from 'mobx-react-lite'
import { DeleteOutlined } from '@ant-design/icons'

import TodoAntd from './TodoAntd';
import TodoListAntd from './TodoListAntd';
import { TodoItem, TodoList } from '../models/Todo';
import { onSnapshot } from "mobx-state-tree"
import { useState } from 'react'
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

  function handleRemoveClick (ev) {
    ev.preventDefault()
    todo.removeItem()
  }

  return (
    <div className="App">
      <header className="header">
        <img id="logo" src="https://todomvc.com/site-assets/logo-icon.png" alt="logo-icon" />
        <h1 id="title" >Looplex TodoMVC</h1>
      </header>

      <Input
        onPressEnter={handleSubmit}
        className="input-nhead"
        placeholder='What needs to be done?'
        name='todo'
        value={todo}
        onChange={ev => setTodo(ev.target.value)}
      />

      {/* <List
        className="list"
        footer={<div>Footer</div>}
        bordered
        dataSource={store.todos}
        renderItem={todos => (
          <List.Item>
            <Checkbox >{todos.title}</Checkbox>
            <Button type="danger" onClick={handleRemoveClick} ><DeleteOutlined /></Button>
          </List.Item>
        )}
      /> */}

      <TodoListView
        store={store}
        todo={todo}
        onChange={ev => setTodo(ev.target.value)}
      />

      Total Left {store.itemsLeft}
    </div>
  );
})

export default App;
