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
        handleActiveCard={noop}
        handleMouseLeave={noop}
        activeCard={1}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
