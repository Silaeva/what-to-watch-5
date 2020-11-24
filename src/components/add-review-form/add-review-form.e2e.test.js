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
          rating={`1`}
          comment={`comment`}
          currentFilmId={1}
          handleRatingChange={handleRatingChange}
          handleCommentChange={noop}
          onPostBtnClick={noop}
          isDataSending={false}
          isDataSendError={false}
          isReviewValid={true}
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
          rating={`1`}
          comment={`comment`}
          currentFilmId={1}
          handleRatingChange={noop}
          handleCommentChange={handleCommentChange}
          onPostBtnClick={noop}
          isDataSending={false}
          isDataSendError={false}
          isReviewValid={true}
        />
    );

    const textarea = addReviewForm.find(`.add-review__textarea`);

    textarea.simulate(`change`);

    expect(handleCommentChange).toHaveBeenCalledTimes(1);
    expect(handleCommentChange.mock.calls[0][0]).toMatchObject(textarea);
  });

  it(`submit`, () => {
    const onPostBtnClick = jest.fn();
    const formSendPrevention = jest.fn();

    const addReviewForm = mount(
        <AddReviewForm
          rating={`1`}
          comment={`comment`}
          currentFilmId={1}
          handleRatingChange={noop}
          handleCommentChange={noop}
          onPostBtnClick={onPostBtnClick}
          isDataSending={false}
          isDataSendError={false}
          isReviewValid={true}
        />
    );

    const postButton = addReviewForm.find(`.add-review__btn`);

    postButton.simulate(`click`, {preventDefault: formSendPrevention});

    expect(onPostBtnClick).toHaveBeenCalledTimes(1);
    expect(formSendPrevention).toHaveBeenCalledTimes(1);
  });
});

