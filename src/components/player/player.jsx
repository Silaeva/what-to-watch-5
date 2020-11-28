import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getElapsedTime} from "../../utils";
import filmProp from "../../film-prop";

const Player = (props) => {
  const {films, promoFilm, currentFilmId, duration, progress, onPlayBtnClick, onFullscreenClick, renderPlayer, isPlaying} = props;

  const getCurrentFilm = () => {
    if (currentFilmId === promoFilm.id) {
      return promoFilm;
    }
    return films.find((film) => film.id === currentFilmId);
  };

  const togglerPosition = progress / duration * 100;

  return (
    <div className="player">

      {renderPlayer(getCurrentFilm())}

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
  promoFilm: filmProp,
  duration: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  onPlayBtnClick: PropTypes.func.isRequired,
  onFullscreenClick: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

const mapStateToProps = ({DATA}) => ({
  films: DATA.films,
  promoFilm: DATA.promoFilm
});

export {Player};
export default connect(mapStateToProps)(Player);
