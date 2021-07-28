import './App.css'
import { useState } from 'react'
import { Button, Input } from 'antd'
import { observer } from 'mobx-react-lite'

import { CheckSquareOutlined } from '@ant-design/icons'

import TodoListView from './TodoListView'

const App = observer(({ store }) => {
  const [todoTitle, setTodoTitle] = useState('')

  function handleSubmit (ev) {
    ev.preventDefault()
    store.add(todoTitle)
    console.log(todoTitle)
    console.log(store.toJSON())
    setTodoTitle('')
  }

  return (
    <div className='App'>
      <header className='header'>
        <img id='logo' src='https://todomvc.com/site-assets/logo-icon.png' alt='logo-icon' />
        <h1 id='title'>Looplex TodoMVC</h1>
      </header>

      <Input
        onPressEnter={handleSubmit}
        className='input'
        prefix={
          <Button onClick={store.selectAll} type='link' style={{ transform: 'translateX(-4px)' }}>
            <CheckSquareOutlined style={{ fontSize: '18px' }} />
          </Button>
        }
        placeholder='What needs to be done?'
        name='todo'
        value={todoTitle}
        onChange={ev => setTodoTitle(ev.target.value)}
      />

      <TodoListView
        todos={store.todos}
        onChange={ev => setTodoTitle(ev.target.value)}
      />
    </div>
  )
})

export default App
