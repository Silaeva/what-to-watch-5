import {Rating} from "./const";

const formatFilmDuration = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = Math.floor(minutes % 60);
  return hours === 0 ? `${mins}m` : `${hours}h ${mins}m`;
};

const formatDate = (date) => {
  const dateToFormat = new Date(date);
  return dateToFormat.toLocaleString(`en-US`, {month: `long`, day: `numeric`, year: `numeric`});
};

const getRating = (a, b) => {
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  const rating = lower + Math.random() * (upper - lower + 1);

  return rating > 10 ? Math.floor(rating) : +rating.toFixed(1);
};

const getRatingLevel = (score) => {
  let ratingLevel = ``;
  if (score < 3) {
    ratingLevel = Rating.BAD;
  } else if (score >= 3 && score < 5) {
    ratingLevel = Rating.NORMAL;
  } else if (score >= 8 && score < 10) {
    ratingLevel = Rating.GOOD;
  } else if (score >= 8 && score < 10) {
    ratingLevel = Rating.VERY_GOOD;
  } else if (score >= 10) {
    ratingLevel = Rating.AWESOME;
  }
  return ratingLevel;
};

const addZero = (n) => n < 10 ? `0` + n : n;

const getElapsedTime = (duration, progress) => {
  const minutesElapsed = Math.floor((duration - progress) / 60);
  const secondsElapsed = Math.floor((duration - progress) % 60);
  return `${addZero(minutesElapsed)}:${addZero(secondsElapsed)}`;
};

export {formatFilmDuration, getRating, formatDate, getRatingLevel, getElapsedTime};
