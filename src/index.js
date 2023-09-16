import { createRoot } from "react-dom/client";

import App from "./App";
import { createStore } from "redux";
import reduce from "./reduce";

const store = createStore(reduce);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const render = () => {
  return root.render(<App store={store} />);
};

store.subscribe(render);
render();
