import React from "react";
import PropTypes from "prop-types";
import FilmCardList from "../film-cards-list/film-card-list";
import LogoHeader from "../logo-header/logo-header";
import UserBlock from "../user-block/user-block";
import PageFooter from "../page-footer/page-footer";

const MyList = (props) => {
  const {films, onFilmCardClick} = props;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">

        <LogoHeader />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />

      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmCardList films={films} onFilmCardClick={onFilmCardClick} />

      </section>

      <PageFooter />

    </div>
  );
};

MyList.propTypes = {
  films: PropTypes.array.isRequired,
  onFilmCardClick: PropTypes.func.isRequired
};

export default MyList;
