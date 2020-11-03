const formatFilmDuration = (ms) => {
  const hours = Math.floor(ms / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  return hours === 0 ? `${minutes}m` : `${hours}h ${minutes}m`;
};

const formatDate = (date) => {
  return date.toLocaleString(`en-US`, {month: `long`, day: `numeric`, year: `numeric`});
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
    ratingLevel = `Bad`;
  } else if (score >= 3 && score < 5) {
    ratingLevel = `Normal`;
  } else if (score >= 8 && score < 10) {
    ratingLevel = `Good`;
  } else if (score >= 8 && score < 10) {
    ratingLevel = `Very Good`;
  } else if (score >= 10) {
    ratingLevel = `Awesome`;
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
