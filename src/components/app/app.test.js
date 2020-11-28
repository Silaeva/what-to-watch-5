import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app";

jest.mock(`../loading/loading`, () => `Loading`);
jest.mock(`../error-screen/error-screen`, () => `ErrorScreen`);
jest.mock(`../main-page/main-page`, () => `MainPage`);
jest.mock(`../sign-in/sign-in`, () => `SignIn`);
jest.mock(`../my-list/my-list`, () => `MyList`);
jest.mock(`../film-page/film-page`, () => `FilmPage`);
jest.mock(`../add-review/add-review`, () => `AddReview`);
jest.mock(`../player/player`, () => `VideoPlayer`);
jest.mock(`../private-route/private-route`, () => `PrivateRoute`);

describe(`Should App render correctly`, () => {
  it(`With loading success`, () => {
    const tree = renderer
      .create(
          <App
            isLoading={false}
            isLoadingError={false}
            authInProgress={false}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With authorization in progress`, () => {
    const tree = renderer
      .create(
          <App
            isLoading={false}
            isLoadingError={false}
            authInProgress={true}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`When page loading`, () => {
    const tree = renderer
      .create(
          <App
            isLoading={true}
            isLoadingError={false}
            authInProgress={false}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With page loading error`, () => {
    const tree = renderer
      .create(
          <App
            isLoading={false}
            isLoadingError={true}
            authInProgress={false}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
