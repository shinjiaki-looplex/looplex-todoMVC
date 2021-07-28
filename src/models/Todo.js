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
      // console.log(self.todos.length)
      // for (let i = (self.todos.length - 1); i >= 0; i--) {
      //   console.log(i)
      //   if (self.todos[i].isDone) {
      //     self.todos[i].isDone = false
      //     self.todos[i].removeItem()
      //   }
      // }
      // console.log(self)
      self.todos.forEach(todo => {if (todo.isDone) {
        todo.isDone = false
        todo.removeItem()
      }})
    },
    selectAll (allDone) {
      self.todos.forEach(todo => todo.isDone = allDone)
    }
  }))
  .views(self => ({
    get itemsLeft () {
      return self.todos.filter(todo => !todo.isDone).length
    },
    // getfiltered todos
    // numberOfPeopleOlderThan(age) {
    //   return self.users.filter(user => user.age > age).length
    // } 
  }))
