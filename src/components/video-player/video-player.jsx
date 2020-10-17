import React, {createRef, useEffect} from "react";
import PropTypes from "prop-types";

const VideoPlayer = (props) => {
  const {srcVideo, image, isPlaying} = props;

  const videoRef = createRef();

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.load();
    }
  }, [isPlaying]);

  return (
    <video
      ref={videoRef}
      src={srcVideo}
      poster={image}
      width="280"
      height="175"
      muted
    >

    </video>
  );
};

VideoPlayer.propTypes = {
  srcVideo: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default VideoPlayer;

