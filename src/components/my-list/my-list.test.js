import React from "react";
import renderer from "react-test-renderer";
import {MyList} from "./my-list";
import {films, noop} from "../../test-data";

jest.mock(`../film-card-list/film-card-list`, () => `FilmCardList`);
jest.mock(`../logo-header/logo-header`, () => `LogoHeader`);
jest.mock(`../user-block/user-block`, () => `UserBlock`);
jest.mock(`../page-footer/page-footer`, () => `PageFooter`);

describe(`Should MyList render correctly`, () => {
  it(`When load success`, () => {
    const tree = renderer
    .create(
        <MyList
          favoriteFilms={films}
          onFilmCardClick={noop}
          getFavoriteFilms={noop}
          isFavoritesLoading={false}
          isFavoritesLoadError={false}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`When films is loading`, () => {
    const tree = renderer
    .create(
        <MyList
          favoriteFilms={films}
          onFilmCardClick={noop}
          getFavoriteFilms={noop}
          isFavoritesLoading={true}
          isFavoritesLoadError={false}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`When films load error`, () => {
    const tree = renderer
    .create(
        <MyList
          favoriteFilms={films}
          onFilmCardClick={noop}
          getFavoriteFilms={noop}
          isFavoritesLoading={false}
          isFavoritesLoadError={true}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
