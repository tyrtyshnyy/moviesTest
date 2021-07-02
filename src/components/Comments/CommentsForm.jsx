import React, { useState, useEffect, Fragment } from 'react'

import Comments from './Comments'

import { useSelector } from 'react-redux'

function CommentsForm() {

  const { currentMovie } = useSelector((state) => state.films)
  const filmId = currentMovie.id
  const textareaRef = React.useRef(null);
  function getComments(filmId) {
    
    let localStorageComments = localStorage.getItem("comments") || "[]";
    let commentsDB = JSON.parse(localStorageComments);

   
    let currentMovieComments = commentsDB.find(
      (comment) => comment.filmId === filmId
    ) || { filmId: filmId, comments: [] };
    return { commentsDB, currentMovieComments };
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (comment.trim()) {
      let { commentsDB, currentMovieComments } = getComments(filmId);
      let date = new Date();
      date.toLocaleDateString();
      let newComment = {
        id: Math.floor(Math.random() * 10000),
        date: date.toLocaleDateString(),
        author: "You",
        value: comment,
      };

      currentMovieComments.comments = [
        newComment,
        ...currentMovieComments.comments,
      ];

      let newDB;
      if (commentsDB.some((comments) => comments.filmId === filmId)) {
        newDB = [
          ...commentsDB.map((comments) =>
            comments.filmId === filmId ? currentMovieComments : comments
          ),
        ];
      } else {
        newDB = [...commentsDB, currentMovieComments];
      }
      localStorage.setItem("comments", JSON.stringify(newDB));

      setComments(currentMovieComments);
      setComment("");
    }
  }

  function deleteComment(id) {
    let { commentsDB, currentMovieComments } = getComments(filmId);
    currentMovieComments.comments = [
      ...currentMovieComments.comments.filter((comment) => comment.id !== id),
    ];
    let newDB = [
      ...commentsDB.map((comments) =>
        comments.filmId === filmId ? currentMovieComments : comments
      ),
    ];
    localStorage.setItem("comments", JSON.stringify(newDB));

    setComments(currentMovieComments);
  }

  let [comment, setComment] = useState("");
  let [comments, setComments] = useState(null);

  useEffect(() => {
    let { currentMovieComments } = getComments(filmId);
    setComments(currentMovieComments || null);
  }, []);

  return (
    <Fragment>
      <div className="comment__body">
        {comments
          ? comments.comments.map((comment, index) => (
            <Comments
              date={comment.date}
              author={comment.author}
              value={comment.value}
              id={comment.id}
              fn={deleteComment}
              key={index}
            />
          ))
          : "No comments"}
      </div>
      <form onSubmit={handleSubmit} className="form" >
        <div className="form__wrapper">

          <textarea name='text' ref={textareaRef} value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Leave a comment" className="form__textarea"></textarea>
          <button onSubmit={handleSubmit} className="back form__submit"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.68981 13.7414L2.28356 8.69754L6.68981 3.6537C7.04588 3.24565 7.00434 2.62601 6.5963 2.26962C6.18825 1.91355 5.56894 1.95541 5.21222 2.36313L0.242297 8.0524C-0.0807656 8.42187 -0.0807656 8.97349 0.242297 9.34296L5.21227 15.0323C5.40647 15.2539 5.6782 15.3678 5.95153 15.3678C6.18042 15.3678 6.41025 15.288 6.5963 15.1255C7.00439 14.7691 7.0462 14.1494 6.68981 13.7414Z" fill="white" />
            <path d="M16.8717 7.71655H0.980906C0.439125 7.71655 0 8.15563 0 8.69746C0 9.23924 0.439125 9.67837 0.980906 9.67837H16.8717C19.7206 9.67837 22.0382 11.9959 22.0382 14.8445C22.0382 17.6931 19.7206 20.0106 16.8717 20.0106H2.28881C1.74703 20.0106 1.30791 20.4498 1.30791 20.9916C1.30791 21.5333 1.74703 21.9725 2.28881 21.9725H16.8717C20.8019 21.9725 24 18.7747 24 14.8445C24 10.9143 20.8022 7.71655 16.8717 7.71655Z" fill="white" />
          </svg>
          </button>
        </div>
      </form>
    </Fragment>
  )
}

export default CommentsForm
