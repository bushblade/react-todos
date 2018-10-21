import React from 'react'
import PropTypes from 'prop-types'

const ToDoCardHeader = ({ id, deleteCard }) => {
  return (
    <header className="card-header">
      <p className="card-header-title">To do's are saved in local storage</p>
      <span className="card-header-icon" onClick={() => deleteCard(id)}>
        <span className="icon has-text-dark">
          <i className="fas fa-trash" />
        </span>
      </span>
    </header>
  )
}

ToDoCardHeader.propTypes = {
  deleteCard: PropTypes.func.isRequired
}

export default ToDoCardHeader
