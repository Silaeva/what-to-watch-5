import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs";
import {films, noop} from "../../test-data";
import {FilmTab} from "../../const";

jest.mock(`../film-page-overview/film-page-overview`, () => `FilmPageOverview`);
jest.mock(`../film-page-details/film-page-details`, () => `FilmPageDetails`);
jest.mock(`../film-page-reviews/film-page-reviews`, () => `FilmPageReviews`);

describe(`Should Tabs render correctly`, () => {
  it(`With active tab Overview`, () => {
    const tree = renderer
      .create(
          <Tabs
            film={films[0]}
            activeTab={FilmTab.OVERVIEW}
            handleActiveTab={noop}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With active tab Details`, () => {
    const tree = renderer
      .create(
          <Tabs
            film={films[0]}
            activeTab={FilmTab.DETAILS}
            handleActiveTab={noop}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With active tab Reviews`, () => {
    const tree = renderer
      .create(
          <Tabs
            film={films[0]}
            activeTab={FilmTab.REVIEWS}
            handleActiveTab={noop}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
