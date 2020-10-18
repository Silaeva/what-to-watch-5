import React, {PureComponent} from "react";
import {Redirect} from 'react-router-dom';
import FilmPageOverview from '../film-page-overview/film-page-overview';
import FilmPageDetails from '../film-page-details/film-page-details';
import FilmPageReviews from '../film-page-reviews/film-page-reviews';
import {PropTypes} from 'prop-types';

const FilmNav = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      filmNav: FilmNav.OVERVIEW,
    };
  }

  render() {
    const {film} = this.props;
    const {genre, year, rating, description, director, actors, duration, reviews} = film;

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
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">

            {
              Object.values(FilmNav).map((value, i) => {
                return (
                  <li
                    key={i}
                    className={value === this.state.filmNav ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
                    <a
                      onClick={() => {
                        this.setState({
                          filmNav: value,
                        });
                      }}
                      href="#"
                      className="movie-nav__link">{value}</a>
                  </li>
                );
              })
            }

          </ul>
        </nav>

        {getFilmPageContent()}

      </div>
    );
  }
}

Tabs.propTypes = {
  film: PropTypes.shape({
    rating: PropTypes.shape({
      score: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired
    }),
    description: PropTypes.array.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    reviews: PropTypes.array.isRequired,
    duration: PropTypes.string.isRequired,
  })
};

export default Tabs;
