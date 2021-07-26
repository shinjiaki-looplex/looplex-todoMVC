import React from "react"

import { Button, Checkbox } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

const TodoAntd = ({ item }) => (
  <>
    <Checkbox  onChange={ev => { item.toggleCheckbox() }}>{item.title}</Checkbox>
    <Button type="danger" onClick={item.remove}><DeleteOutlined /></Button>
  </>
)

export default TodoAntd