import { Link } from "react-router-dom";
import { useState } from "react";
import "./intermediateMenu.css";
import image from "../../visual/basic/inf.png";

export default function IntermediateMenu() {
  //const [selectedId, setSelectedId] = useState(null);

  return (
    <div>
      <div className="main-intermediateMenu">
        <h1 className="title-intermediateMenu">Intermediate level:</h1>

        <div className="contain-intermediateMenu">
          <div className="row box-vocabulary-intermediateMenu">
            <div className="col s12 m6">
              <div className="card card-content-edit">
                <div className="card-image ">
                  <Link
                    to="vocabulary"
                    className="btn-floating floatSmall-intermediateMenu  waves-effect waves-light red"
                  >
                    <i className="material-icons">play_arrow</i>
                  </Link>
                </div>
                <div className="card-content rounded card-content-edit">
                  <span className="card-title activator grey-text text-darken-4">
                    Vocabulary
                    <i className="material-icons right">more_vert</i>
                  </span>
                  <p>
                    <a href="#">Play</a>
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
          {/* //-------------------------------------------------------VERBS */}
          <div className="row box-choose-intermediateMenu">
            <div className="col s12 m6">
              <div className="card card-content-edit">
                <div className="card-image ">
                  <Link
                    to="verbs"
                    className="btn-floating floatBig-intermediateMenu  waves-effect waves-light red"
                  >
                    <i className="material-icons">play_arrow</i>
                  </Link>
                </div>
                <div className="card-content card-content-edit">
                  <span className="card-title activator grey-text text-darken-4">
                    Verbs
                    <i className="material-icons right">more_vert</i>
                  </span>
                  <p>
                    <a href="#">Play</a>
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
        {/* //-------------------------------------------------------------------------GRAMMAR */}
        <div className="contain-intermediateMenu ">
          <div className="row box-grammar-intermediateMenu ">
            <div className="col s12 m6">
              <div className="card card-content-edit">
                <div className="card-image ">
                  <Link
                    to="grammar"
                    className="btn-floating floatBig-intermediateMenu  waves-effect waves-light red"
                  >
                    <i className="material-icons">play_arrow</i>
                  </Link>
                </div>
                <div className="card-content card-content-edit">
                  <span className="card-title activator grey-text text-darken-4">
                    Grammar
                    <i className="material-icons right">more_vert</i>
                  </span>
                  <p>
                    <a href="#">Play</a>
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
          {/* //-------------------------------------------------------------------------MATCH */}
          <div className="row box-match-intermediateMenu">
            <div className="col s12 m6 ">
              <div className="card card-content-edit">
                <div className="card-image ">
                  <Link
                    to="match"
                    className="btn-floating floatSmall-intermediateMenu waves-effect waves-light red"
                  >
                    <i className="material-icons ">play_arrow</i>
                  </Link>
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    Can you find?
                    <i className="material-icons right">more_vert</i>
                  </span>
                  <p>
                    <a href="#">Play</a>
                  </p>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    How to play<i className="material-icons right">close</i>
                  </span>
                  <p>
                    Match the word on top of the proper drawn to win points.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
