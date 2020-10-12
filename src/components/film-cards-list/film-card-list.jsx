import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card";

class FilmCardList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: ``,
    };

    this._handleActiveCard = this._handleActiveCard.bind(this);
  }

  _handleActiveCard(id) {
    this.setState({
      activeCard: id
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
              onHover={this._handleActiveCard}
              onFilmCardClick={onFilmCardClick}
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

  })

  )
};

export default FilmCardList;
