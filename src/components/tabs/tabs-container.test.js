import React from "react";
import renderer from "react-test-renderer";
import TabsContainer from "./tabs-container";
import {films} from "../../test-data";

jest.mock(`../tabs/tabs`, () => `Tabs`);

it(`Should TabsContainer render correctly`, () => {
  const tree = renderer
      .create(
          <TabsContainer film={films[0]} />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});
