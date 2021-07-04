import React from 'react'
import PropTypes from 'prop-types'
import './Header.scss'

function Header({ title, nav }) {

  return (
    <div className="header">
      <div className="container container__header">
        <h1 className="header__title">{title}</h1>
        <nav className="nav">
          {nav}
        </nav>
      </div>
    </div>
  )
}

export default Header

Header.propTypes = {
  title: PropTypes.any,
  nav: PropTypes.any
}
