// actionTypes

export const SET_MOVIES = "SET_MOVIES";
export const SET_FILTER = "SET_FILTER";

export const setMovies = (text) => ({
  type: SET_MOVIES,
  text,
});

export const setFilter = (index) => ({
  type: SET_FILTER,
  index,
});
