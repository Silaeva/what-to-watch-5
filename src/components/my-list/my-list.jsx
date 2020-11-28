import React, {useEffect} from "react";
import PropTypes from "prop-types";
import FilmCardList from "../film-card-list/film-card-list";
import LogoHeader from "../logo-header/logo-header";
import UserBlock from "../user-block/user-block";
import PageFooter from "../page-footer/page-footer";
import {connect} from "react-redux";
import {fetchFavoriteFilms} from "../../store/api-actions";
import filmProp from "../../film-prop";

const MyList = (props) => {
  const {favoriteFilms, onFilmCardClick, getFavoriteFilms, isFavoritesLoading, isFavoritesLoadError} = props;

  useEffect(() => {
    getFavoriteFilms();
  }, []);

  const getMyListPageContent = () => {
    if (isFavoritesLoading && !isFavoritesLoadError) {
      return (
        <p>Loading...</p>
      );
    } else if (isFavoritesLoadError) {
      return (
        <p>Sorry, something went wrong!</p>
      );
    }

    return (
      <FilmCardList films={favoriteFilms} onFilmCardClick={onFilmCardClick} />
    );
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">

        <LogoHeader />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />

      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        {getMyListPageContent()}

      </section>

      <PageFooter />

    </div>
  );
};

MyList.propTypes = {
  favoriteFilms: PropTypes.arrayOf(filmProp),
  onFilmCardClick: PropTypes.func.isRequired,
  isFavoritesLoading: PropTypes.bool.isRequired,
  isFavoritesLoadError: PropTypes.bool.isRequired,
  getFavoriteFilms: PropTypes.func.isRequired
};

const mapStateToProps = ({DATA}) => ({
  favoriteFilms: DATA.favoriteFilms,
  isFavoritesLoading: DATA.isFavoritesLoading,
  isFavoritesLoadError: DATA.isFavoritesLoadError
});

const mapDispatchToProps = (dispatch) => ({
  getFavoriteFilms() {
    dispatch(fetchFavoriteFilms());
  }
});

export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
