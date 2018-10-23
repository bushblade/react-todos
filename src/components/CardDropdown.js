import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CardDropdown extends Component {
  state = {
    showDropdown: false,
    colors: ['Thistle', 'PaleTurquoise', 'PapayaWhip', 'LightSalmon', 'GhostWhite']
  }

  toggleDropdown = () => {
    this.setState(({ showDropdown }) => ({ showDropdown: !showDropdown }))
  }

  closeDropdown = e => {
    if (!e.target.classList.contains('color-pick')) {
      this.setState({ showDropdown: false })
      document.removeEventListener('click', this.closeDropdown)
    }
  }

  render() {
    const {
      state: { showDropdown, colors },
      toggleDropdown,
      closeDropdown
    } = this
    const { id, updateColor, color } = this.props

    return (
      <div className={showDropdown ? 'dropdown is-right is-active' : 'dropdown is-right'}>
        <div
          className="dropdown-trigger card-header-icon"
          onClick={() => {
            toggleDropdown()
            document.addEventListener('click', closeDropdown)
          }}>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true" />
          </span>
        </div>
        <div className="dropdown-menu" style={{ minWidth: '9.6rem' }}>
          <div className="dropdown-content" style={{ backgroundColor: color }}>
            <div className="dropdown-item color-pick">
              <p>
                {colors.map(color => (
                  <span className="icon color-pick" key={color}>
                    <span
                      className="color-pick-icon color-pick"
                      style={{ backgroundColor: color }}
                      onClick={() => {
                        updateColor(id, color)
                      }}
                    />
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

CardDropdown.propTypes = {
  id: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  updateColor: PropTypes.func.isRequired
}

export default CardDropdown
