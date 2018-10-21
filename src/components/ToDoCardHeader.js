import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ToDoCardHeader extends Component {
  render() {
    const { id, deleteCard, updateTitle, title } = this.props
    return (
      <header className="card-header">
        <p
          className="card-header-title"
          contentEditable
          suppressContentEditableWarning
          onBlur={({ target: { textContent } }) => updateTitle(id, textContent)}>
          {title}
        </p>
        <span className="card-header-icon" onClick={() => deleteCard(id)}>
          <span className="icon has-text-dark">
            <i className="fas fa-trash" />
          </span>
        </span>
      </header>
    )
  }
}

ToDoCardHeader.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  deleteCard: PropTypes.func.isRequired,
  updateTitle: PropTypes.func.isRequired
}

export default ToDoCardHeader
