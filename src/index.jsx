import { createRoot } from "react-dom/client";

import { MainView } from "./components/main-view/main-view";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import moviesApp from './reducers/reducers';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

/* $primary: SeaGreen;
$body-bg: Honeydew;

@import '~bootstrap/scss/bootstrap.scss'; */




const App = () => {
  return (
    <Container>
          <MainView />
   
    </Container>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);
