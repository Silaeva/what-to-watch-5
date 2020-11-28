import React from "react";
import renderer from "react-test-renderer";
import {AddReviewForm} from "./add-review-form";
import {noop} from "../../test-data";
// isDataSending, isDataSendError, isReviewValid, handleRatingChange, handleCommentChange, handlePostBtnClick, rating
describe(`Should AddReviewForm render correctly`, () => {
  it(`When data is sending`, () => {
    const tree = renderer
      .create(
          <AddReviewForm
            isDataSending={true}
            isDataSendError={false}
            rating={``}
            isReviewValid={true}
            handleRatingChange={noop}
            handleCommentChange={noop}
            handlePostBtnClick={noop}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`On error data sending`, () => {
    const tree = renderer
      .create(
          <AddReviewForm
            isDataSending={false}
            isDataSendError={true}
            rating={``}
            isReviewValid={true}
            handleRatingChange={noop}
            handleCommentChange={noop}
            handlePostBtnClick={noop}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
