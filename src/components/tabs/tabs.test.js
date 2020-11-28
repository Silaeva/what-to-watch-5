import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs";
import {films, noop} from "../../test-data";
import {FilmTab} from "../../const";

jest.mock(`../film-page-overview/film-page-overview`, () => `FilmPageOverview`);
jest.mock(`../film-page-details/film-page-details`, () => `FilmPageDetails`);
jest.mock(`../film-page-reviews/film-page-reviews`, () => `FilmPageReviews`);

it(`Should Tabs render correctly`, () => {
  const tree = renderer
      .create(
          <Tabs
            film={films[0]}
            handleActiveTab={noop}
            activeTab={FilmTab.OVERVIEW}
          />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});
