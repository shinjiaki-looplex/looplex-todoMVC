import { observer } from 'mobx-react-lite'
import { React } from 'react'
import { List, Checkbox, Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

const TodoListView = observer(({ store, todo }) => {

  function onChange (e) {
    console.log(`checked = ${e.target.checked}`)
    store.todos.toggleCheckbox()
  }

  const zero = store.todos[0]

  function delBtn() {
    console.log(store.todos[0].removeItem())
  }

  return (
    <List
      className="list"
      footer={<div>Footer</div>}
      bordered
      dataSource={store.todos}
      renderItem={todos => (
        <List.Item>
          <Checkbox onChange={onChange} >{todos.title}</Checkbox>
          <Button type="danger" onClick={todos.removeItem} ><DeleteOutlined /></Button>
        </List.Item>
      )}
    />
  )
}) 

export default TodoListView