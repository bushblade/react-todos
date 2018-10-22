import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CardDropdown from './CardDropdown'

class ToDoCardHeader extends Component {
  componentDidMount() {
    const { id } = this.props
    this.refs[`header${id}`].focus()
  }

  render() {
    const { id, deleteCard, updateTitle, title, updateColor, color } = this.props
    return (
      <header className="card-header">
        <p
          className="card-header-title"
          ref={`header${id}`}
          contentEditable
          suppressContentEditableWarning
          onFocus={e => {
            this.refs[`header${id}`].classList.add('selected-header')
          }}
          onBlur={({ target: { textContent } }) => {
            updateTitle(id, textContent)
            this.refs[`header${id}`].classList.remove('selected-header')
          }}
          onKeyDown={({ keyCode }) => {
            if (keyCode === 13) {
              this.refs[`header${id}`].blur()
            }
          }}>
          {title}
        </p>
        <CardDropdown id={id} updateColor={updateColor} color={color} />
        <span
          className="card-header-icon tooltip"
          onClick={() => deleteCard(id)}
          data-tooltip="Delete card">
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
  updateTitle: PropTypes.func.isRequired,
  updateColor: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
}

export default ToDoCardHeader
