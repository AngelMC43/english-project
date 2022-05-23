import { Link } from "react-router-dom";
import { useState } from "react";
import "./advancedMenu.css";

export default function AdvancedMenu() {
  return (
    <div>
      <div className="main-advancedMenu">
        <h1 className="title-advancedMenu">Advanced level:</h1>
        {/* -----------------------VOCABULARY----------------------------- */}
        <div className="contain-advancedMenu">
          <div className="row box-vocabulary-advancedMenu">
            <div className="col s12 m6">
              <div className="card">
                <div className="card-image ">
                  <Link
                    to="intro-vocabulary"
                    className="btn-floating floatSmall-advancedMenu  waves-effect waves-light red"
                  >
                    <i className="material-icons">play_arrow</i>
                  </Link>
                </div>
                <div className="card-content rounded card-content-edit">
                  <span className="card-title activator grey-text text-purple text-lighten-1  fs-6 text">
                    How to play{" "}
                    <i className="material-icons right">more_vert</i>
                  </span>
                  <h3 className="title-containerAdvancedMatch">Vocabulary</h3>{" "}
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4 purple accent-1">
                    How to play<i className="material-icons right">close</i>
                  </span>
                  <p>
                    Write inside the box the correct answer. You can see all the
                    options inside.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* //-------------------------------VERBS------------------------ */}
          <div className="row box-choose-advancedMenu">
            <div className="col s12 m6">
              <div className="card">
                <div className="card-image ">
                  <Link
                    to="intro-verbs"
                    className="btn-floating floatBig-advancedMenu  waves-effect waves-light red"
                  >
                    <i className="material-icons">play_arrow</i>
                  </Link>
                </div>
                <div className="card-content card-content-edit">
                  <span className="card-title activator grey-text text-purple text-lighten-1  fs-6 text">
                    How to play
                    <i className="material-icons right">more_vert</i>
                  </span>
                  <p>
                    <h3 className="title-containerAdvancedMatchBig">
                      Phrasal verbs
                    </h3>
                  </p>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4 purple accent-1">
                    How to play<i className="material-icons right">close</i>
                  </span>
                  <p>
                    We are goint to practice phrasal verbs. You must push on top of
                    the box to select one and earn points.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //-----------------------------------GRAMMAR-------------------------------------- */}

        <div className="contain-advancedMenu ">
          <div className="row box-grammar-advancedMenu">
            <div className="col s12 m6 ">
              <div className="card">
                <div className="card-image ">
                  <Link
                    to="intro-grammar"
                    className="btn-floating floatBig-advancedMenu  waves-effect waves-light red"
                  >
                    <i className="material-icons">play_arrow</i>
                  </Link>
                </div>
                <div className="card-content card-content-edit">
                  <span className="card-title activator grey-text text-purple text-lighten-1 fs-6 text">
                    How to play
                    <i className="material-icons right">more_vert</i>
                  </span>

                  <h3 className="title-containerAdvancedMatchBig">Grammar</h3>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4 purple accent-1">
                    How to play<i className="material-icons right">close</i>
                  </span>
                  <p>Choose the correct option to complete the sentence.</p>
                </div>
              </div>
            </div>
          </div>
          {/* //----------------------------------MATCH--------------------------------------- */}

          <div className="contain-advancedMenu">
            <div className="row box-match-advancedMenu">
              <div className="col s12 m6">
                <div className="card">
                  <div className="card-image ">
                    <Link
                      to="intro-match"
                      className="btn-floating floatSmall-advancedMenu waves-effect waves-light red"
                    >
                      <i className="material-icons">play_arrow</i>
                    </Link>
                  </div>
                  <div className="card-content card-content-edit">
                    <span className="card-title activator grey-text text-purple text-lighten-1 fs-6 text">
                      How to play
                      <i className="material-icons right">more_vert</i>
                    </span>
                    <p>
                      <h3 className="title-containerAdvancedMatch">
                        Guess what
                      </h3>
                    </p>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4 purple accent-1">
                      How to play<i className="material-icons right">close</i>
                    </span>
                    <p>
                      We have a picture where you must guess the object
                      described. Here you won't have cursor point to select,
                      good luck!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
