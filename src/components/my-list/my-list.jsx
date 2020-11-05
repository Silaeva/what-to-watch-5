import React from "react";
import PropTypes from "prop-types";
import FilmCardList from "../film-cards-list/film-card-list";
import LogoHeader from "../logo-header/logo-header";
import UserBlock from "../user-block/user-block";
import PageFooter from "../page-footer/page-footer";
import {connect} from "react-redux";
// import {fetchFavoriteFilms} from "../../store/api-actions";

import withActiveCard from "../../hocs/with-active-card/with-active-card";

const FilmCardListWrapped = withActiveCard(FilmCardList);

const MyList = (props) => {
  const {films, onFilmCardClick} = props; // getFavoriteFilms // favoriteFilms

  return (
    <div className="user-page">
      <header className="page-header user-page__head">

        <LogoHeader />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />

      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmCardListWrapped films={films} onFilmCardClick={onFilmCardClick} />

      </section>

      <PageFooter />

    </div>
  );
};

MyList.propTypes = {
  films: PropTypes.array.isRequired, // favoriteFilms
  onFilmCardClick: PropTypes.func.isRequired,
  // getFavoriteFilms: PropTypes.func.isRequired
};

const mapStateToProps = ({DATA}) => ({
  films: DATA.films, // favoriteFilms
});

// const mapDispatchToProps = (dispatch) => {
//   getFavoriteFilms() {
//     dispatch(fetchFavoriteFilms());
//   }
// }

export {MyList};
export default connect(mapStateToProps)(MyList);
