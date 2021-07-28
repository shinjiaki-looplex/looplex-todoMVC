import { types, getParent, destroy } from 'mobx-state-tree'

function slugify (x) {
  return encodeURIComponent(x.toLowerCase().replace(/\s+/gim, '-'))
}

export const TodoItem = types
  .model({
    id: types.identifier,
    title: '',
    isDone: true
  })
  .actions(self => ({
    editTitle (newTitle) {
      self.title = newTitle
    },
    toggleCheckbox () {
      self.isDone = !self.isDone
    },
    removeItem () {
      getParent(self, 2).remove(self)
    }
  }))

export const TodoList = types
  .model({
    todos: types.array(TodoItem)
  })
  .actions(self => ({
    add (title) {
      self.todos.push({
        id: slugify(title),
        title: title,
        isDone: false
      })
    },
    remove (item) {
      destroy(item)
    },
    clearCompleted () {
      console.log(self.todos.length)
      for (let i = (self.todos.length - 1); i >= 0; i--) {
        console.log(i)
        if (self.todos[i].isDone) {
          self.todos[i].removeItem()
        }
      }
    },
    selectAll () {
      for (let i = 0; i < self.todos.length; i++) {
        if (!self.todos[i].isDone) {
          self.todos[i].toggleCheckbox()
        }
      }
    }
  }))
  .views(self => ({
    get itemsLeft () {
      return self.todos.filter(todo => !todo.isDone).length
    }
  }))
