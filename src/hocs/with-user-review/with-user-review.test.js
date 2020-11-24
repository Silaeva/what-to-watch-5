import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withUserReview from "./with-user-review";

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

const MockComponentWrapped = withUserReview(MockComponent);

it(`withActiveCard is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      currentFilmId={1}
    >
      <React.Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
