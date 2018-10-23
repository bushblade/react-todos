import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import ToDoCard from './components/ToDoCard'
import AddCardButton from './components/AddCardButton'
import 'bulma/css/bulma.css'
import 'bulma-extensions/bulma-tooltip/dist/css/bulma-tooltip.min.css'
import 'animate.css/animate.css'
import './styles.css'
import { updateTitle, delCard, newCard, switchColor } from './components/stateActions/AppActions'
import defaultCards from './components/stateActions/defaultCards'

export default class App extends Component {
  state = {
    todoCards: []
  }

  addCard = () => this.setState(newCard())

  updateCardTitle = (id, title) => this.setState(updateTitle(id, title))

  deleteCard = id => this.setState(delCard(id))

  updateColor = (id, color) => this.setState(switchColor(id, color))

  componentDidUpdate() {
    if (localStorage.getItem('todo-cards') !== undefined) {
      localStorage.setItem('todo-cards', JSON.stringify(this.state))
    }
  }

  componentDidMount() {
    if (localStorage.getItem('todo-cards') === null) {
      defaultCards()
    }
    this.setState(JSON.parse(localStorage.getItem('todo-cards')))
  }
  render() {
    const { state: { todoCards }, addCard, deleteCard, updateCardTitle, updateColor } = this // prettier-ignore
    return (
      <div className="App container">
        <CSSTransitionGroup
          component="div"
          className="columns is-multiline"
          transitionName="todos"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={100}>
          {todoCards.map(({ id, title, color }) => (
            <ToDoCard
              id={id}
              title={title}
              color={color}
              key={id}
              deleteCard={deleteCard}
              updateTitle={updateCardTitle}
              updateColor={updateColor}
            />
          ))}
        </CSSTransitionGroup>
        <AddCardButton addCard={addCard} />
      </div>
    )
  }
}
