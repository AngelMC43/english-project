import "./mapaIdeas.css";
import arbol5 from "../../visual/main/arbol5.jpg";
import arbol4 from "../../visual/main/arbol4.jpg";
import arbol3 from "../../visual/main/arbol3.jpg";
import arbol from "../../visual/main/arbol.jpg";

export default function MapaIdeas() {
  return (
    <div>
      <h1 className="title-mapa">
        {" "}
        <span className="purple-letter">M</span>apa de
        <span className="green-letter"> I</span>deas
      </h1>
      <div className="container-mapa">
        <img src={arbol} className="firstPic" />
      </div>
      <div className="container-mapSecond">
        {" "}
        <img src={arbol3} className="secondPic" />
      </div>
      <div className="container-mapThird">
        {" "}
        <img src={arbol4} className="thirdPic" />
      </div>
      <div className="container-mapFourth">
        {" "}
        <img src={arbol5} className="fourthPic" />
      </div>
      {/* <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active esto" data-bs-interval="10000">
            <img src={arbol4} className="esto" />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item esto" data-bs-interval="2000">
            <img src={arbol5} />{" "}
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item esto">
            <img src={arbol3} />{" "}
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
    </div>
  );
}
