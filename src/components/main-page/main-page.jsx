import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import FilmCardList from "../film-cards-list/film-card-list";
import PageFooter from "../page-footer/page-footer";
import UserBlock from "../user-block/user-block";
import GenresList from "../genres-list/genres-list";
import {filmsCount} from "../../const";

const MainPage = (props) => {
  const {promoFilm, films, filteredFilms, onFilmCardClick, activeGenre, onGenreClick} = props;
  const {title, image, genre, year, bgImage, id} = promoFilm;

  const renderedFilms = filteredFilms.slice(0, filmsCount.PER_STEP);

  return (
    <div>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={bgImage} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <UserBlock />

        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={image} alt={title} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{year}</span>
              </p>

              <div className="movie-card__buttons">
                <Link to={`/player/${id}/`} className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <Link to="/mylist" className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList films={films} activeGenre={activeGenre} onGenreClick={onGenreClick} />

          <FilmCardList films={renderedFilms} onFilmCardClick={onFilmCardClick} />

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <PageFooter />

      </div>
    </div>
  );
};

MainPage.propTypes = {
  promoFilm: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    bgImage: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }),
  films: PropTypes.array.isRequired,
  filteredFilms: PropTypes.array.isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired
};

export default MainPage;
