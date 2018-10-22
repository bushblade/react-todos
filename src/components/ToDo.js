import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ToDo extends Component {
  componentDidMount() {
    const { text, id } = this.props.todo
    let ref = this.refs[`todo${id}`]
    if (text.length === 0) {
      ref.focus()
      ref.classList.add('selected-todo')
    }
  }

  render() {
    const { todo: { text, id, checked }, check, del, edit, addTodo } = this.props // prettier-ignore

    return (
      <div className="columns is-mobile is-gapless todo">
        <div className="column is-1">
          <span className="icon" onClick={() => check(id)} style={{ cursor: 'pointer' }}>
            {checked ? <i className="far fa-check-square" /> : <i className="far fa-square" />}
          </span>
        </div>
        <div className="column is-10">
          <div
            style={{ width: '100%' }}
            contentEditable
            suppressContentEditableWarning
            className={checked ? 'checked' : ''}
            ref={`todo${id}`}
            onFocus={() => {
              this.refs[`todo${id}`].classList.add('selected-todo')
            }}
            onKeyDown={e => {
              if (e.keyCode === 13) {
                this.refs[`todo${id}`].blur()
                addTodo()
                e.preventDefault()
              }
            }}
            onBlur={({ target: { textContent } }) => {
              this.refs[`todo${id}`].classList.remove('selected-todo')
              textContent.length === 0 ? del(id) : edit(id, textContent)
            }}>
            {text}
          </div>
        </div>
        <div className="column is-1">
          <span className="icon" onClick={() => del(id)} style={{ cursor: 'pointer' }}>
            <i className="fas fa-times" />
          </span>
        </div>
      </div>
    )
  }
}

ToDo.propTypes = {
  todo: PropTypes.object.isRequired,
  check: PropTypes.func.isRequired,
  del: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired
}

export default ToDo
