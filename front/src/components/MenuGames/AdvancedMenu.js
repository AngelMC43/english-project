import { Link } from "react-router-dom";
import { useState } from "react";
import "./advancedMenu.css";

export default function AdvancedMenu() {
  //const [selectedId, setSelectedId] = useState(null);

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
                    to="vocabulary"
                    className="btn-floating floatSmall-advancedMenu  waves-effect waves-light red"
                  >
                    <i className="material-icons">play_arrow</i>
                  </Link>
                </div>
                <div className="card-content rounded card-content-edit">
                  <span className="card-title activator grey-text text-darken-4  fs-6 text">
                    How to play{" "}
                    <i className="material-icons right">more_vert</i>
                  </span>
                  <p>
                    <h3 className="title-containerMatch">Vocabulary</h3>{" "}
                  </p>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    How to play<i className="material-icons right">close</i>
                  </span>
                  <p>
                    Read the question and answer pushing the correct box to win
                    points.
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
                    to="verbs"
                    className="btn-floating floatBig-advancedMenu  waves-effect waves-light red"
                  >
                    <i className="material-icons">play_arrow</i>
                  </Link>
                </div>
                <div className="card-content card-content-edit">
                  <span className="card-title activator grey-text text-darken-4  fs-6 text">
                    How to play
                    <i className="material-icons right">more_vert</i>
                  </span>
                  <p>
                    <h3 className="title-containerMatch">Phrasal verbs</h3>
                  </p>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    How to play<i className="material-icons right">close</i>
                  </span>
                  <p>
                    Match the word in the correct option. You must push on top
                    of the drawn to select one and win points.
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
                    to="grammar"
                    className="btn-floating floatBig-advancedMenu  waves-effect waves-light red"
                  >
                    <i className="material-icons">play_arrow</i>
                  </Link>
                </div>
                <div className="card-content card-content-edit">
                  <span className="card-title activator grey-text text-darken-4  fs-6 text">
                    How to play
                    <i className="material-icons right">more_vert</i>
                  </span>
                  <p>
                    <h3 className="title-containerMatch">Grammar</h3>
                  </p>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    How to play<i className="material-icons right">close</i>
                  </span>
                  <p>
                    We are going to learn "to be" verb. Choose the correct
                    option pushing the correct box to win points.
                  </p>
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
                      to="match"
                      className="btn-floating floatSmall-advancedMenu waves-effect waves-light red"
                    >
                      <i className="material-icons">play_arrow</i>
                    </Link>
                  </div>
                  <div className="card-content card-content-edit">
                    <span className="card-title activator grey-text text-darken-4 fs-6 text">
                      How to play
                      <i className="material-icons right">more_vert</i>
                    </span>
                    <p>
                      <h3 className="title-containerMatch">Can you find?</h3>
                    </p>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                      How to play<i className="material-icons right">close</i>
                    </span>
                    <p>
                      We are going to learn "to be" verb. Choose the correct
                      option pushing the correct box to win points.
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
