import React from "react";
import MainPage from "../main-page/main-page";
import PropTypes from "prop-types";

const App = (props) => {
  const {title, genre, year} = props;

  return (
    <MainPage title={title} genre={genre} year={year} />
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default App;
