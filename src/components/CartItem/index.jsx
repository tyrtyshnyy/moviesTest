import React from 'react'
import Genre from './Genres'

import { Link } from 'react-router-dom'
import noPoster from '../../assets/img/noPoster.png'

import { useDispatch } from 'react-redux'
import { setCurrentMovie } from '../../redux/reducers/reducer'

import './CartItem.scss'

function CartItem({movies}) {
  const dispatch = useDispatch()


//сделать картинку при ошибке загрузки картинки

    return (
      
        <div className="cart__items">
          <Link to="/cart">
            <div  onClick={() => dispatch(setCurrentMovie(movies))} className="cart__items-active">
              
              <div className="cart__rating">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0)">
                  <path d="M31.9166 12.2751C31.7071 11.6271 31.1324 11.1669 30.4524 11.1056L21.2164 10.267L17.5642 1.71865C17.2949 1.09217 16.6816 0.686646 16.0002 0.686646C15.3188 0.686646 14.7055 1.09217 14.4362 1.72012L10.784 10.267L1.54642 11.1056C0.867694 11.1684 0.294437 11.6271 0.0837383 12.2751C-0.12696 12.923 0.0676246 13.6338 0.581066 14.0818L7.56245 20.2045L5.5038 29.2728C5.35316 29.9396 5.61196 30.6288 6.16519 31.0287C6.46256 31.2436 6.81047 31.353 7.16131 31.353C7.46381 31.353 7.76387 31.2714 8.03316 31.1103L16.0002 26.3487L23.9642 31.1103C24.547 31.4609 25.2817 31.4289 25.8337 31.0287C26.3871 30.6276 26.6457 29.9381 26.4951 29.2728L24.4364 20.2045L31.4178 14.083C31.9312 13.6338 32.1273 12.9243 31.9166 12.2751Z" fill="#299DED" />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <br/>
            
                {movies.rating === 0 ? 'No rating' : movies.rating}
                </div>
              <div className="cart__genre">{movies.genres && movies.genres.map((i,index,a) => index < 4 ?  <Genre key={index} genre={i} /> : null  )}</div>
              <div>
              <div className="cart__button">More</div>
              </div>
            </div>
            <div className="cart__info">
              <p className="cart__title">{movies.title_english}</p>
              <p className="cart__year">{movies.year}</p>
          </div>
          <img  src={movies.large_cover_image ? movies.large_cover_image : noPoster} alt="" />
          </Link>
          </div>
          
    )
}

export default CartItem
