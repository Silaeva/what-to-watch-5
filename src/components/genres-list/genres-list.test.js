import React from "react";
import renderer from "react-test-renderer";
import {GenresList} from "./genres-list";
import {films, noop, genre} from "../../test-data";

it(`Should GenresList render correctly`, () => {
  const tree = renderer
    .create(
        <GenresList
          films={films}
          activeGenre={genre}
          onGenreClick={noop}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
