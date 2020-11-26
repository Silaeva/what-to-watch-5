import PropTypes from "prop-types";

export default PropTypes.shape({
  srcVideo: PropTypes.string,
  previewVideo: PropTypes.string,
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  previewImage: PropTypes.string,
  genre: PropTypes.string,
  year: PropTypes.number,
  duration: PropTypes.number,
  director: PropTypes.string,
  actors: PropTypes.string,
  rating: PropTypes.shape({
    score: PropTypes.number,
    count: PropTypes.number,
  }),
  bgImage: PropTypes.string,
  bgColor: PropTypes.string,
  isFavorite: PropTypes.bool,
});
