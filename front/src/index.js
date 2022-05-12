import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

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
import ShowScore from "./components/Score/ShowScore";

import BasicVocabulary from "./components/Games/Basic/BasicVocabulary";
import BasicGrammar from "./components/Games/Basic/BasicGrammar";
import BasicMatch from "./components/Games/Basic/BasicMatch";
import BasicChoose from "./components/Games/Basic/BasicChoose";
import IntroBasicVocabulary from "./components/Games/Basic/IntroBasicVocabulary";
import IntroBasicGrammar from "./components/Games/Basic/IntroBasicGrammar";
import IntroBasicChoose from "./components/Games/Basic/IntroBasicChoose";
import IntroBasicMatch from "./components/Games/Basic/IntroBasicMatch";

import NextIntermediate from "./components/Games/Intermediate/NextIntermediate";
import IntermediateVocabulary from "./components/Games/Intermediate/IntermediateVocabulary";
import IntermediateGrammar from "./components/Games/Intermediate/IntermediateGrammar";
import IntermediateVerbs from "./components/Games/Intermediate/IntermediateVerbs";
import IntermediateMatch from "./components/Games/Intermediate/IntermediateMatch";

import ScoreIntVocabulary from "./components/Punctuation/ScoreIntVocabulary";
import ScoreIntVerbs from "./components/Punctuation/ScoreIntVerbs";
import ScoreIntGrammar from "./components/Punctuation/ScoreIntGrammar";
import ScoreIntMatch from "./components/Punctuation/ScoreIntMatch";

import NextAdvanced from "./components/Games/Advanced/NextAdvanced";
import AdvancedVocabulary from "./components/Games/Advanced/AdvancedVocabulary";
import AdvancedGrammar from "./components/Games/Advanced/AdvancedGrammar";
import AdvancedVerbs from "./components/Games/Advanced/AdvancedVerbs";
import AdvancedMatch from "./components/Games/Advanced/AdvancedMatch";

import ScoreAdvVocabulary from "./components/Punctuation/ScoreAdvVocabulary";
import ScoreAdvVerbs from "./components/Punctuation/ScoreAdvVerbs";
import ScoreAdvGrammar from "./components/Punctuation/ScoreAdvGrammar";
import ScoreAdvMatch from "./components/Punctuation/ScoreAdvMatch";

import { createRoot } from "react-dom/client";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
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
          <Route path="profile" element={<ProfileView />} />
          <Route path="games" element={<Games />} />
          <Route path="showscore" element={<ShowScore />} />

          {/* ------------------------GAMES BASIC -------------------------------------------- */}
          <Route path="games/basic" element={<BasicView />} />
          <Route path="games/basic/vocabulary" element={<BasicVocabulary />} />
          <Route path="games/basic/grammar" element={<BasicGrammar />} />
          <Route path="games/basic/match" element={<BasicMatch />} />
          <Route path="games/basic/choose" element={<BasicChoose />} />

          {/* ------------------------INTRO BASIC-------------------------------------------- */}
          <Route
            path="games/basic/intro-vocabulary"
            element={<IntroBasicVocabulary />}
          />
          <Route
            path="games/basic/intro-grammar"
            element={<IntroBasicGrammar />}
          />
          <Route
            path="games/basic/intro-choose"
            element={<IntroBasicChoose />}
          />
          <Route path="games/basic/intro-match" element={<IntroBasicMatch />} />

          <Route
            path="games/next-intermediate"
            element={<NextIntermediate />}
          />

          {/* ------------------------GAMES INTERMEDIATE-------------------------------------------- */}
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
            path="games/intermediate/match"
            element={<IntermediateMatch />}
          />

          {/* ------------------------SCORE INTERMEDIATE-------------------------------------------- */}
          <Route
            path="showscore/intermediate-vocabulary"
            element={<ScoreIntVocabulary />}
          />

          <Route
            path="showscore/intermediate-verbs"
            element={<ScoreIntVerbs />}
          />

          <Route
            path="showscore/intermediate-grammar"
            element={<ScoreIntGrammar />}
          />

          <Route
            path="showscore/intermediate-match"
            element={<ScoreIntMatch />}
          />
          <Route path="games/basic/next-advanced" element={<NextAdvanced />} />

          {/* ------------------------GAMES ADVANCED-------------------------------------------- */}

          <Route path="games/advanced" element={<AdvancedView />} />
          <Route
            path="games/advanced/vocabulary"
            element={<AdvancedVocabulary />}
          />
          <Route path="games/advanced/grammar" element={<AdvancedGrammar />} />
          <Route path="games/advanced/verbs" element={<AdvancedVerbs />} />
          <Route path="games/advanced/match" element={<AdvancedMatch />} />

          {/* ------------------------SCORE ADVANCED-------------------------------------------- */}
          <Route
            path="showscore/advanced-vocabulary"
            element={<ScoreAdvVocabulary />}
          />

          <Route path="showscore/advanced-verbs" element={<ScoreAdvVerbs />} />

          <Route
            path="showscore/advanced-grammar"
            element={<ScoreAdvGrammar />}
          />

          <Route path="showscore/advanced-match" element={<ScoreAdvMatch />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
