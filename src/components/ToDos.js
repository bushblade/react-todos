import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ToDo from './ToDo'
import AddNewTodo from './AddNewTodo'
import {
  toggleCheck,
  newTodo,
  deleteTodo,
  updateWithEdit,
  defaultTodoList
} from './stateActions'

export default class ToDos extends Component {
  state = {
    todos: []
  }

  componentDidUpdate() {
    if (localStorage.getItem('todos') !== undefined) {
      localStorage.setItem('todos', JSON.stringify(this.state))
    }
  }

  componentDidMount() {
    let storedTodos = localStorage.getItem('todos')
    if (storedTodos === null) {
      localStorage.setItem('todos', JSON.stringify(defaultTodoList()))
    }
    this.setState(JSON.parse(storedTodos))
  }

  addTodo = () => this.setState(newTodo())

  checkToggle = id => this.setState(toggleCheck(id))

  deleteIt = id => this.setState(deleteTodo(id))

  edit = (id, val) => this.setState(updateWithEdit(id, val))

  render() {
    const { state: { todos }, checkToggle, addTodo, deleteIt, edit } = this // prettier-ignore
    return (
      <>
        <ReactCSSTransitionGroup
          transitionName="todos"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={200}>
          {todos.length > 0 ? (
            todos.map(todo => (
              <ToDo
                todo={todo}
                check={checkToggle}
                del={deleteIt}
                edit={edit}
                key={todo.id}
              />
            ))
          ) : (
            <article class="message">
              <div class="message-body">You have no to do's</div>
            </article>
          )}
        </ReactCSSTransitionGroup>
        <br />
        <AddNewTodo add={addTodo} />
      </>
    )
  }
}
