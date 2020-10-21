import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import MainPage from "../main-page/main-page";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import FilmPage from "../film-page/film-page";
import AddReview from "../add-review/add-review";
import Player from "../player/player";

const App = (props) => {
  const {promoFilm, films, filteredFilms, activeGenre, onGenreClick} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact
          path="/"
          render={({history}) => (
            <MainPage
              promoFilm={promoFilm}
              films={films}
              filteredFilms={filteredFilms}
              onFilmCardClick={(id) => history.push(`/films/${id}`)}
              activeGenre={activeGenre}
              onGenreClick={onGenreClick}
            />
          )} />
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact
          path="/mylist"
          render={({history}) => (
            <MyList
              films={films}
              onFilmCardClick={(id) => history.push(`/films/${id}`)}
            />
          )}
        />
        <Route exact
          path="/films/:id"
          render={({history, match}) => (
            <FilmPage
              currentFilmId={match.params.id}
              films={films}
              onFilmCardClick={(id) => history.push(`/films/${id}`)}
            />
          )}
        >
        </Route>
        <Route exact
          path="/films/:id/review"
          render={({match}) => (
            <AddReview
              currentFilmId={match.params.id}
              films={films} />
          )}
        />
        <Route exact path="/player/:id">
          <Player />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  films: state.films,
  filteredFilms: state.filteredFilms,
  activeGenre: state.activeGenre,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(activeGenre) {
    dispatch(ActionCreator.changeFilter(activeGenre));
    dispatch(ActionCreator.getFilmsByGenre(activeGenre));
  }
});

App.propTypes = {
  films: PropTypes.array.isRequired,
  filteredFilms: PropTypes.array.isRequired,
  promoFilm: PropTypes.object.isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
