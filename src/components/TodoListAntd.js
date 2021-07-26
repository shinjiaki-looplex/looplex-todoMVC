import React from "react"

import TodoAntd from "./TodoAntd"

const TodoListAntd = ({ todoList }) => (
  <>
    {todoList.map((item, idx) => (
      <TodoAntd key={idx} item={item} />
    ))}
  </>
)

export default TodoListAntd