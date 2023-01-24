import { configureStore } from "@reduxjs/toolkit";
import MainView from "./components/main-view/main-view";
import moviesReducer from ".redux//reducers/movies";
import userReducer from ".redux/reducers/user";
import index from ".redux/reducers/index";

export const store = configureStore({
  reducer: { movies: moviesReducer, user: userReducer },
});

function App() {
  return <MainView />;
}

const rootElement = Document.getElementbyId("root");
const root = createRoot(rootElement);
root.render(<App />);
