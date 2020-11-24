import React from "react";
import renderer from "react-test-renderer";
import {AddReviewForm} from "./add-review-form";
import {noop} from "../../test-data";

describe(`Should AddReviewForm render correctly`, () => {
  it(`With valid review`, () => {
    const tree = renderer
      .create(
          <AddReviewForm
            rating={`5`}
            comment={`Ceteros assentior omittantur cum ad. Solum vituperata definitiones te vis, vis alia falli doming ea.`}
            currentFilmId={1}
            handleRatingChange={noop}
            handleCommentChange={noop}
            onPostBtnClick={noop}
            isDataSending={false}
            isDataSendError={false}
            isReviewValid={true}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With invalid review`, () => {
    const tree = renderer
      .create(
          <AddReviewForm
            rating={`5`}
            comment={`Ceteros assentior omittantur cum ad. Solum vituperata definitiones te vis, vis alia falli doming ea.`}
            currentFilmId={1}
            handleRatingChange={noop}
            handleCommentChange={noop}
            onPostBtnClick={noop}
            isDataSending={false}
            isDataSendError={false}
            isReviewValid={false}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`When data is sending`, () => {
    const tree = renderer
      .create(
          <AddReviewForm
            rating={`5`}
            comment={`Ceteros assentior omittantur cum ad. Solum vituperata definitiones te vis, vis alia falli doming ea.`}
            currentFilmId={1}
            handleRatingChange={noop}
            handleCommentChange={noop}
            onPostBtnClick={noop}
            isDataSending={true}
            isDataSendError={false}
            isReviewValid={true}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`On error data sending`, () => {
    const tree = renderer
      .create(
          <AddReviewForm
            rating={`5`}
            comment={`Ceteros assentior omittantur cum ad. Solum vituperata definitiones te vis, vis alia falli doming ea.`}
            currentFilmId={1}
            handleRatingChange={noop}
            handleCommentChange={noop}
            onPostBtnClick={noop}
            isDataSending={false}
            isDataSendError={true}
            isReviewValid={true}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
