import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { MainLayout } from "./components/MainLayout/index.js";
import { Router } from "./routes/Router";

import "./index.css";
import { configureStore } from "./store/configureStore.js";
import { Provider } from "react-redux";

const store = configureStore()

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <MainLayout>
          <Router />
        </MainLayout>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
