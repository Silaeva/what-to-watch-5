import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Tabs from "./tabs";
import {films} from "../../test-data";
import {FilmTab} from "../../const";

configure({adapter: new Adapter()});

it(`Tabs callback should be called on tab click`, () => {
  const onTabClick = jest.fn();

  const wrapper = shallow(
      <Tabs
        film={films[0]}
        activeTab={FilmTab.OVERVIEW}
        handleActiveTab={onTabClick}
      />
  );

  const tab1 = wrapper.find(`.movie-nav__link`).at(0);
  const tab2 = wrapper.find(`.movie-nav__link`).at(1);
  const tab3 = wrapper.find(`.movie-nav__link`).at(2);


  tab1.simulate(`click`, {preventDefault() {}});
  tab2.simulate(`click`, {preventDefault() {}});
  tab3.simulate(`click`, {preventDefault() {}});

  expect(onTabClick).toHaveBeenCalledTimes(3);
});
