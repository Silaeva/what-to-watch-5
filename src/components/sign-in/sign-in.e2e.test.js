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
        />
    );

    const form = wrapper.find(`.sign-in__form`);
    form.simulate(`submit`, {preventDefault() {}});
    expect(onSignInSubmit).toHaveBeenCalledTimes(1);
  });

  it(`input change`, () => {
    const onInputChange = jest.fn();
    const mockEvent = {target: {}};

    const wrapper = shallow(
        <SignIn
          onSubmit={noop}
        />
    );

    const inputEmail = wrapper.find(`.sign-in__input`).at(0);
    const inputPassword = wrapper.find(`.sign-in__input`).at(1);

    inputEmail.simulate(`change`, mockEvent);
    inputPassword.simulate(`change`, mockEvent);
    expect(onInputChange).toHaveBeenCalledTimes(2);
  });
});
