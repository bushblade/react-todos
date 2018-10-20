const toggleCheck = id => prevState => ({
  todos: prevState.todos.map(t => {
    let todo = { ...t }
    if (t.id === id) todo.checked = !todo.checked
    return todo
  })
})

const newTodo = () => prevState => {
  let created = {
    text: '',
    id: Math.random(),
    checked: false
  }
  return {
    todos: [...prevState.todos, created]
  }
}

const deleteTodo = id => prevstate => ({
  todos: prevstate.todos.filter(todo => todo.id !== id)
})

const updateWithEdit = (id, val) => prevState => ({
  todos: prevState.todos.map(todo => {
    let edited = { ...todo }
    if (todo.id === id) edited.text = val
    return edited
  })
})

const defaultTodoList = () => ({
  todos: [
    {
      text: 'Delete me ...',
      id: Math.random(),
      checked: false
    },
    {
      text: 'This is a checked example',
      id: Math.random(),
      checked: true
    }
  ]
})

export { toggleCheck, newTodo, deleteTodo, updateWithEdit, defaultTodoList }
