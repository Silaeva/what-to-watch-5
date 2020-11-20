import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player";
import {films} from "../../test-data";

const {previewVideo, image} = films[0];

it(`Should VideoPlayer render correctly`, () => {
  const tree = renderer
    .create(
        <VideoPlayer
          previewVideo={previewVideo}
          image={image}
          isActive={true}
        />, {
          createNodeMock() {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
