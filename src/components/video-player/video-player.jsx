import React, {createRef, useEffect} from "react";
import PropTypes from "prop-types";

const VideoPlayer = (props) => {
  const {previewVideo, image, isActive} = props;

  const videoRef = createRef();

  useEffect(() => {
    if (isActive) {
      videoRef.current.play();
    } else {
      videoRef.current.load();
    }
  }, [isActive]);

  return (
    <video
      ref={videoRef}
      src={previewVideo}
      poster={image}
      width="280"
      height="175"
      muted
    >

    </video>
  );
};

VideoPlayer.propTypes = {
  previewVideo: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default VideoPlayer;

