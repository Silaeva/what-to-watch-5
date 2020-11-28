import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import FilmPage from "../film-page/film-page";
import AddReview from "../add-review/add-review";
import Player from "../player/player-container";
import Loading from "../loading/loading";
import ErrorScreen from "../error-screen/error-screen";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";
import {AppRoute} from '../../route';
import {connect} from "react-redux";

const App = (props) => {
  const {isLoading, isLoadingError, authInProgress} = props;

  if (isLoading && authInProgress) {
    return (
      <Loading />
    );
  } else if (isLoadingError) {
    return (
      <ErrorScreen />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact
          path={AppRoute.ROOT}
          render={({history}) => (
            <MainPage
              onFilmCardClick={(id) => history.push(AppRoute.FILMS + id)}
            />
          )} />

        <Route exact path={AppRoute.LOGIN}>
          <SignIn />
        </Route>

        <PrivateRoute
          exact
          path={AppRoute.MY_LIST}
          render={({history}) => {
            return (
              <MyList
                onFilmCardClick={(id) => history.push(AppRoute.FILMS + id)}
              />
            );
          }}
        />

        <Route exact
          path={AppRoute.FILMS_ID}
          render={({history, match}) => (
            <FilmPage
              currentFilmId={parseInt(match.params.id, 10)}
              onFilmCardClick={(id) => history.push(AppRoute.FILMS + id)}
            />
          )}
        >
        </Route>

        <PrivateRoute
          exact
          path={AppRoute.REVIEW}
          render={({match}) => {
            return (
              <AddReview
                currentFilmId={parseInt(match.params.id, 10)}
              />
            );
          }}
        />
        <Route exact
          path={AppRoute.PLAYER_ID}
          render={({match}) => (
            <Player
              currentFilmId={parseInt(match.params.id, 10)}
            />
          )}
        >
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isLoadingError: PropTypes.bool.isRequired,
  authInProgress: PropTypes.bool.isRequired
};

const mapStateToProps = ({STATE, USER}) => ({
  isLoading: STATE.isLoading,
  isLoadingError: STATE.isLoadingError,
  authInProgress: USER.authInProgress
});

export {App};
export default connect(mapStateToProps)(App);
