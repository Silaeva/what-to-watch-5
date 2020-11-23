import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Player} from "./player";
import {films, noop} from "../../test-data";

configure({adapter: new Adapter()});

describe(`Player callback should be called on`, () => {
  it(`Play button click`, () => {
    const onPlayClick = jest.fn();

    const wrapper = shallow(
        <Player
          duration={90}
          progress={50}
          onPlayBtnClick={onPlayClick}
          onFullscreenClick={noop}
          renderPlayer={noop}
          currentFilmId={1}
          films={films}
          promoFilm={films[0]}
          isPlaying={true}
        />
    );

    const playButton = wrapper.find(`.player__play`);
    playButton.simulate(`click`);
    expect(onPlayClick).toHaveBeenCalledTimes(1);
  });

  it(`FullScreen button click`, () => {
    const onFullscreenClick = jest.fn();

    const wrapper = shallow(
        <Player
          duration={90}
          progress={50}
          onPlayBtnClick={noop}
          onFullscreenClick={onFullscreenClick}
          renderPlayer={noop}
          currentFilmId={1}
          films={films}
          promoFilm={films[0]}
          isPlaying={true}
        />
    );

    const fullscreenButton = wrapper.find(`.player__full-screen`);
    fullscreenButton.simulate(`click`);
    expect(onFullscreenClick).toHaveBeenCalledTimes(1);
  });
});
