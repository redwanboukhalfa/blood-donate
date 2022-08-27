import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddDonator from "./components/Volunteer/Donator/AddDonator";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/AddDonator" element={<AddDonator />}></Route>
      </Routes>
    </Provider>
  </BrowserRouter>
);
