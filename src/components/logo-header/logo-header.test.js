import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import LogoHeader from "./logo-header";

it(`Should LogoHeader render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <LogoHeader />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
