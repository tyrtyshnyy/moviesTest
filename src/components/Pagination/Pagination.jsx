import React from 'react'
import './Pagination.scss'

function Pagination({children, onClick, className}) {
    return (
        <button onClick={onClick}  className={className}>{children}</button>
    )
}

export default Pagination
