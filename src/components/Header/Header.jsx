import React from 'react'


function Header({title, nav}) {
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
