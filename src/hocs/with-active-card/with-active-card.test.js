import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withActiveCard from "./with-active-card";
import {films, noop} from "../../test-data";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withActiveCard(MockComponent);

it(`withActiveCard is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      onFilmCardClick={noop}
      films={films}
    >
      <React.Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
