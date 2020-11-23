import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveCard from "./with-active-card";
import {films, noop} from "../../test-data";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveCard(MockComponent);

it(`Should pass activeCard id`, () => {
  const wrapper = shallow(
      <MockComponentWrapped
        onFilmCardClick={noop} films={films}
      />);

  expect(wrapper.state().activeCard).toEqual(-1);
});
