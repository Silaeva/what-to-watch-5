import React, {useState, useEffect, createRef, useCallback} from "react";
import PropTypes from "prop-types";
import Player from "./player";

const PlayerContainer = (props) => {
  const {currentFilmId} = props;

  const [isPlaying, setIsPlaying] = useState(true);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  const videoRef = createRef();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.oncanplay = () => setDuration(Math.floor(videoRef.current.duration));
      videoRef.current.ontimeupdate = () => setProgress(Math.floor(videoRef.current.currentTime));

      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.oncanplay = null;
        videoRef.current.ontimeupdate = null;
      }
    };
  }, [isPlaying, videoRef]);

  const onPlayBtnClick = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const onFullscreenClick = useCallback(() => {
    videoRef.current.requestFullscreen();
  });

  return (
    <Player
      duration={duration}
      progress={progress}
      onPlayBtnClick={onPlayBtnClick}
      onFullscreenClick={onFullscreenClick}
      renderPlayer={(film) => {
        return (
          <video ref={videoRef} src={film.srcVideo} className="player__video" poster={film.previewImage}></video>
        );
      }}
      isPlaying={isPlaying}
      currentFilmId={currentFilmId} />
  );
};

PlayerContainer.propTypes = {
  currentFilmId: PropTypes.number.isRequired,
};

export default PlayerContainer;
