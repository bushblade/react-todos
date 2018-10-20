import React, { Component } from 'react'
import ToDoCard from './components/ToDoCard'
import uuid from 'uuid'
import 'bulma/css/bulma.css'
import 'animate.css/animate.css'
import './styles.css'

export default class App extends Component {
  state = {
    todoCards: []
  }

  componentDidMount() {
    if (localStorage.getItem('todo-cards') !== null) {
      this.setState(JSON.parse(localStorage.getItem('todo-cards')))
    } else {
      const id = uuid()
      const defaultState = { todoCards: [{ id }] }
      localStorage.setItem('todo-cards', JSON.stringify(defaultState))
      this.setState(defaultState)
    }
  }

  render() {
    const { todoCards } = this.state
    return (
      <div className="App container">
        <div className="columns is-centered">
          <div className="column is-half">
            {todoCards.map(card => (
              <ToDoCard id={card.id} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}
