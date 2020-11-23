import React from "react";
import renderer from "react-test-renderer";
import {FilmCard} from "./film-card";
import {BrowserRouter} from 'react-router-dom';
import {films, noop} from "../../test-data";

jest.mock(`../video-player/video-player`, () => `VideoPlayer`);

const {image, title, previewVideo} = films[0];

describe(`Should FilmCard render correctly`, () => {
  it(`With active`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <FilmCard
              image={image}
              title={title}
              onMouseEnter={noop}
              onMouseLeave={noop}
              id={1}
              onFilmCardClick={noop}
              previewVideo={previewVideo}
              isActive={true}
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`with no active`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <FilmCard
              image={image}
              title={title}
              onMouseEnter={noop}
              onMouseLeave={noop}
              id={2}
              onFilmCardClick={noop}
              previewVideo={previewVideo}
              isActive={false}
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
