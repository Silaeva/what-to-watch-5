import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MyListButton} from "./my-list-button";
import {AuthorizationStatus} from "../../const";

configure({adapter: new Adapter()});

describe(`On MyListButton click`, () => {
  it(`callback should be called`, () => {
    const onMyListClick = jest.fn();

    const wrapper = shallow(
        <MyListButton
          id={1}
          isFavorite={true}
          onMyListClick={onMyListClick}
          authorizationStatus={AuthorizationStatus.AUTH}
          isDataSending={false}
          isDataSendError={false}
        />
    );

    const myListButton = wrapper.find(`.movie-card__button`);
    myListButton.simulate(`click`, {preventDefault() {}});
    expect(onMyListClick).toHaveBeenCalledTimes(1);
  });

  it(`callback should not be called`, () => {
    const onMyListClick = jest.fn();

    const wrapper = shallow(
        <MyListButton
          id={1}
          isFavorite={true}
          onMyListClick={onMyListClick}
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          isDataSending={false}
          isDataSendError={false}
        />
    );

    const myListButton = wrapper.find(`.movie-card__button`);
    myListButton.simulate(`click`, {preventDefault() {}});
    expect(onMyListClick).toHaveBeenCalledTimes(0);
  });
});
