import React, {PureComponent, createRef} from "react";

const withFullscreenPlayer = (Component) => {
  class WithFullscreenPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: true,
        duration: 0,
        progress: 0
      };

      this._videoRef = createRef();

      this._handlePlayBtnClick = this._handlePlayBtnClick.bind(this);
      this._handleFullscreenBtnClick = this._handleFullscreenBtnClick.bind(this);
    }

    componentDidMount() {
      this._videoRef.current.oncanplay = () => {
        this.setState({
          duration: Math.floor(this._videoRef.current.duration),
        });
      };

      this._videoRef.current.ontimeupdate = () => {
        this.setState({
          progress: Math.floor(this._videoRef.current.currentTime),
        });
      };
    }

    componentDidUpdate() {
      if (this.state.isPlaying) {
        this._videoRef.current.play();
      } else {
        this._videoRef.current.pause();
      }
    }

    componentWillUnmount() {
      this._videoRef.current.oncanplay = null;
      this._videoRef.current.ontimeupdate = null;
    }

    _handlePlayBtnClick() {
      this.setState({
        isPlaying: !this.state.isPlaying
      });
    }

    _handleFullscreenBtnClick() {
      this._videoRef.current.requestFullscreen();
    }

    render() {
      const {duration, progress, isPlaying} = this.state;

      return (
        <Component {...this.props}
          isPlaying={isPlaying}
          duration={duration}
          progress={progress}
          onPlayBtnClick={this._handlePlayBtnClick}
          onFullscreenClick={this._handleFullscreenBtnClick}
          renderPlayer={(film) => {
            return (
              <video ref={this._videoRef} src={film.srcVideo} className="player__video" poster={film.image}></video>
            );
          }}
        />
      );
    }
  }
  return WithFullscreenPlayer;
};

export default withFullscreenPlayer;
