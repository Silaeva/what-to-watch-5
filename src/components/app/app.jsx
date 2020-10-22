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
  const {promoFilm} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact
          path="/"
          render={({history}) => (
            <MainPage
              promoFilm={promoFilm}
              onFilmCardClick={(id) => history.push(`/films/${id}`)}
            />
          )} />
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact
          path="/mylist"
          render={({history}) => (
            <MyList
              onFilmCardClick={(id) => history.push(`/films/${id}`)}
            />
          )}
        />
        <Route exact
          path="/films/:id"
          render={({history, match}) => (
            <FilmPage
              currentFilmId={match.params.id}
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
            />
          )}
        />
        <Route exact path="/player/:id">
          <Player />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  promoFilm: PropTypes.object.isRequired,
};

export default App;
