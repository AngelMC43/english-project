import { Link } from "react-router-dom";
import { useState } from "react";
import "./basicmenu.css";
import rabbit from "../../visual/basic/rabbit.gif";

export default function BasicMenu() {
  return (
    <div>
      <div className="main-basicMenu">
        <h1 className="title-basicMenu animate__animated animate__rubberBand">
          Basic level:
        </h1>
        <img
          src={rabbit}
          className="rabbit-basic animate__animated animate__fadeInRightBig animate__delay-1s"
        />
        {/* -----------------------VOCABULARY----------------------------- */}

        <div className="contain-basicMenu">
          <div className="row box-vocabulary-basicMenu">
            <div className="col s12 m6">
              <div className="card card-content-edit">
                <div className="card-image ">
                  <Link
                    to="intro-vocabulary"
                    className="btn-floating floatSmall-basicMenu  waves-effect waves-light red"
                  >
                    <i className="material-icons">play_arrow</i>
                  </Link>
                </div>
                <div className="card-content rounded card-content-edit">
                  <span className="card-title activator purple-text text-purple text-lighten-3 fs-6 text">
                    How to play{" "}
                    <i className="material-icons right">more_vert</i>
                  </span>
                  <h3 className="title-basicMenu">Vocabulary</h3>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    How to play<i className="material-icons right">close</i>
                  </span>
                  <p>
                    Read the question and answer pushing the correct box to earn
                    points.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* //-------------------------------------------------------choose */}
          <div className="row box-choose-basicMenu">
            <div className="col s12 m6">
              <div className="card card-content-edit">
                <div className="card-image ">
                  <Link
                    to="intro-choose"
                    className="btn-floating floatBig-basicMenu  waves-effect waves-light red"
                  >
                    <i className="material-icons">play_arrow</i>
                  </Link>
                </div>
                <div className="card-content card-content-edit">
                  <span className="card-title activator purple-text text-purple text-lighten-3 fs-6 text">
                    How to play
                    <i className="material-icons right">more_vert</i>
                  </span>

                  <h3 className="title-basicMenu">Choose the correct</h3>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    How to play<i className="material-icons right">close</i>
                  </span>
                  <p>
                    Match the word in the correct option. You must push on top
                    of the drawn to select one and earn points.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //-------------------------------------------------------------------------grammar */}
        <div className="contain-basicMenu">
          <div className="row box-grammar-basicMenu">
            <div className="col s12 m6">
              <div className="card card-content-edit">
                <div className="card-image ">
                  <Link
                    to="intro-grammar"
                    className="btn-floating floatBig-basicMenu  waves-effect waves-light red"
                  >
                    <i className="material-icons">play_arrow</i>
                  </Link>
                </div>
                <div className="card-content card-content-edit">
                  <span className="card-title activator purple-text text-purple text-lighten-3  fs-6 text">
                    How to play
                    <i className="material-icons right">more_vert</i>
                  </span>
                  <h3 className="title-basicMenu">Grammar</h3>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    How to play<i className="material-icons right">close</i>
                  </span>
                  <p>
                    We are going to learn "to be" verb. Choose the correct
                    option pushing on the correct box to earn points.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* //-------------------------------------------------------------------------match */}
          <div className="row box-match-basicMenu">
            <div className="col s12 m6 ">
              <div className="card card-content-edit">
                <div className="card-image  ">
                  <Link
                    to="intro-match"
                    className="btn-floating floatSmall-basicMenu waves-effect waves-light red"
                  >
                    <i className="material-icons ">play_arrow</i>
                  </Link>
                </div>
                <div className="card-content card-content-edit">
                  <span className="card-title activator purple-text text-purple text-lighten-3  fs-6 text">
                    How to play
                    <i className="material-icons right">more_vert</i>
                  </span>
                  <h3 className="title-basicMenu">Can you find?</h3>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    How to play<i className="material-icons right">close</i>
                  </span>
                  <p>
                    Match the word on top of the proper drawn to earn points.
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
