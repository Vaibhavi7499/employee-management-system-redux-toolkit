import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./Store/Store.js";
import DummyContainer from "./context/DummyContext.jsx";
import { I18nextProvider } from "react-i18next";
import i18n from "./translationConfig/i18n.js";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider store={store}>
    <BrowserRouter>
    <I18nextProvider i18n={i18n}>
    <DummyContainer>      
      <ToastContainer autoClose={1000}/>
      <App />
      </DummyContainer>
    </I18nextProvider>
    </BrowserRouter>
  </Provider>

  // </StrictMode>,
);
