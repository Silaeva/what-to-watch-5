import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import FilmCardList from "../film-card-list/film-card-list";
import LogoHeader from "../logo-header/logo-header";
import UserBlock from "../user-block/user-block";
import PageFooter from "../page-footer/page-footer";
import Tabs from "../tabs/tabs";
import MyListButton from "../my-list-button/my-list-button";
import Loading from "../loading/loading";
import ErrorScreen from "../error-screen/error-screen";
import {filmsCount, AuthorizationStatus} from "../../const";
import {AppRoute} from "../../route";
import {connect} from "react-redux";
import {fetchFilmById} from "../../store/api-actions";
import {setIsFilmByIdLoading} from "../../store/action";

import withActiveCard from "../../hocs/with-active-card/with-active-card";
import withActiveTab from "../../hocs/with-active-tab/with-active-tab";

const FilmCardListWrapped = withActiveCard(FilmCardList);
const TabsWrapped = withActiveTab(Tabs);

const FilmPage = (props) => {
  const {films, onFilmCardClick, currentFilmId, authorizationStatus, loadFilm, filmById, isFilmByIdLoading, isFilmByIdLoadError} = props;

  useEffect(() => {
    loadFilm(currentFilmId);
  }, [currentFilmId]);

  if (isFilmByIdLoading) {
    return (
      <Loading />
    );
  } else if (isFilmByIdLoadError) {
    return (
      <ErrorScreen />
    );
  }

  const {title, genre, year, image, id, bgImage, bgColor, isFavorite} = filmById;
  const similarFilms = films.filter((film) => film.genre === genre).slice(0, filmsCount.SIMILAR);

  return (
    <div>
      <section className="movie-card movie-card--full" style={{backgroundColor: bgColor}}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={bgImage} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">

            <LogoHeader />

            <UserBlock />

          </header>

          <div className="movie-card__wrap">
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

                {
                  authorizationStatus === AuthorizationStatus.AUTH
                    ?
                    <Link to={`/films/${id}/review`} className="btn movie-card__button">Add review</Link>
                    :
                    ``
                }
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={image} alt={title} width="218" height="327" />
            </div>

            <TabsWrapped film={filmById} />

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmCardListWrapped onFilmCardClick={onFilmCardClick} films={similarFilms} />

        </section>

        <PageFooter />

      </div>
    </div>
  );
};

FilmPage.propTypes = {
  currentFilmId: PropTypes.number.isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  films: PropTypes.array.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  loadFilm: PropTypes.func.isRequired,
  filmById: PropTypes.shape({
    title: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.number,
    image: PropTypes.string,
    bgImage: PropTypes.string,
    id: PropTypes.number,
    isFavorite: PropTypes.bool,
    bgColor: PropTypes.string
  }),
  isFilmByIdLoading: PropTypes.bool.isRequired,
  isFilmByIdLoadError: PropTypes.bool.isRequired
};

const mapStateToProps = ({DATA, USER}) => ({
  films: DATA.films,
  authorizationStatus: USER.authorizationStatus,
  filmById: DATA.filmById,
  isFilmByIdLoading: DATA.isFilmByIdLoading,
  isFilmByIdLoadError: DATA.isFilmByIdLoadError,
});

const mapDispatchToProps = (dispatch) => ({
  loadFilm(id) {
    dispatch(setIsFilmByIdLoading(true));
    dispatch(fetchFilmById(id));
  }
});

export {FilmPage};
export default connect(mapStateToProps, mapDispatchToProps)(FilmPage);
