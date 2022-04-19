import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./App";
import Main from "./views/Main";
import SignUpView from "./views/SignUpView.js";
import IndexMenu from "./views/IndexMenu";
import ProfileView from "./views/ProfileView";
import Games from "./views/Games";
import Basic from "./views/Games-menu/Basic-menu";
import Intermediate from "./views/Games-menu/Intermediate-menu";
import Advanced from "./views/Games-menu/Advanced-menu";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Main />} />
        <Route path="signup" element={<SignUpView />} />
        <Route path="index-menu" element={<IndexMenu />} />
        <Route path="profile/:id" element={<ProfileView />} />
        <Route path="games" element={<Games />} />
        <Route path="games/basic" element={<Basic />} />
        <Route path="games/intermediate" element={<Intermediate />} />
        <Route path="games/advanced" element={<Advanced />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
