import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import FilmCardListWithBtn from "../film-card-list/film-card-list-with-btn";
import PageFooter from "../page-footer/page-footer";
import UserBlock from "../user-block/user-block";
import GenresList from "../genres-list/genres-list";
import MyListButton from "../my-list-button/my-list-button";
import {connect} from "react-redux";
import {AppRoute} from "../../route";

const MainPage = (props) => {
  const {promoFilm, onFilmCardClick} = props;
  const {title, image, genre, year, bgImage, id, isFavorite} = promoFilm;

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
                <Link to={AppRoute.PLAYER + id} className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>

                <MyListButton id={id} isFavorite={isFavorite} />

              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList />

          <FilmCardListWithBtn onFilmCardClick={onFilmCardClick} {...props} />

        </section>

        <PageFooter />

      </div>
    </div>
  );
};

MainPage.propTypes = {
  promoFilm: PropTypes.shape({
    title: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.number,
    image: PropTypes.string,
    bgImage: PropTypes.string,
    id: PropTypes.number,
    isFavorite: PropTypes.bool
  }),
  onFilmCardClick: PropTypes.func.isRequired
};

const mapStateToProps = ({DATA}) => ({
  promoFilm: DATA.promoFilm
});

export {MainPage};
export default connect(mapStateToProps)(MainPage);
