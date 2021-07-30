import { getSnapshot, onSnapshot } from "mobx-state-tree"
import { TodoItem, TodoList } from "./todo";

it('can create  an instace of a model', () => {
  const item = TodoItem.create({
    id: "1",
    title: "Make tests",
    isDone: false
  })

  expect(item.title).toBe("Make tests")
  item.editTitle("Tests done")
  expect(item.title).toBe("Tests done")

  expect(item.isDone).toBe(false)
  item.toggleCheckbox()
  expect(item.isDone).toBe(true)
})

it("can create a todo list", () => {
  const list = TodoList.create({
      todos: [
        {
          id: "todo-list-item-1",
          title: "Todo list item 1",
          isDone: true
        }
      ]
  })

  expect(list.todos.length).toBe(1)
  expect(list.todos[0].title).toBe("Todo list item 1")
})

it("can remove items", () => {
  const list = TodoList.create({
      todos: [
        {
          id: "item-1",
          title: "item 1",
          isDone: false
        },
        {
          id: "item-2",
          title: "item 2",
          isDone: false
        }
      ]
  })

  expect(list.todos.length).toBe(2)
  list.todos[0].removeItem()
  expect(list.todos.length).toBe(1)
  expect(list.todos[0].title).toBe("item 2")
})

it("can view items left", () => {
  const list = TodoList.create({
      todos: [
        {
          id: "item-1",
          title: "item 1",
          isDone: false
        },
        {
          id: "item-2",
          title: "item 2",
          isDone: false
        }
      ]
  })

  expect(list.itemsLeft).toBe(2)
  list.todos[0].toggleCheckbox()
  expect(list.itemsLeft).toBe(1)
  list.todos[0].toggleCheckbox()
  list.selectAll()
  expect(list.itemsLeft).toBe(0)
})

it("can snapshot the list", () => {
  const list = TodoList.create()
  const states = []
  onSnapshot(list, snapshot => {
    states.push(snapshot)
  })

  list.add("item 1")

  expect(list.todos.length).toBe(1)
  expect(list.todos[0].title).toBe("item 1")
  list.todos[0].editTitle("item 2")
  expect(list.todos[0].title).toBe("item 2")

  expect(getSnapshot(list)).toMatchSnapshot()

  expect(states).toMatchSnapshot()
})