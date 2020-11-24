import React from "react";
import renderer from "react-test-renderer";
import PageFooter from "./page-footer";

it(`Should PageFooter render correctly`, () => {
  const tree = renderer
    .create(
        <PageFooter />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
