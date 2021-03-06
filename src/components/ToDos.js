import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
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
        <CSSTransitionGroup
          transitionName="todos"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={100}>
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
            <p onClick={() => addTodo()}>This to do list is empty...</p>
          )}
        </CSSTransitionGroup>
        <br />
        <AddNewTodo add={addTodo} />
      </>
    )
  }
}
