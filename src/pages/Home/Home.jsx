import React from 'react'
import './Home.scss';

import CartItem from '../../components/CartItem'
import Header from '../../components/Header/Header'
import Pagination from '../../components/Pagination/Pagination';

import { useDispatch, useSelector } from 'react-redux'
import { getFilms } from '../../redux/actionAsync/films'
import { createPages } from '../../utils/createPages';
import { setCurrentPage } from '../../redux/reducers/reducer'


function Home() {
  const { movies } = useSelector((state) => state.films.items)
  const { isFetching, currentPage, perPage, totalCount } = useSelector((state) => state.films)


  React.useEffect(() => {
    dispatch(getFilms(currentPage, perPage))
  }, [currentPage])

  const pagesCount = Math.ceil(totalCount / perPage)
  const dispatch = useDispatch()

  const pages = []
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
        <div className="spin-wrapper">
          <div className="spinner">
          </div>
        </div>
      }

    </div>
  )
}

export default Home
