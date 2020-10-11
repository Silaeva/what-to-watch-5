import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import FilmPage from "../film-page/film-page";
import AddReview from "../add-review/add-review";
import Player from "../player/player";

const App = (props) => {
  const {promoFilm, films} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact
          path="/"
          render={({history}) => (
            <MainPage
              promoFilm={promoFilm}
              films={films}
              onFilmCardClick={(id) => history.push(`/films/${id}`)} />
          )} />
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList films={films} />
        </Route>
        <Route exact
          path="/films/"
          render={({history}) => (
            <FilmPage
              onFilmCardClick={(id) => history.push(`/${id}`)}
              films={films} />
          )}
        >
        </Route>
        <Route exact path="/films/:id/review">
          <AddReview promoFilm={promoFilm} />
        </Route>
        <Route exact path="/player/:id">
          <Player />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  promoFilm: PropTypes.object.isRequired,
  films: PropTypes.array.isRequired
};

export default App;
