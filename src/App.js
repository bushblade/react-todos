import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ToDoCard from './components/ToDoCard'
import AddCardButton from './components/AddCardButton'
import 'bulma/css/bulma.css'
import 'bulma-extensions/bulma-tooltip/dist/css/bulma-tooltip.min.css'
import 'animate.css/animate.css'
import './styles.css'
import { updateTitle, delCard, newCard } from './components/stateActions/AppActions'

export default class App extends Component {
  state = {
    todoCards: []
  }

  addCard = () => this.setState(newCard())

  updateCardTitle = (id, title) => this.setState(updateTitle(id, title))

  deleteCard = id => this.setState(delCard(id))

  componentDidUpdate() {
    if (localStorage.getItem('todo-cards') !== undefined) {
      localStorage.setItem('todo-cards', JSON.stringify(this.state))
    }
  }

  componentDidMount() {
    if (localStorage.getItem('todo-cards') !== null) {
      this.setState(JSON.parse(localStorage.getItem('todo-cards')))
    } else {
      this.setState(newCard())
    }
  }

  render() {
    const { state: { todoCards }, addCard, deleteCard, updateCardTitle } = this // prettier-ignore
    return (
      <div className="App container">
        <ReactCSSTransitionGroup
          component="div"
          className="columns is-multiline"
          transitionName="todos"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={199}>
          {todoCards.map(({ id, title }) => (
            <ToDoCard
              id={id}
              title={title}
              key={id}
              deleteCard={deleteCard}
              updateTitle={updateCardTitle}
            />
          ))}
        </ReactCSSTransitionGroup>
        <AddCardButton addCard={addCard} />
      </div>
    )
  }
}
