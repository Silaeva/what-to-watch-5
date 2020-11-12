import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import FilmPage from "../film-page/film-page";
import AddReview from "../add-review/add-review";
import VideoPlayer from "../player/player";
import Loading from "../loading/loading";
import ErrorScreen from "../error-screen/error-screen";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";
import {AppRoute} from '../../route';
import {connect} from "react-redux";

import withFullscreenPlayer from "../../hocs/with-fullscreen-player/with-fullscreen-player";
import withLoginInfo from "../../hocs/with-login-info/with-login-info";

const Player = withFullscreenPlayer(VideoPlayer);
const SignInWrapped = withLoginInfo(SignIn);

const App = (props) => {
  const {isloading, isLoadingError, authInProgress} = props;

  if (isloading && authInProgress) {
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
          <SignInWrapped />
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
  isloading: PropTypes.bool.isRequired,
  isLoadingError: PropTypes.bool.isRequired,
  authInProgress: PropTypes.bool.isRequired
};

const mapStateToProps = ({STATE, USER}) => ({
  isloading: STATE.isloading,
  isLoadingError: STATE.isLoadingError,
  authInProgress: USER.authInProgress
});

export {App};
export default connect(mapStateToProps)(App);
