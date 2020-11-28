import React from "react";
import renderer from "react-test-renderer";
import FilmCardList from "./film-card-list";
import {films, noop} from "../../test-data";

jest.mock(`../film-card/film-card`, () => `FilmCard`);

it(`Should FilmCardList render correctly`, () => {
  const tree = renderer
    .create(
        <FilmCardList
          films={films}
          onFilmCardClick={noop}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
