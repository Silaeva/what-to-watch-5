import React from "react";
import PropTypes from "prop-types";

const VideoPlayer = (props) => {
  const {srcVideo, image} = props;

  return (
    <video
      src={srcVideo}
      poster={image}
      width="280"
      height="175"
      autoPlay
      muted
    >

    </video>
  );
};

VideoPlayer.propTypes = {
  srcVideo: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default VideoPlayer;

