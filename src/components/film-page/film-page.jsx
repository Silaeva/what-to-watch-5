import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Redirect} from 'react-router-dom';
import {Link} from "react-router-dom";
import FilmCardList from "../film-cards-list/film-card-list";
import FilmPageOverview from '../film-page-overview/film-page-overview';
import FilmPageDetails from '../film-page-details/film-page-details';
import FilmPageReviews from '../film-page-reviews/film-page-reviews';

const FilmNav = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

class FilmPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      filmNav: FilmNav.OVERVIEW,
    };
  }

  render() {
    const {films} = this.props;
    const {title, genre, year, image, rating, description, director, actors, duration, reviews} = films[0];

    const getFilmPageContent = () => {
      switch (this.state.filmNav) {
        case FilmNav.OVERVIEW:
          return (
            <FilmPageOverview
              description={description}
              director={director}
              actors={actors}
              rating={rating}
            />
          );
        case FilmNav.DETAILS:
          return (
            <FilmPageDetails
              director={director}
              duration={duration}
              actors={actors}
              genre={genre}
              year={year}
            />
          );
        case FilmNav.REVIEWS:
          return (
            <FilmPageReviews reviews={reviews}/>
          );
      }
      return <Redirect to="/" />;
    };

    return (
      <div>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src="/img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">
              <div className="logo">
                <Link to="/" href="main.html" className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </Link>
              </div>

              <div className="user-block">
                <div className="user-block__avatar">
                  <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </div>
            </header>

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{year}</span>
                </p>

                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <Link to="/mylist" className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </Link>
                  <Link to="/films/:id/review" href="add-review.html" className="btn movie-card__button">Add review</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={image} alt={title} width="218" height="327" />
              </div>

              <div className="movie-card__desc">
                <nav className="movie-nav movie-card__nav">
                  <ul className="movie-nav__list">
                    <li className="movie-nav__item movie-nav__item--active">
                      <a
                        onClick={() => {
                          this.setState({
                            filmNav: FilmNav.OVERVIEW,
                          });
                        }}
                        href="#"
                        className="movie-nav__link">Overview</a>
                    </li>
                    <li className="movie-nav__item">
                      <a
                        onClick={() => {
                          this.setState({
                            filmNav: FilmNav.DETAILS,
                          });
                        }}
                        href="#"
                        className="movie-nav__link">Details</a>
                    </li>
                    <li className="movie-nav__item">
                      <a
                        onClick={() => {
                          this.setState({
                            filmNav: FilmNav.REVIEWS,
                          });
                        }}
                        href="#"
                        className="movie-nav__link">Reviews</a>
                    </li>
                  </ul>
                </nav>

                {getFilmPageContent()}

              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <FilmCardList films={films.slice(0, 4)} />

          </section>

          <footer className="page-footer">
            <div className="logo">
              <a href="main.html" className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

FilmPage.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      score: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired
    }),
    description: PropTypes.array.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    reviews: PropTypes.array.isRequired
  }))
};

export default FilmPage;