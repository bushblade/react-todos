import React from 'react'
import ToDos from './ToDos'

const ToDoCard = ({ id }) => {
  return (
    <div className="card todo-card" style={{ marginTop: '3rem' }}>
      <header className="card-header">
        <p className="card-header-title">To do's are saved in local storage</p>
      </header>
      <div className="card-content">
        <ToDos id={id} />
      </div>
    </div>
  )
}

export default ToDoCard
