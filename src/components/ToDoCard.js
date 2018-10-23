import React from 'react'
import ToDos from './ToDos'
import ToDoCardHeader from './ToDoCardHeader'
import PropTypes from 'prop-types'

const ToDoCard = ({ id, deleteCard, updateTitle, title, color, updateColor }) => {
  return (
    <div className="column is-one-third-desktop is-half-tablet">
      <div className="card todo-card" style={{ backgroundColor: color }}>
        <ToDoCardHeader
          deleteCard={deleteCard}
          id={id}
          updateTitle={updateTitle}
          updateColor={updateColor}
          title={title}
          color={color}
        />
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
  updateTitle: PropTypes.func.isRequired,
  updateColor: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
}

export default ToDoCard
