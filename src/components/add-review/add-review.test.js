import React from "react";
import renderer from "react-test-renderer";
import {AddReview} from "./add-review";
import {BrowserRouter} from 'react-router-dom';

jest.mock(`../add-review-form/add-review-form`, () => `AddReviewForm`);
jest.mock(`../logo-header/logo-header`, () => `LogoHeader`);
jest.mock(`../user-block/user-block`, () => `UserBlock`);

const films = [
  {
    bgImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/bronson.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/bronson.jpg`,
    bgColor: `#73B39A`,
    id: 1
  },
  {
    bgImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
    title: `Macbeth`,
    image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
    bgColor: `#F1E9CE`,
    id: 2
  }
];

it(`Should AddReview render correctly`, () => {
  const tree = renderer
    .create(
            <BrowserRouter>
              <AddReview
                films={films}
                currentFilmId={1}
              />
            </BrowserRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
