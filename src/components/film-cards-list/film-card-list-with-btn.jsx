import React from "react";
import PropTypes from "prop-types";
import FilmCardList from "./film-card-list";
import ShowMoreButton from "../show-more-button/show-more-button";
import {connect} from "react-redux";

import withActiveCard from "../../hocs/with-active-card/with-active-card";

const FilmCardListWrapped = withActiveCard(FilmCardList);

const FilmCardListWithBtn = (props) => {
  const {filteredFilms, shownFilmsNumber} = props;

  const renderedFilms = filteredFilms.slice(0, shownFilmsNumber);

  return (
    <React.Fragment>
      <FilmCardListWrapped films={renderedFilms} {...props} />

      {
        shownFilmsNumber < filteredFilms.length && <ShowMoreButton />
      }
    </React.Fragment>
  );
};

FilmCardListWithBtn.propTypes = {
  filteredFilms: PropTypes.array.isRequired,
  shownFilmsNumber: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  filteredFilms: state.filteredFilms,
  shownFilmsNumber: state.shownFilmsNumber
});

export {FilmCardListWithBtn};
export default connect(mapStateToProps)(FilmCardListWithBtn);
