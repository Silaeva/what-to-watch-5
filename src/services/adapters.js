const adaptFilmToClient = (film) => {
  const adaptedFilm = Object.assign(
      {},
      {
        srcVideo: film.video_link,
        previewVideo: film.preview_video_link,
        id: film.id,
        title: film.name,
        description: film.description,
        image: film.poster_image,
        previewImage: film.preview_image,
        genre: film.genre,
        year: film.released,
        duration: film.run_time,
        director: film.director,
        actors: film.starring.join(`, `),
        rating: {
          score: film.rating,
          count: film.scores_count
        },
        bgImage: film.background_image,
        bgColor: film.background_color,
        isFavorite: film.is_favorite
      }
  );
  return adaptedFilm;
};

const adaptCommentToClient = (comment) => {
  const adaptedComment = Object.assign(
      {},
      {
        id: comment.id,
        text: comment.comment,
        rating: comment.rating,
        user: comment.user.name,
        userId: comment.user.id,
        date: comment.date
      }
  );

  return adaptedComment;
};

export {adaptFilmToClient, adaptCommentToClient};
