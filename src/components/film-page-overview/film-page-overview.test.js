import React from "react";
import renderer from "react-test-renderer";
import FilmPageOverview from "./film-page-overview";
import {films} from "../../test-data";

const {description, director, actors, rating} = films[0];

it(`Should FilmPageOverview render correctly`, () => {
  const tree = renderer
    .create(
      <FilmPageOverview
        description={description}
        director={director}
        actors={actors}
        rating={rating}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
