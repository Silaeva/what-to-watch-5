import React from "react";
import PropTypes from "prop-types";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withFullscreenPlayer from "./with-fullscreen-player";
import {films} from "../../test-data";

configure({adapter: new Adapter()});

const MockComponent = (props) => {
  const {children, renderPlayer} = props;

  return (
    <div>
      {renderPlayer(films[0])}
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

const MockComponentWrapped = withFullscreenPlayer(MockComponent);

describe(`withFullscreenPlayer should pass`, () => {
  it(`isPlaying true`, () => {
    const wrapper = mount(
        <MockComponentWrapped
          currentFilmId={1}
        >
          <React.Fragment />
        </MockComponentWrapped>);

    expect(wrapper.state().isPlaying).toEqual(true);
  });

  it(`duration 0`, () => {
    const wrapper = mount(
        <MockComponentWrapped
          currentFilmId={1}
        >
          <React.Fragment />
        </MockComponentWrapped>);

    expect(wrapper.state().duration).toEqual(0);
  });

  it(`progress 0`, () => {
    const wrapper = mount(
        <MockComponentWrapped
          currentFilmId={1}
        >
          <React.Fragment />
        </MockComponentWrapped>);

    expect(wrapper.state().progress).toEqual(0);
  });
});
