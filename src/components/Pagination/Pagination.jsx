import React from 'react'
import PropTypes from 'prop-types'
import './Pagination.scss'

function Pagination({ children, onClick, className }) {
    return (
        <button onClick={onClick} className={className}>{children}</button>
    )
}

export default Pagination

Pagination.propTypes = {
    children: PropTypes.number,
    onClick: PropTypes.func,
    className: PropTypes.string
}
