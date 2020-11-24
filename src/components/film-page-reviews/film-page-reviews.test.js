import React from "react";
import renderer from "react-test-renderer";
// import {BrowserRouter} from "react-router-dom";
import {FilmPageReviews} from "./film-page-reviews";
import {comments, noop} from "../../test-data";

describe(`Should FilmPageReviews render correctly`, () => {
  it(`When load success`, () => {
    const tree = renderer
      .create(
        <FilmPageReviews
        filmId={1}
        loadComments={noop}
        comments={comments}
        isCommentsLoading={false}
        isCommentsLoadError={false}
        />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`When comments is loading`, () => {
    const tree = renderer
      .create(
        <FilmPageReviews
        filmId={1}
        loadComments={noop}
        comments={comments}
        isCommentsLoading={true}
        isCommentsLoadError={false}
        />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`When load error`, () => {
    const tree = renderer
      .create(
        <FilmPageReviews
        filmId={1}
        loadComments={noop}
        comments={comments}
        isCommentsLoading={false}
        isCommentsLoadError={true}
        />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
