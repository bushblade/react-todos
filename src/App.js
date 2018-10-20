import React from 'react'
import ToDos from './components/ToDos'
import 'bulma/css/bulma.css'
import 'animate.css/animate.css'
import './styles.css'

export default function App() {
  return (
    <div className="App container">
      <div className="columns is-centered">
        <div className="column is-half">
          <div className="card todo-card" style={{ marginTop: '3rem' }}>
            <header className="card-header">
              <p className="card-header-title">To do's are saved in local storage</p>
            </header>
            <div className="card-content">
              <ToDos />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
