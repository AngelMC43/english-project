import { Link } from "react-router-dom";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./basicmenu.css";
import image from "../../visual/basic/inf.png";

export default function BasicMenu() {
  //const [selectedId, setSelectedId] = useState(null);

  return (
    <div>
      <div className="main-basicMenu">
        <h1 className="title-basicMenu">Basic level categories:</h1>

        <div className="contain-basicMenu">
          <div className="row box-vocabulary-basicMenu">
            <div className="col s12 m6">
              <div className="card">
                <div className="card-image ">
                  <Link
                    to="vocabulary"
                    className="btn-floating floatSmall-basicMenu  waves-effect waves-light red"
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
          {/* //-------------------------------------------------------choose */}
          <div className="row box-choose-basicMenu">
            <div className="col s12 m6">
              <div className="card">
                <div className="card-image ">
                  <Link
                    to="choose"
                    className="btn-floating floatBig-basicMenu  waves-effect waves-light red"
                  >
                    <i className="material-icons">play_arrow</i>
                  </Link>
                </div>
                <div className="card-content card-content-edit">
                  <span className="card-title activator grey-text text-darken-4">
                    Choose the correct
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
        {/* //-------------------------------------------------------------------------grammar */}
        <div className="contain-basicMenu">
          <div className="row box-grammar-basicMenu">
            <div className="col s12 m6">
              <div className="card">
                <div className="card-image ">
                  <Link
                    to="grammar"
                    className="btn-floating floatBig-basicMenu  waves-effect waves-light red"
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
          {/* //-------------------------------------------------------------------------match */}
          <div className="row box-match-basicMenu">
            <div className="col s12 m6 ">
              <div className="card card-content-edit">
                <div className="card-image ">
                  <Link
                    to="match"
                    className="btn-floating floatSmall-basicMenu waves-effect waves-light red"
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

{
  /* {items.map((item) => (
  <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
    <motion.h5>{item.subtitle}</motion.h5>
    <motion.h2>{item.title}</motion.h2>
  </motion.div>
))}
<AnimatePresence>
  {selectedId && (
    <motion.div layoutId={selectedId}>
      <motion.h5>{item.subtitle}</motion.h5>
      <motion.h2>{item.title}</motion.h2>
      <motion.button onClick={() => setSelectedId(null)} />
    </motion.div>
  )}
</AnimatePresence> */
}
