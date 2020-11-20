import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {Player} from "./player";
import {films, noop} from "../../test-data";

describe(`Should Player render correctly`, () => {
  it(`While playing`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Player
              duration={90}
              progress={50}
              onPlayBtnClick={noop}
              onFullscreenClick={noop}
              renderPlayer={noop}
              currentFilmId={1}
              films={films}
              promoFilm={films[0]}
              isPlaying={true}
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`On pause`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <Player
              duration={90}
              progress={50}
              onPlayBtnClick={noop}
              onFullscreenClick={noop}
              renderPlayer={noop}
              currentFilmId={1}
              films={films}
              promoFilm={films[0]}
              isPlaying={false}
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
