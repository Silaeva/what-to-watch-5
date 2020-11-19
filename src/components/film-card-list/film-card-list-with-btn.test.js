import React from "react";
import renderer from "react-test-renderer";
import {FilmCardListWithBtn} from "./film-card-list-with-btn";
import {films} from "../../test-data";
import {filmsCount} from "../../const";

jest.mock(`../film-card-list/film-card-list`, () => `FilmCardList`);
jest.mock(`../show-more-button/show-more-button`, () => `ShowMoreButton`);

describe(`Should FilmCardListWithBtn render correctly`, () => {
  it(`With default films amount shown`, () => {
    const tree = renderer
      .create(
        <FilmCardListWithBtn
          filteredFilms={films}
          shownFilmsNumber={filmsCount.PER_STEP}
        />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With all films shown`, () => {
    const tree = renderer
      .create(
        <FilmCardListWithBtn
          filteredFilms={films}
          shownFilmsNumber={films.length}
        />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
