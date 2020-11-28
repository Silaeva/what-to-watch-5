import React, {useState, useCallback} from "react";
import {Redirect} from 'react-router-dom';
import FilmPageOverview from '../film-page-overview/film-page-overview';
import FilmPageDetails from '../film-page-details/film-page-details';
import FilmPageReviews from '../film-page-reviews/film-page-reviews';
import {FilmTab} from "../../const";
import filmProp from "../../film-prop";

const Tabs = (props) => {
  const {film} = props;
  const {genre, year, rating, description, director, actors, duration, id} = film;

  const [activeTab, setActiveTab] = useState(FilmTab.OVERVIEW);

  const handleActiveTab = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  const getFilmPageContent = () => {
    switch (activeTab) {
      case FilmTab.OVERVIEW:
        return (
          <FilmPageOverview
            description={description}
            director={director}
            actors={actors}
            rating={rating}
          />
        );
      case FilmTab.DETAILS:
        return (
          <FilmPageDetails
            director={director}
            duration={duration}
            actors={actors}
            genre={genre}
            year={year}
          />
        );
      case FilmTab.REVIEWS:
        return (
          <FilmPageReviews filmId={id}/>
        );
    }
    return <Redirect to="/" />;
  };

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">

          {
            Object.values(FilmTab).map((value, i) => {
              return (
                <li
                  key={i}
                  className={value === activeTab ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
                  <a
                    onClick={(evt) => {
                      evt.preventDefault();
                      handleActiveTab(value);
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
};

Tabs.propTypes = {
  film: filmProp
};

export default Tabs;
