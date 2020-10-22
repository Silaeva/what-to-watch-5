import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card";

class FilmCardList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: ``,
    };

    this._hoverTimeout = null;

    this._handleActiveCard = this._handleActiveCard.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);
  }

  _handleActiveCard(id) {
    this._hoverTimeout = setTimeout(() =>
      this.setState({
        activeCard: id
      }), 1000);
  }

  _handleMouseLeave() {
    clearTimeout(this._hoverTimeout);
    this._hoverTimeout = null;

    this.setState({
      activeCard: ``
    });
  }

  render() {
    const {films, onFilmCardClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film) => {
          return (
            <FilmCard
              id={film.id}
              key={film.id}
              title={film.title}
              image={film.image}
              onMouseEnter={this._handleActiveCard}
              onMouseLeave={this._handleMouseLeave}
              onFilmCardClick={onFilmCardClick}
              srcVideo={film.srcVideo}
              isPlaying={film.id === this.state.activeCard}
            />
          );
        })}
      </div>
    );
  }
}

FilmCardList.propTypes = {
  onFilmCardClick: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }))
};

export default FilmCardList;
