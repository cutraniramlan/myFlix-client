import { createRoot } from "react-dom/client";
import { MainView } from "./components/main-view/main-view";
// import "bootstrap/dist/css/bootstrap.min.css";

$primary: SeaGreen;
$body-bg: Honeydew;

@import '~bootstrap/scss/bootstrap.scss';

const App = () => {
  return <MainView />;
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);
