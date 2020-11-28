import React, {useState, useCallback, useEffect} from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card";
import filmProp from "../../film-prop";

const FilmCardList = (props) => {
  const {films, onFilmCardClick} = props;

  const [activeCard, setActiveCard] = useState(-1);

  let hoverTimeout = null;

  useEffect(() => {
    return () => {
      clearTimeout(hoverTimeout);
      hoverTimeout = null;
    };
  }, [hoverTimeout]);

  const handleActiveCard = useCallback((id) => {
    hoverTimeout = setTimeout(() => setActiveCard(id), 1000);
  }, [hoverTimeout]);

  const handleMouseLeave = useCallback(() => {
    clearTimeout(hoverTimeout);
    hoverTimeout = null;
    setActiveCard(-1);
  }, [hoverTimeout]);

  return (
    <div className="catalog__movies-list">
      {films.map((film) => {
        return (
          <FilmCard
            id={film.id}
            key={film.id}
            title={film.title}
            image={film.previewImage}
            onMouseEnter={handleActiveCard}
            onMouseLeave={handleMouseLeave}
            onFilmCardClick={onFilmCardClick}
            previewVideo={film.previewVideo}
            isActive={film.id === activeCard}
          />
        );
      })}
    </div>
  );
};

FilmCardList.propTypes = {
  onFilmCardClick: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(filmProp)
};

export default FilmCardList;
