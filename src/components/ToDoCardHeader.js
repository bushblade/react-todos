import React from 'react'
import PropTypes from 'prop-types'

const ToDoCardHeader = ({ id, deleteCard }) => {
  return (
    <header className="card-header" onClick={() => deleteCard(id)}>
      <p className="card-header-title">To do's are saved in local storage</p>
      <a className="card-header-icon">
        <span className="icon has-text-dark">
          <i className="fas fa-trash" />
        </span>
      </a>
    </header>
  )
}

ToDoCardHeader.propTypes = {}

export default ToDoCardHeader
