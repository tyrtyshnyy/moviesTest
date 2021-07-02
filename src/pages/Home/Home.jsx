import React from 'react'
import './Home.scss';

import CartItem from '../../components/CartItem/CartItem'
import Header from '../../components/Header/Header'
import Pagination from '../../components/Pagination/Pagination';
import Spinner from '../../components/Spinner/Spinner'

import { useDispatch, useSelector } from 'react-redux'
import { getFilms } from '../../redux/actionAsync/films'
import { setCurrentPage } from '../../redux/reducers/reducer'

import { createPages } from '../../utils/createPages';


function Home() {
  const dispatch = useDispatch()

  const { movies } = useSelector((state) => state.films.items)
  const { isFetching, currentPage, perPage, totalCount } = useSelector((state) => state.films)

  React.useEffect(() => {
    dispatch(getFilms(currentPage, perPage))
  }, [currentPage])



  const pages = []
  const pagesCount = Math.ceil(totalCount / perPage)
  createPages(pages, pagesCount, currentPage)

  return (
    <div className="wrapper">
      <Header title="Movies" nav={pages.map((i, index) =>
        <Pagination
          key={index}
          onClick={() => dispatch(setCurrentPage(i))}
          className={i === currentPage ? 'nav__link active' : 'nav__link'}>
          {i}
        </Pagination>)} />
      {isFetching ?
        <div className="main">
          <div className="container">
            <div className="cart">

              {movies && movies.map((item, index) =>
                <CartItem
                  key={index}
                  movies={item} />
              )}
            </div>
          </div>
        </div>
        :
        <Spinner />
      }
    </div>
  )
}

export default Home
