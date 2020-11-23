const films = [
  {
    srcVideo: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    id: 1,
    title: `Pulp Fiction`,
    description: `The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`,
    image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Pulp_Fiction.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/pulp-fiction.jpg`,
    genre: `Crime`,
    year: 1994,
    duration: 153,
    director: `Quentin Tarantino`,
    actors: `John Travolta, Uma Thurman, Samuel L. Jackson`,
    rating: {
      score: 1.5,
      count: 163242
    },
    bgImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Pulp_Fiction.jpg`,
    bgColor: `#795433`,
    isFavorite: false
  },
  {
    srcVideo: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    id: 2,
    title: `Snatch`,
    description: `Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond`,
    image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Snatch.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/snatch.jpg`,
    genre: `Comedy`,
    year: 2000,
    duration: 104,
    director: `Guy Ritchie`,
    actors: `Jason Statham, Brad Pitt, Benicio Del Toro`,
    rating: {
      score: 5,
      count: 54654654
    },
    bgImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Snatch.jpg`,
    bgColor: `#FDFDFC`,
    isFavorite: true
  },
  {
    srcVideo: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    previewVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    id: 3,
    title: `War of the Worlds`,
    description: `As Earth is invaded by alien tripod fighting machines, one family fights for survival.`,
    image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Snatch.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/snatch.jpg`,
    genre: `Adventure`,
    year: 2005,
    duration: 116,
    director: `Steven Spielberg`,
    actors: `Tom Cruise, Dakota Fanning, Tim Robbins`,
    rating: {
      score: 9,
      count: 23425
    },
    bgImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/War_of_the_Worlds.jpg`,
    bgColor: `#9B7E61`,
    isFavorite: true
  },
  {
    srcVideo: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    id: 4,
    title: `Pulp Fiction`,
    description: `The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`,
    image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Pulp_Fiction.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/pulp-fiction.jpg`,
    genre: `Crime`,
    year: 1994,
    duration: 153,
    director: `Quentin Tarantino`,
    actors: `John Travolta, Uma Thurman, Samuel L. Jackson`,
    rating: {
      score: 1.5,
      count: 163242
    },
    bgImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Pulp_Fiction.jpg`,
    bgColor: `#795433`,
    isFavorite: false
  },
  {
    srcVideo: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    id: 5,
    title: `Snatch`,
    description: `Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond`,
    image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Snatch.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/snatch.jpg`,
    genre: `Comedy`,
    year: 2000,
    duration: 104,
    director: `Guy Ritchie`,
    actors: `Jason Statham, Brad Pitt, Benicio Del Toro`,
    rating: {
      score: 5,
      count: 54654654
    },
    bgImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Snatch.jpg`,
    bgColor: `#FDFDFC`,
    isFavorite: true
  },
  {
    srcVideo: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    previewVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    id: 6,
    title: `War of the Worlds`,
    description: `As Earth is invaded by alien tripod fighting machines, one family fights for survival.`,
    image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Snatch.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/snatch.jpg`,
    genre: `Adventure`,
    year: 2005,
    duration: 116,
    director: `Steven Spielberg`,
    actors: `Tom Cruise, Dakota Fanning, Tim Robbins`,
    rating: {
      score: 9,
      count: 23425
    },
    bgImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/War_of_the_Worlds.jpg`,
    bgColor: `#9B7E61`,
    isFavorite: true
  },
  {
    srcVideo: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    id: 7,
    title: `Pulp Fiction`,
    description: `The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`,
    image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Pulp_Fiction.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/pulp-fiction.jpg`,
    genre: `Crime`,
    year: 1994,
    duration: 153,
    director: `Quentin Tarantino`,
    actors: `John Travolta, Uma Thurman, Samuel L. Jackson`,
    rating: {
      score: 1.5,
      count: 163242
    },
    bgImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Pulp_Fiction.jpg`,
    bgColor: `#795433`,
    isFavorite: false
  },
  {
    srcVideo: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    id: 8,
    title: `Snatch`,
    description: `Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond`,
    image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Snatch.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/snatch.jpg`,
    genre: `Comedy`,
    year: 2000,
    duration: 104,
    director: `Guy Ritchie`,
    actors: `Jason Statham, Brad Pitt, Benicio Del Toro`,
    rating: {
      score: 5,
      count: 54654654
    },
    bgImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Snatch.jpg`,
    bgColor: `#FDFDFC`,
    isFavorite: true
  },
  {
    srcVideo: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    previewVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    id: 9,
    title: `War of the Worlds`,
    description: `As Earth is invaded by alien tripod fighting machines, one family fights for survival.`,
    image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Snatch.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/snatch.jpg`,
    genre: `Adventure`,
    year: 2005,
    duration: 116,
    director: `Steven Spielberg`,
    actors: `Tom Cruise, Dakota Fanning, Tim Robbins`,
    rating: {
      score: 9,
      count: 23425
    },
    bgImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/War_of_the_Worlds.jpg`,
    bgColor: `#9B7E61`,
    isFavorite: true
  },
  {
    srcVideo: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    id: 10,
    title: `Pulp Fiction`,
    description: `The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`,
    image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Pulp_Fiction.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/pulp-fiction.jpg`,
    genre: `Crime`,
    year: 1994,
    duration: 153,
    director: `Quentin Tarantino`,
    actors: `John Travolta, Uma Thurman, Samuel L. Jackson`,
    rating: {
      score: 1.5,
      count: 163242
    },
    bgImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Pulp_Fiction.jpg`,
    bgColor: `#795433`,
    isFavorite: false
  },
  {
    srcVideo: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    id: 11,
    title: `Snatch`,
    description: `Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond`,
    image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Snatch.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/snatch.jpg`,
    genre: `Comedy`,
    year: 2000,
    duration: 104,
    director: `Guy Ritchie`,
    actors: `Jason Statham, Brad Pitt, Benicio Del Toro`,
    rating: {
      score: 5,
      count: 54654654
    },
    bgImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Snatch.jpg`,
    bgColor: `#FDFDFC`,
    isFavorite: true
  },
  {
    srcVideo: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    previewVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    id: 12,
    title: `War of the Worlds`,
    description: `As Earth is invaded by alien tripod fighting machines, one family fights for survival.`,
    image: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Snatch.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/snatch.jpg`,
    genre: `Adventure`,
    year: 2005,
    duration: 116,
    director: `Steven Spielberg`,
    actors: `Tom Cruise, Dakota Fanning, Tim Robbins`,
    rating: {
      score: 9,
      count: 23425
    },
    bgImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/War_of_the_Worlds.jpg`,
    bgColor: `#9B7E61`,
    isFavorite: true
  }
];

const comments = [
  {
    id: 1,
    text: `I love this movie. This film is a milestone in cinematography. Great Immersive camera-work. This film is an experience and i has already seen it 4 times and I only see more quality of the film.`,
    rating: 4,
    user: `Christina`,
    userId: 19,
    date: `2020-10-09T13:38:44.769Z`
  }, {
    id: 2,
    text: `This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.`,
    rating: 9,
    user: `Sophie`,
    userId: 25,
    date: `2020-11-04T13:38:44.769Z`
  }, {
    id: 1,
    text: `Unfortunately we don't have a reliable way to tell the true ratings of a movie.`,
    rating: 7,
    user: `Jack`,
    userId: 11,
    date: `2020-10-09T13:38:44.769Z`
  }
];

const noop = () => {};

const genre = `Comedy`;

export {films, comments, noop, genre};
