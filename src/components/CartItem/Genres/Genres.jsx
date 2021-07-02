import React from 'react'

function index({genre, className}) {
    return (
        <span className={className}>
        {genre} <br/>
        </span>
    )
}

export default index