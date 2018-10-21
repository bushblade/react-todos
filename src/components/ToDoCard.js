import React from 'react'
import ToDos from './ToDos'
import ToDoCardHeader from './ToDoCardHeader'
import PropTypes from 'prop-types'

const ToDoCard = ({ id, deleteCard, updateTitle, title }) => {
  return (
    <div className="column is-one-third-desktop is-half-tablet">
      <div className="card todo-card">
        <ToDoCardHeader deleteCard={deleteCard} id={id} updateTitle={updateTitle} title={title} />
        <div className="card-content">
          <ToDos id={id} />
        </div>
      </div>
    </div>
  )
}

ToDoCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  deleteCard: PropTypes.func.isRequired,
  updateTitle: PropTypes.func.isRequired
}

export default ToDoCard
