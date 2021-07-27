import { observer } from 'mobx-react-lite'
import { React } from 'react'
import { List, Checkbox, Button, Divider, Radio } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

import TodoText from './TodoText'

const TodoListView = observer(({ store }) => {

  function handleChange(value) {
    console.log(`Selected: ${value}`);
  }

  return (
    <List
      className="list"
      footer={
        <div>
          {store.itemsLeft} items left
          <Divider  type="vertical" />
          <Radio.Group buttonStyle="solid" size="small" defaultValue='all' >
            <Radio.Button value="all">All</Radio.Button>
            <Radio.Button size="small" value="active">Active</Radio.Button>
            <Radio.Button value="completed">Completed</Radio.Button>
          </Radio.Group>
          <Divider  type="vertical" />
          <Button size="small" onClick={store.clearCompleted}>Clear Completed</Button>
        </div>
      }
      bordered
      dataSource={store.todos}
      renderItem={todo => (
        <List.Item>
          <div>
            <Checkbox checked={todo.isDone} onChange={todo.toggleCheckbox} ></Checkbox>
            <TodoText todo={todo} />
          </div>
          <Button type="danger" onClick={todo.removeItem} ><DeleteOutlined /></Button>
        </List.Item>
      )}
    />
  )
}) 

export default TodoListView