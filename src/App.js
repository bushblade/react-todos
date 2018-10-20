import React, { Component } from 'react'
import ToDoCard from './components/ToDoCard'
import AddCardButton from './components/AddCardButton'
import uuid from 'uuid'
import 'bulma/css/bulma.css'
import 'bulma-extensions/bulma-tooltip/dist/css/bulma-tooltip.min.css'
import 'animate.css/animate.css'
import './styles.css'

export default class App extends Component {
  state = {
    todoCards: []
  }

  componentDidUpdate() {
    if (localStorage.getItem('todo-cards') !== undefined) {
      localStorage.setItem('todo-cards', JSON.stringify(this.state))
    }
  }

  addCard = () => {
    console.log('add card clicked')
    this.setState(pState => ({ todoCards: [...pState.todoCards, { id: uuid() }] }))
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
    const { state: {todoCards}, addCard } = this // prettier-ignore
    return (
      <div className="App container">
        <div className="columns is-centered">
          <div className="column is-half">
            {todoCards.map(card => (
              <ToDoCard id={card.id} key={card.id} />
            ))}
          </div>
        </div>
        <AddCardButton addCard={addCard} />
      </div>
    )
  }
}
