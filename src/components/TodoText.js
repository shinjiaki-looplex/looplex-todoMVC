import { observer } from "mobx-react-lite";

import { Typography } from "antd";

const { Text } = Typography

const TodoText = observer(({ todo }) => {

  let textAttrbs = {}
  if(todo.isDone) {
    textAttrbs = {
      type: 'secondary',
      delete: true
    }
  } else {
    textAttrbs = {
      editable: {
        onChange: todo.editTitle
      }
    }
  }

  return (
    <Text {...textAttrbs} >{todo.title}</Text>
  )
})

export default TodoText