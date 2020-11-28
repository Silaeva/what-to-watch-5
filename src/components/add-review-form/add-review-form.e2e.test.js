import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {AddReviewForm} from "./add-review-form";
import {noop} from "../../test-data";

configure({adapter: new Adapter()});

describe(`AddReviewForm callback should be called on`, () => {
  it(`rating change`, () => {
    const handleRatingChange = jest.fn();

    const addReviewForm = mount(
        <AddReviewForm
          isDataSending={false}
          isDataSendError={false}
          rating={``}
          isReviewValid={true}
          handleRatingChange={handleRatingChange}
          handleCommentChange={noop}
          handlePostBtnClick={noop}
        />
    );

    const input1 = addReviewForm.find(`input`).at(0);

    input1.simulate(`change`, {target: {checked: true}});

    expect(handleRatingChange).toHaveBeenCalledTimes(1);
    expect(handleRatingChange.mock.calls[0][0]).toMatchObject(input1);
  });

  it(`comment change`, () => {
    const handleCommentChange = jest.fn();

    const addReviewForm = mount(
        <AddReviewForm
          isDataSending={false}
          isDataSendError={false}
          rating={``}
          isReviewValid={true}
          handleRatingChange={noop}
          handleCommentChange={handleCommentChange}
          handlePostBtnClick={noop}
        />
    );

    const textarea = addReviewForm.find(`.add-review__textarea`);

    textarea.simulate(`change`);

    expect(handleCommentChange).toHaveBeenCalledTimes(1);
    expect(handleCommentChange.mock.calls[0][0]).toMatchObject(textarea);
  });

  it(`submit`, () => {
    const onPostBtnClick = jest.fn();

    const addReviewForm = mount(
        <AddReviewForm
          isDataSending={false}
          isDataSendError={false}
          rating={``}
          isReviewValid={true}
          handleRatingChange={noop}
          handleCommentChange={noop}
          handlePostBtnClick={onPostBtnClick}
        />
    );

    const postButton = addReviewForm.find(`.add-review__btn`);

    postButton.simulate(`click`, {preventDefault() {}});

    expect(onPostBtnClick).toHaveBeenCalledTimes(1);
  });
});

