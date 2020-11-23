import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {GenresList} from "./genres-list";
import {films, genre} from "../../test-data";

configure({adapter: new Adapter()});

it(`GenresList callback should be called on genre click`, () => {
  const onGenreClick = jest.fn();

  const wrapper = shallow(
      <GenresList
        films={films}
        activeGenre={genre}
        onGenreClick={onGenreClick}
      />
  );

  const genreLink1 = wrapper.find(`.catalog__genres-link`).at(0);
  const genreLink2 = wrapper.find(`.catalog__genres-link`).at(1);
  const genreLink3 = wrapper.find(`.catalog__genres-link`).at(2);
  const genreLink4 = wrapper.find(`.catalog__genres-link`).at(3);


  genreLink1.simulate(`click`, {preventDefault() {}});
  genreLink2.simulate(`click`, {preventDefault() {}});
  genreLink3.simulate(`click`, {preventDefault() {}});
  genreLink4.simulate(`click`, {preventDefault() {}});

  expect(onGenreClick).toHaveBeenCalledTimes(4);
});
