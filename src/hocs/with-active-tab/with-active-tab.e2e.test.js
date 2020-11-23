import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveTab from "./with-active-tab";
import {films} from "../../test-data";
import {FilmTab} from "../../const";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveTab(MockComponent);

it(`Should pass activeTab OVERVIEW`, () => {
  const wrapper = shallow(
      <MockComponentWrapped
        film={films[0]}
      />);

  expect(wrapper.state().activeTab).toEqual(FilmTab.OVERVIEW);
});
