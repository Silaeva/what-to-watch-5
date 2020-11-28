import React from "react";
import renderer from "react-test-renderer";
import {AddReviewForm} from "./add-review-form";
import {noop} from "../../test-data";

describe(`Should AddReviewForm render correctly`, () => {
  it(`When data is sending`, () => {
    const tree = renderer
      .create(
          <AddReviewForm
            currentFilmId={1}
            onPostBtnClick={noop}
            isDataSending={true}
            isDataSendError={false}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`On error data sending`, () => {
    const tree = renderer
      .create(
          <AddReviewForm
            currentFilmId={1}
            onPostBtnClick={noop}
            isDataSending={false}
            isDataSendError={true}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
