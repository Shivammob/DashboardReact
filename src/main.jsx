import { StrictMode } from "react";
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
import { ToastProvider } from "./components/context/ToastContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastProvider>
      <Provider store={store}>
        <App />
        <ToastContainer theme="dark" position="top-right" newestOnTop />
      </Provider>
    </ToastProvider>
  </StrictMode>
);
