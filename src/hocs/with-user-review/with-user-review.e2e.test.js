import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withUserReview from "./with-user-review";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withUserReview(MockComponent);

describe(`withUserReview should pass`, () => {
  it(`rating`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          currentFilmId={1}
        />);

    expect(wrapper.state().rating).toEqual(``);
  });

  it(`comment`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          currentFilmId={1}
        />);

    expect(wrapper.state().comment).toEqual(``);
  });

  it(`isReviewValid`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          currentFilmId={1}
        />);

    expect(wrapper.state().isReviewValid).toEqual(false);
  });
});
