import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {SignIn} from "./sign-in";

configure({adapter: new Adapter()});

it(`SignIn callback should be called on form submit`, () => {
  const onSignInSubmit = jest.fn();

  const wrapper = shallow(
      <SignIn
        onSubmit={onSignInSubmit}
      />
  );

  const form = wrapper.find(`.sign-in__form`);
  form.simulate(`submit`, {preventDefault() {}});
  expect(onSignInSubmit).toHaveBeenCalledTimes(1);
});
