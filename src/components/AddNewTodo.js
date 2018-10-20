import React from 'react'

const AddNewTodo = ({ add }) => (
  <div className="columns is-mobile">
    <div className="column">
      <a className="button is-fullwidth" onClick={add}>
        Add new to do
      </a>
    </div>
  </div>
)

export default AddNewTodo
