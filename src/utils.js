const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomArray = (array, min, max) => {
  const newArray = [];
  while (newArray.length < getRandomInteger(min, max)) {
    newArray.push(getRandomItem(array));
  }
  return newArray;
};

const getRandomItem = (items) => {
  return items[getRandomInteger(0, items.length - 1)];
};

const formatFilmDuration = (ms) => {
  const hours = Math.floor(ms / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  return hours === 0 ? `${minutes}m` : `${hours}h ${minutes}m`;
};

const getRandomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
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

export {getRandomInteger, getRandomItem, getRandomArray, formatFilmDuration, getRating, getRandomDate, formatDate, getRatingLevel};