import React from 'react'


import './Comments.scss'
function Comments({value, date, author, id, fn}) {
    


    return (
        <div className='comment'>
          <div className='comment__body'>
            <div className='comment__info'>
              <div className='comment__author'>{author}</div>
              <div className='comment__date'>{date}</div>
            </div>
            <div className='comment__value'>{value}</div>
            <div className='delete__button' onClick={() => fn(id)}></div>
          </div>
        </div>
      );  
    
 
}

export default Comments
