import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {Player} from "./player";
import {films} from "../../test-data";

it(`Should Player render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <Player
            currentFilmId={1}
            films={films}
            promoFilm={films[0]}
          />
        </BrowserRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
