import { types, getParent, destroy } from "mobx-state-tree"

// const todo = {
//   "id": 1,
//   "title": "Passear com o cachorro",
//   "isDone": false,
// }

export const TodoItem = types.model({
  id: types.identifierNumber,
  title: types.string,
  isDone: types.boolean,
})
.actions(self => ({
  editTitle(newTitle) {
    self.title = newTitle
  },
  toggleCheckbox() {
    self.isDone = !self.isDone
  },
  removeItem() {
    getParent(self, 2).remove(self)
  }
}))

export const TodoStore = types.model({
  todos: types.array(TodoItem),
  selectedTodo: types.reference(TodoItem)
})
.actions(self => ({
  add(item) {
    self.todos.push(item)
  },
  remove(item) {
    destroy(item)
  }
}))

// create a store with a normalized snapshot
const storeInstance = TodoStore.create({
  todos: [
    {
      id: 47,
      title: "Get coffee",
      isDone: false,
    }
  ],
  selectedTodo: "47"
})

// because `selectedTodo` is declared to be a reference, it returns the actual Todo node with the matching identifier
console.log(storeInstance.selectedTodo.title)
// prints "Get coffee"