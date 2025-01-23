import { StrictMode } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./components/redux/store.js";
import "rsuite/dist/rsuite.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./assets/scss/style.scss";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <Router>
  {/* <ToastProvider> */}
      <Provider store={store}>
        <App />
        <ToastContainer theme="dark" position="top-right" newestOnTop />
      </Provider>
    {/* </ToastProvider> */}
  </Router>
  </StrictMode>
);
