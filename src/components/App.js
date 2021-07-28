import './App.css'
import { useState } from 'react'
import { Button, Input } from 'antd'
import { observer } from 'mobx-react-lite'

import TodoListView from './TodoListView'
import SelectAllIcon from './SelectAllIcon'

const App = observer(({ store }) => {
  const [todoTitle, setTodoTitle] = useState('')

  function handleSubmit (ev) {
    ev.preventDefault()
    store.add(todoTitle)
    setTodoTitle('')
  }

  function handleSelectAll () {
    if (store.itemsLeft === 0) {
      store.selectAll(false)
    } else {
      store.selectAll(true)
    }
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
          <Button onClick={handleSelectAll} type='link' style={{ transform: 'translateX(-4px)' }}>
            <SelectAllIcon store={store} />
          </Button>
        }
        placeholder='What needs to be done?'
        name='todo'
        value={todoTitle}
        onChange={ev => setTodoTitle(ev.target.value)}
      />



      <TodoListView
        store={store}
        onChange={ev => setTodoTitle(ev.target.value)}
      />
    </div>
  )
})

export default App
