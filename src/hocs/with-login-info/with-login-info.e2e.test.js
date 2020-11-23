import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withLoginInfo from "./with-login-info";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withLoginInfo(MockComponent);

describe(`withLoginInfo should pass`, () => {
  it(`email`, () => {
    const wrapper = shallow(
        <MockComponentWrapped />);

    expect(wrapper.state().email).toEqual(``);
  });

  it(`password`, () => {
    const wrapper = shallow(
        <MockComponentWrapped />);

    expect(wrapper.state().password).toEqual(``);
  });
});
