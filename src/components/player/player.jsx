import React, {useState, useEffect, createRef, useCallback} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getElapsedTime} from "../../utils";
import filmProp from "../../film-prop";

const Player = (props) => {
  const {films, promoFilm, currentFilmId} = props;

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

  const getCurrentFilm = () => {
    if (currentFilmId === promoFilm.id) {
      return promoFilm;
    }
    return films.find((film) => film.id === currentFilmId);
  };

  const currentFilm = getCurrentFilm();

  const togglerPosition = progress / duration * 100;

  return (
    <div className="player">

      <video ref={videoRef} src={currentFilm.srcVideo} className="player__video" poster={currentFilm.previewImage}></video>

      <Link to="/" type="button" className="player__exit" >Exit</Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max={duration}></progress>
            <div className="player__toggler" style={{left: togglerPosition + `%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{getElapsedTime(duration, progress)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play"
            onClick={onPlayBtnClick}
          >
            {isPlaying ?
              <React.Fragment>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </React.Fragment>
              :
              <React.Fragment>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </React.Fragment>
            }
          </button>
          <div className="player__name">Transpotting</div>

          <button onClick={onFullscreenClick} type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  currentFilmId: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(filmProp),
  promoFilm: filmProp
};

const mapStateToProps = ({DATA}) => ({
  films: DATA.films,
  promoFilm: DATA.promoFilm
});

export {Player};
export default connect(mapStateToProps)(Player);
