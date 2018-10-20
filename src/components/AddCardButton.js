import React from 'react'
import PropTypes from 'prop-types'

const AddCardButton = ({ addCard }) => {
  return (
    <button
      className="button is-primary is-rounded is-outlined add-card-button tooltip"
      data-tooltip="Add to do card"
      onClick={addCard}>
      <span className="icon">
        <i className="fas fa-plus" />
      </span>
    </button>
  )
}

AddCardButton.propTypes = {
  addCard: PropTypes.func.isRequired
}

export default AddCardButton
