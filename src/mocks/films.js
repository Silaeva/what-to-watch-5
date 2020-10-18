import {nanoid} from 'nanoid';
import {FILMS_COUNT, TITLES, IMAGES, GENRES, DIRECTORS, ACTORS, TEXTS, USER_NAMES} from "../const";
import {getRandomInteger, getRandomItem, getRandomArray, formatFilmDuration, getRating, getRandomDate, formatDate} from "../utils";


const generateReviewInfo = () => {
  return {
    text: getRandomArray(TEXTS, 1, 3),
    rating: getRating(0, 10),
    user: getRandomItem(USER_NAMES),
    date: formatDate(getRandomDate(new Date(getRandomInteger(2015, 2020), 0, 1), new Date()))
  };
};

const getReviews = (number) => {
  return new Array(number).fill().map(generateReviewInfo);
};

const generateFilmInfo = () => {
  return {
    srcVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    id: nanoid(),
    title: getRandomItem(TITLES),
    description: getRandomArray(TEXTS, 2, 5),
    image: getRandomItem(IMAGES),
    genre: getRandomItem(GENRES),
    year: getRandomInteger(1990, 2020),
    duration: formatFilmDuration(getRandomInteger(1200000, 10800000)),
    director: getRandomItem(DIRECTORS),
    actors: (getRandomArray(ACTORS, 1, 5)).join(`, `),
    rating: {
      score: getRating(0, 10),
      count: getRandomInteger(1, 500)
    },
    reviews: getReviews(getRandomInteger(1, 6)),
    bgImage: `/img/bg-the-grand-budapest-hotel.jpg`
  };
};

const films = new Array(FILMS_COUNT).fill().map(generateFilmInfo);

const promoFilm = {
  id: nanoid(),
  title: `The Grand Budapest Hotel poster`,
  image: `/img/the-grand-budapest-hotel-poster.jpg`,
  genre: `Drama`,
  year: 2014,
  bgImage: `/img/bg-the-grand-budapest-hotel.jpg`
};

export {films, promoFilm};
