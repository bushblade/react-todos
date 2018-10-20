import React from 'react'
import ToDos from './ToDos'
import ToDoCardHeader from './ToDoCardHeader'

const ToDoCard = ({ id, deleteCard }) => {
  return (
    <div className="column is-one-third-desktop is-half-tablet">
      <div className="card todo-card">
        <ToDoCardHeader deleteCard={deleteCard} id={id} />
        <div className="card-content">
          <ToDos id={id} />
        </div>
      </div>
    </div>
  )
}

export default ToDoCard
