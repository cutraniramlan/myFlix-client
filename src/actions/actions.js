// actionTypes

/* export const SET_MOVIES = "SET_MOVIES";
export const SET_FILTER = "SET_FILTER";

export const setMovies = (text) => ({
  type: SET_MOVIES,
  text,
});

export const setFilter = (index) => ({
  type: SET_FILTER,
  index,
}); */

export const SET_MOVIES = "SET_MOVIES";
export const SET_FILTER = "SET_FILTER";

export function setMovies(value) {
  return { type: SET_MOVIES, value };
}

export function setFilter(value) {
  return { type: SET_FILTER, value };
}
