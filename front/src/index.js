import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "materialize-css/dist/css/materialize.min.css";

import App from "./App";
import RequireAuth from "./components/Login/RequireAuth";
import Main from "./views/Main/Main";
import SignUpView from "./views/SignUpView.js";
import LoginView from "./views/LoginView";
import IndexMenu from "./views/indexMenu/IndexMenu";
import ProfileView from "./views/ProfileView";
import Games from "./views/Games";
import BasicPanel from "./views/GamesView/BasicPanel";
import IntermediatePanel from "./views/GamesView/IntermediatePanel";
import AdvancedPanel from "./views/GamesView/AdvancedPanel";
import Logina from "./components/Login/Logina";
import Navbar from "./components/Navbar/Navbar";
import BasicView from "./views/GamesView/BasicView";
import IntermediateView from "./views/GamesView/IntermediateView";
import AdvancedView from "./views/GamesView/AdvancedView";
import About from "./views/About/About";
import Guide from "./views/Guide/Guide";

import BasicVocabulary from "./components/Games/Basic/BasicVocabulary";
import BasicGrammar from "./components/Games/Basic/BasicGrammar";
import BasicMatch from "./components/Games/Basic/BasicMatch";

import IntermediateVocabulary from "./components/Games/Intermediate/IntermediateVocabulary";
import IntermediateGrammar from "./components/Games/Intermediate/IntermediateGrammar";
import IntermediateVerbs from "./components/Games/Intermediate/IntermediateVerbs";
import IntermediateFinalTest from "./components/Games/Intermediate/IntermediateFinalTest";

import AdvancedVocabulary from "./components/Games/Advanced/AdvancedVocabulary";
import AdvancedGrammar from "./components/Games/Advanced/AdvancedGrammar";
import AdvancedVerbs from "./components/Games/Advanced/AdvancedVerbs";
import AdvancedFinalTest from "./components/Games/Advanced/AdvancedFinalTest";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      {/*public routes */}
      <Route path="/" element={<App />}>
        <Route index element={<Main />} />
        <Route path="signup" element={<SignUpView />} />
        <Route path="login" element={<LoginView />} />
        <Route path="about" element={<About />} />
        <Route path="guide" element={<Guide />} />

        {/*protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="index-menu" element={<IndexMenu />} />
          <Route path="profile/:id" element={<ProfileView />} />
          <Route path="games" element={<Games />} />
          <Route path="games/basic" element={<BasicView />} />
          <Route path="games/basic/vocabulary" element={<BasicVocabulary />} />
          <Route path="games/basic/grammar" element={<BasicGrammar />} />
          <Route path="games/basic/match" element={<BasicMatch />} />

          <Route path="games/intermediate" element={<IntermediateView />} />
          <Route
            path="games/intermediate/vocabulary"
            element={<IntermediateVocabulary />}
          />
          <Route
            path="games/intermediate/grammar"
            element={<IntermediateGrammar />}
          />
          <Route
            path="games/intermediate/verbs"
            element={<IntermediateVerbs />}
          />

          <Route
            path="games/intermediate/final-test"
            element={<IntermediateFinalTest />}
          />

          <Route path="games/advanced" element={<AdvancedView />} />
          <Route
            path="games/advanced/vocabulary"
            element={<AdvancedVocabulary />}
          />
          <Route path="games/advanced/grammar" element={<AdvancedGrammar />} />
          <Route path="games/advanced/verbs" element={<AdvancedVerbs />} />
          <Route
            path="games/advanced/final-test"
            element={<AdvancedFinalTest />}
          />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
