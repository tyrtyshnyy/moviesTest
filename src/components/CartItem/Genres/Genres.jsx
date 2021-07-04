import React from 'react'
import PropTypes from 'prop-types'

function Genres({genre, className}) {
    return (
        <span className={className}>
        {genre} <br/>
        </span>
    )
}

export default Genres

Genres.propTypes = {
    genre: PropTypes.string,
    className: PropTypes.string
}