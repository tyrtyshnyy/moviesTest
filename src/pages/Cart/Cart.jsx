import React, { useEffect, Fragment } from 'react'
import './Cart.scss'
import { NavLink, Link } from 'react-router-dom'

import Spinner from '../../components/Spinner/Spinner'
import CommentsForm from '../../components/Comments/CommentsForm'
import Header from '../../components/Header/Header'

import { getCurrentMovie } from '../../redux/actionAsync/films'
import { useSelector, useDispatch } from 'react-redux'

function Cart(props) {
    const dispatch = useDispatch()
    const { currentMovie } = useSelector((state) => state.films)
    useEffect(() => {
        const id = props.match.params.id;
        dispatch(getCurrentMovie(id));
    }, []);

    return (
        <Fragment>
            {currentMovie ?
                <div>
                    <Header
                        title={<Link className="link" to='/'>{currentMovie.title_english}</Link>}
                        nav={<NavLink to='/'><button className="back"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.68981 13.7414L2.28356 8.69754L6.68981 3.6537C7.04588 3.24565 7.00434 2.62601 6.5963 2.26962C6.18825 1.91355 5.56894 1.95541 5.21222 2.36313L0.242297 8.0524C-0.0807656 8.42187 -0.0807656 8.97349 0.242297 9.34296L5.21227 15.0323C5.40647 15.2539 5.6782 15.3678 5.95153 15.3678C6.18042 15.3678 6.41025 15.288 6.5963 15.1255C7.00439 14.7691 7.0462 14.1494 6.68981 13.7414Z" fill="white" />
                            <path d="M16.8717 7.71655H0.980906C0.439125 7.71655 0 8.15563 0 8.69746C0 9.23924 0.439125 9.67837 0.980906 9.67837H16.8717C19.7206 9.67837 22.0382 11.9959 22.0382 14.8445C22.0382 17.6931 19.7206 20.0106 16.8717 20.0106H2.28881C1.74703 20.0106 1.30791 20.4498 1.30791 20.9916C1.30791 21.5333 1.74703 21.9725 2.28881 21.9725H16.8717C20.8019 21.9725 24 18.7747 24 14.8445C24 10.9143 20.8022 7.71655 16.8717 7.71655Z" fill="white" />
                        </svg>
                        </button></NavLink>} />
                    <div className="container">
                        <div className="more" >
                            <div className="film">
                                <div className="film__img">
                                    <img src={currentMovie.large_cover_image} alt="film" />
                                    <div className="film__img-rating">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0)">
                                                <path d="M19.9479 7.67185C19.8169 7.26687 19.4577 6.97923 19.0328 6.94093L13.2602 6.41678L10.9776 1.07408C10.8093 0.682532 10.426 0.429077 10.0001 0.429077C9.57422 0.429077 9.19091 0.682532 9.0226 1.075L6.73998 6.41678L0.966514 6.94093C0.542309 6.98015 0.184023 7.26687 0.0523365 7.67185C-0.0793503 8.07683 0.0422654 8.52102 0.363166 8.80103L4.72653 12.6277L3.43987 18.2954C3.34573 18.7122 3.50747 19.1429 3.85325 19.3929C4.0391 19.5272 4.25655 19.5955 4.47582 19.5955C4.66488 19.5955 4.85242 19.5446 5.02073 19.4438L10.0001 16.4679L14.9776 19.4438C15.3419 19.663 15.801 19.643 16.146 19.3929C16.492 19.1422 16.6536 18.7113 16.5594 18.2954L15.2728 12.6277L19.6361 8.80179C19.957 8.52102 20.0796 8.07759 19.9479 7.67185Z" fill="#299DED" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0">
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        {currentMovie.rating}
                                    </div>
                                </div>
                                <div className="film__info">
                                    <p className="film__info-title">{currentMovie.title_english}</p>
                                    <p className="film__info-year">{currentMovie.year}</p>
                                    <>
                                        {currentMovie.genres.map((i, index) => <><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="6.5" cy="6.5" r="6.5" fill="#606365" />
                                        </svg>
                                            <span key={index} className="film__info-genres">{i}</span> </>)}
                                    </>
                                    <p className="film__info-synonpsis">Synonpsis</p>
                                    <div className="film__info-description">{currentMovie.description_intro}</div>
                                    <p className="film__info-synonpsis">Comments</p>
                                    <CommentsForm filmId={currentMovie.id} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <Spinner />
            }
        </Fragment>
    )
}

export default Cart
