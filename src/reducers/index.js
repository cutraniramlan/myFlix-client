import { SET_MOVIES, SET_FILTER } from "../actions";

const app = (state = [], action) => {
  switch (action.type) {
    case SET_MOVIES:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];

    case SET_FILTER:
      return state.map((movies, index) =>
        index === action.index
          ? { ...movies, completed: !movies.completed }
          : todo
      );

    default:
      return state;
  }
};

export default app;
