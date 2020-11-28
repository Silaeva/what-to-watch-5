import React from "react";
import renderer from "react-test-renderer";
import {SignIn} from "./sign-in";
import {noop} from "../../test-data";

jest.mock(`../logo-header/logo-header`, () => `LogoHeader`);
jest.mock(`../page-footer/page-footer`, () => `PageFooter`);

it(`Should FilmPage render correctly`, () => {
  const tree = renderer
    .create(
        <SignIn
          onSubmit={noop}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
