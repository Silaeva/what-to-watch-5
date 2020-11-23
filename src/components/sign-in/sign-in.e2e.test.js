import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {SignIn} from "./sign-in";
import {noop} from "../../test-data";

configure({adapter: new Adapter()});

describe(`SignIn callback should be called on`, () => {
  it(`form submit`, () => {
    const onSignInSubmit = jest.fn();

    const wrapper = shallow(
        <SignIn
          onSubmit={onSignInSubmit}
          handleChange={noop}
          email={`email@.mail.com`}
          password={`srgvdgsvd`}
        />
    );

    const form = wrapper.find(`.sign-in__form`);
    form.simulate(`submit`, {preventDefault() {}});
    expect(onSignInSubmit).toHaveBeenCalledTimes(1);
  });

  it(`input change`, () => {
    const onInputChange = jest.fn();

    const wrapper = shallow(
        <SignIn
          onSubmit={noop}
          handleChange={onInputChange}
          email={`email@.mail.com`}
          password={`srgvdgsvd`}
        />
    );

    const inputEmail = wrapper.find(`.sign-in__input`).at(0);
    const inputPassword = wrapper.find(`.sign-in__input`).at(1);

    inputEmail.simulate(`change`);
    inputPassword.simulate(`change`);
    expect(onInputChange).toHaveBeenCalledTimes(2);
  });
});
