import React from "react";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import FilmPage from "../film-page/film-page";
import AddReview from "../add-review/add-review";
import VideoPlayer from "../player/player";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";
import {AppRoute} from '../../route';

import withFullscreenPlayer from "../../hocs/with-fullscreen-player/with-fullscreen-player";
import withLoginInfo from "../../hocs/with-login-info/with-login-info";

const Player = withFullscreenPlayer(VideoPlayer);
const SignInWrapped = withLoginInfo(SignIn);

const App = () => {
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
              currentFilmId={match.params.id}
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
                currentFilmId={match.params.id}
              />
            );
          }}
        />
        <Route exact
          path={AppRoute.PLAYER_ID}
          render={({match}) => (
            <Player
              currentFilmId={match.params.id}
            />
          )}
        >
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
