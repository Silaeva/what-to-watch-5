import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {MainPage} from "./main-page";
import {films, noop} from "../../test-data";

jest.mock(`../film-card-list/film-card-list-with-btn`, () => `FilmCardListWithBtn`);
jest.mock(`../page-footer/page-footer`, () => `PageFooter`);
jest.mock(`../user-block/user-block`, () => `UserBlock`);
jest.mock(`../genres-list/genres-list`, () => `GenresList`);
jest.mock(`../my-list-button/my-list-button`, () => `MyListButton`);

it(`Should MainPage render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <MainPage
            promoFilm={films[0]}
            onFilmCardClick={noop}
          />
        </BrowserRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
