import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {FilmPage} from "./film-page";
import {films, noop} from "../../test-data";
import {AuthorizationStatus} from "../../const";

jest.mock(`../film-card-list/film-card-list`, () => `FilmCardList`);
jest.mock(`../logo-header/logo-header`, () => `LogoHeader`);
jest.mock(`../user-block/user-block`, () => `UserBlock`);
jest.mock(`../page-footer/page-footer`, () => `PageFooter`);
jest.mock(`../tabs/tabs`, () => `Tabs`);
jest.mock(`../my-list-button/my-list-button`, () => `MyListButton`);
jest.mock(`../loading/loading`, () => `Loading`);
jest.mock(`../error-screen/error-screen`, () => `ErrorScreen`);

describe(`Should FilmPage render correctly`, () => {
  it(`When user authorised`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <FilmPage
              films={films}
              onFilmCardClick={noop}
              currentFilmId={1}
              authorizationStatus={AuthorizationStatus.AUTH}
              loadFilm={noop}
              filmById={films[0]}
              isFilmByIdLoading={false}
              isFilmByIdLoadError={false}
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`When user not authorised`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <FilmPage
              films={films}
              onFilmCardClick={noop}
              currentFilmId={1}
              authorizationStatus={AuthorizationStatus.NO_AUTH}
              loadFilm={noop}
              filmById={films[0]}
              isFilmByIdLoading={false}
              isFilmByIdLoadError={false}
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`When page loading`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <FilmPage
              films={films}
              onFilmCardClick={noop}
              currentFilmId={1}
              authorizationStatus={AuthorizationStatus.AUTH}
              loadFilm={noop}
              filmById={films[0]}
              isFilmByIdLoading={true}
              isFilmByIdLoadError={false}
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With page loading error`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <FilmPage
              films={films}
              onFilmCardClick={noop}
              currentFilmId={1}
              authorizationStatus={AuthorizationStatus.AUTH}
              loadFilm={noop}
              filmById={films[0]}
              isFilmByIdLoading={false}
              isFilmByIdLoadError={true}
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
