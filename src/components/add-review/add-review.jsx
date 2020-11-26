import React from "react";
import {PropTypes} from "prop-types";
import {Link} from "react-router-dom";
import AddReviewForm from "../add-review-form/add-review-form";
import LogoHeader from "../logo-header/logo-header";
import UserBlock from "../user-block/user-block";
import {connect} from "react-redux";
import {AppRoute} from "../../route";
import filmProp from "../../film-prop";

import withUserReview from "../../hocs/with-user-review/with-user-review";

const AddReviewFormWrapped = withUserReview(AddReviewForm);

const AddReview = (props) => {
  const {films, currentFilmId} = props;

  const currentFilm = films.find((film) => film.id === currentFilmId);

  const {bgImage, title, image, bgColor} = currentFilm;

  return (
    <section className="movie-card movie-card--full" style={{backgroundColor: bgColor}}>
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={bgImage} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">

          <LogoHeader />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={AppRoute.FILMS + currentFilmId} href="movie-page.html" className="breadcrumbs__link">{title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={image} alt={title} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">

        <AddReviewFormWrapped currentFilmId={currentFilmId} />

      </div>

    </section>
  );
};

AddReview.propTypes = {
  currentFilmId: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(filmProp)
};

const mapStateToProps = ({DATA}) => ({
  films: DATA.films,
});

export {AddReview};
export default connect(mapStateToProps)(AddReview);
