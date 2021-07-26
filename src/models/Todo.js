import { types, getParent, destroy, getSnapshot } from "mobx-state-tree"

function slugify(x) {
  return encodeURIComponent(x.toLowerCase().replace(/\s+/gim, '-'))
}

export const TodoItem = types.model({
  id: types.identifier,
  title: "",
  isDone: true,
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

export const TodoList = types.model({
  todos: types.array(TodoItem),
})
.actions(self => ({
  add(title) {
    self.todos.push({
      id: slugify(title),
      title: title,
      isDone: false,
    })
  },
  remove(item) {
    destroy(item)
  }
}))
.views(self => ({
  get itemsLeft() {
    return self.todos.filter(todo => !todo.isDone).length
  }
}))