import React from "react";
import renderer from "react-test-renderer";
import PlayerContainer from "./player-container";

jest.mock(`../player/player`, () => `Player`);

it(`Should PlayerContainer render correctly`, () => {
  const tree = renderer
      .create(
          <PlayerContainer currentFilmId={1} />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});
