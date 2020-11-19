import React from "react";
import renderer from "react-test-renderer";
import {GenresList} from "./genres-list";
import {films, noop, activeGenre} from "../../test-data";

it(`Should GenresList render correctly`, () => {
  const tree = renderer
    .create(
      <GenresList
        films={films}
        activeGenre={activeGenre}
        onGenreClick={noop}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
