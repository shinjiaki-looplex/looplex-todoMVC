import { observer } from 'mobx-react-lite'
import { React } from 'react'
import { List, Button, Divider, Radio } from 'antd'

import TodoListItem from './TodoListItem'

const TodoListView = observer(({ store }) => {
  const handleRadioChange = e => {
    console.log(e.target.value)
  }

  function handleClearComplete(ev) {
    ev.preventDefault()
    store.clearCompleted()
  }

  return (
    <List
      className='list'
      footer={
        <>
          {store.itemsLeft} items left
          <Divider type='vertical' />
          <Radio.Group onChange={handleRadioChange} buttonStyle='solid' size='small' defaultValue='all'>
            <Radio.Button value='all'>All</Radio.Button>
            <Radio.Button size='small' value='active'>Active</Radio.Button>
            <Radio.Button value='completed'>Completed</Radio.Button>
          </Radio.Group>
          <Divider type='vertical' />
          <Button size='small' onClick={handleClearComplete}>Clear Completed</Button>
        </>
      }
      bordered
      dataSource={store.todos}
      renderItem={todo => (
        <TodoListItem todo={todo} />
      )}
    />
  )
})

export default TodoListView
