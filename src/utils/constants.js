const API_KEY = '51fe642476f4f3696a0d35676a4fbc57';
export const DEFAULT_PAGE_SIZE = 10;
export const DEBOUNCE_TIMEOUT = 1000;
export const POSTER_PLACEHOLDER = `${process.env.PUBLIC_URL}/assets/img/poster-placeholder.png`;

export const HTTP_VERBS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
};

export const IMAGE_SIZES = {
  SMALL: 'w300',
  MEDIUM: 'w780',
  LARGE: 'w1280',
  ORIGINAL: 'original',
};

export const CARD_SIZES = {
  SMALL: 'sm',
  DEFAULT: 'df',
};

export const EVENT_TAB_KEYS = {
  TV: 'tv',
  MOVIES: 'movie',
};

export const API_ENDPOINTS = {
  TOP_RATED_MOVIES: `movie/top_rated?api_key=${API_KEY}`,
  TOP_RATED_TV_SHOWS: `tv/top_rated?api_key=${API_KEY}`,
  SEARCH: (name, searchvalue) => `search/${name}?api_key=${API_KEY}&query=${searchvalue}`,
  IMAGE: (imgSize, imgUrl) => `https://image.tmdb.org/t/p/${imgSize}/${imgUrl}`,
};
