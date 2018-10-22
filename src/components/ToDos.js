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
} from './stateActions/ToDosActions'

export default class ToDos extends Component {
  state = {
    title: '',
    id: '',
    todos: []
  }

  componentWillUnmount() {
    localStorage.removeItem(this.state.id)
  }

  componentDidUpdate() {
    const { id } = this.props
    if (localStorage.getItem(id) !== undefined) {
      localStorage.setItem(id, JSON.stringify(this.state))
    }
  }

  componentDidMount() {
    const { id } = this.props
    if (localStorage.getItem(id) === null) {
      localStorage.setItem(id, JSON.stringify(defaultTodoList(id)))
    }
    this.setState(JSON.parse(localStorage.getItem(id)))
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
                addTodo={addTodo}
              />
            ))
          ) : (
            <p>This to do list is empty...</p>
          )}
        </ReactCSSTransitionGroup>
        <br />
        <AddNewTodo add={addTodo} />
      </>
    )
  }
}
