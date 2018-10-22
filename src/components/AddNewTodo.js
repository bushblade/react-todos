import React from 'react'

const AddNewTodo = ({ add }) => (
  <div className="columns is-mobile">
    <div className="column">
      <button className="button is-fullwidth is-dark is-outlined" onClick={add}>
        Add new to do
      </button>
    </div>
  </div>
)

export default AddNewTodo
