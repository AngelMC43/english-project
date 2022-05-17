import { Link } from "react-router-dom";
import { useState } from "react";
import "./intermediateMenu.css";
import image from "../../visual/basic/inf.png";

export default function IntermediateMenu() {
  //const [selectedId, setSelectedId] = useState(null);

  return (
    <div>
      <div className="main-intermediateMenu">
        <div className="inside-container-intermediate"></div>
        <h1 className="title-intermediateMenu">Intermediate level:</h1>
        {/* -----------------------VOCABULARY----------------------------- */}

        <div className="contain-intermediateMenu">
          <div className="row box-vocabulary-intermediateMenu">
            <div className="col s12 m6">
              <div className="card card-content-edit">
                <div className="card-image ">
                  <Link
                    to="intro-vocabulary"
                    className="btn-floating floatSmall-intermediateMenu  waves-effect waves-light red"
                  >
                    <i className="material-icons">play_arrow</i>
                  </Link>
                </div>
                <div className="card-content rounded card-content-edit">
                  <span className="card-title activator green-text text-green text-lighten-1 fs-6 text">
                    How to play{" "}
                    <i className="material-icons right">more_vert</i>
                  </span>
                  <h3 className="title-intermediateMenu">Vocabulary</h3>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    How to play<i className="material-icons right">close</i>
                  </span>
                  <p>Choose the best option for the sentence proposed</p>
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
                    to="intro-verbs"
                    className="btn-floating floatBig-intermediateMenu  waves-effect waves-light red"
                  >
                    <i className="material-icons">play_arrow</i>
                  </Link>
                </div>
                <div className="card-content card-content-edit">
                  <span className="card-title activator green-text text-green text-lighten-1 fs-6 text">
                    How to play
                    <i className="material-icons right">more_vert</i>
                  </span>
                  <h3 className="title-intermediateMenu">Verbs</h3>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    How to play<i className="material-icons right">close</i>
                  </span>
                  <p>
                    You must choose the rigth word. Verbs can be past, present
                    or future.
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
                    to="intro-grammar"
                    className="btn-floating floatBig-intermediateMenu  waves-effect waves-light red"
                  >
                    <i className="material-icons">play_arrow</i>
                  </Link>
                </div>
                <div className="card-content card-content-edit">
                  <span className="card-title activator green-text text-green text-lighten-1 fs-6 text">
                    How to play
                    <i className="material-icons right">more_vert</i>
                  </span>
                  <h3 className="title-intermediateMenu">Grammar</h3>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    How to play<i className="material-icons right">close</i>
                  </span>
                  <p>
                    We are going to practice prepositions of places, choose the
                    correct word for each question.
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
                    to="intro-match"
                    className="btn-floating floatSmall-intermediateMenu waves-effect waves-light red"
                  >
                    <i className="material-icons ">play_arrow</i>
                  </Link>
                </div>
                <div className="card-content ">
                  <span className="card-title activator green-text text-green text-lighten-1 fs-6 text">
                    How to play
                    <i className="material-icons right">more_vert</i>
                  </span>
                  <h3 className="title-intermediateMenu">Can you find?</h3>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    How to play<i className="material-icons right">close</i>
                  </span>
                  <p>
                    Here we see a school picture, you must find the required
                    object.
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
