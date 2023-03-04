// import { SET_MOVIES, SET_FILTER } from "../actions";

// const app = (state = [], action) => {
//   switch (action.type) {
//     case SET_MOVIES:
//       return [
//         ...state,
//         {
//           text: action.text,
//           completed: false,
//         },
//       ];

//     case SET_FILTER:
//       return state.map((movies, index) =>
//         index === action.index
//           ? { ...movies, completed: !movies.completed }
//           : todo
//       );

//     default:
//       return state;
//   }
// };

// export default app;

import { combineReducers } from "redux";

import { SET_FILTER, SET_MOVIES } from "../actions/actions";

function visibilityFilter(state = "", action) {
  switch (action.type) {
    case SET_FILTER:
      return action.value;
    default:
      return state;
  }
}

function movies(state = [], action) {
  switch (action.type) {
    case SET_MOVIES:
      return action.value;
    default:
      return state;
  }
}

const moviesApp = combineReducers({
  visibilityFilter,
  movies,
});

export default moviesApp;
