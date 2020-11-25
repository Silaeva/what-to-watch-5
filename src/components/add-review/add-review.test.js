import React from "react";
import renderer from "react-test-renderer";
import {AddReview} from "./add-review";
import {BrowserRouter} from 'react-router-dom';
import {films} from "../../test-data";

jest.mock(`../add-review-form/add-review-form`, () => `AddReviewForm`);
jest.mock(`../logo-header/logo-header`, () => `LogoHeader`);
jest.mock(`../user-block/user-block`, () => `UserBlock`);

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
