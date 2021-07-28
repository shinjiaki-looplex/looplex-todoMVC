import { observer } from "mobx-react-lite";

import { List, Checkbox, Button, Typography } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

const { Text } = Typography

const TodoListItem = observer(({ todo }) => {
  let textAttrbs = {}
  if (todo.isDone) {
    textAttrbs = {
      type: 'secondary',
      delete: true
    }
  } else {
    textAttrbs = {
      editable: {
        onChange: todo.editTitle,
      }
    }
  }

  function handleRemoveClick (ev) {
    ev.preventDefault()
    todo.toggleCheckbox()
    todo.removeItem()
  }

  return (
    <List.Item style={{gap: '24px'}}>
      <Checkbox checked={todo.isDone} onChange={todo.toggleCheckbox} />
      <Text {...textAttrbs} ellipsis="true" className="text" >{todo.title}</Text>
      <Button type='danger' onClick={handleRemoveClick}><DeleteOutlined /></Button>
    </List.Item>
  )
})

export default TodoListItem