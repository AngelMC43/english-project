import "./footer.css";
import { Link } from "react-router-dom";
import facebook from "../../visual/main/facebook.png";
import instagram from "../../visual/main/instagram.png";
import tiktok from "../../visual/main/tiktok.png";
import twitter from "../../visual/main/twitter.png";

export default function Footer() {
  return (
    <>
      <footer className="page-footer d-flex">
        <div className="d-flex">
          <div className="row ">
            <div className="col columnF-footer">
              <h5 className="titleMain-footer">AngeLingo</h5>
              <p className="color-footer">
                Aprender inglés con juegos interactivos es la forma más facil de
                adquirir nuevos conocimientos. Podrás elegir varios niveles
                según tu grado de conocimiento.
              </p>
              <p className="fw-bold color-footer">
                ¡Mucha suerte en tu camino!
              </p>
            </div>
            <div className="col columnS-footer">
              <h5 className="titleMain-footer">Redes sociales</h5>
              <br />
              <ul className="icons-footer">
                <li>
                  <Link to="" className="col">
                    <img src={facebook} className="pic-footer" />
                  </Link>
                </li>
                <li>
                  <Link to="" className="col">
                    <img src={instagram} className="pic-footer" />
                  </Link>
                </li>
                <li>
                  <Link to="" className="col">
                    <img src={tiktok} className="pic-footer" />
                  </Link>
                </li>
                <li>
                  <Link to="" className="col">
                    <img src={twitter} className="pic-footer" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col columnT-footer">
              {" "}
              <h5 className="titleMain-footer side-footer">Links</h5>
              <ul className="side-footer">
                <li>
                  <Link to="mapa-ideas" className="color-footer">
                    Mapa de ideas
                  </Link>
                </li>
                <li>
                  <Link to="contacto" className="color-footer">
                    Contacto{" "}
                  </Link>
                </li>

                <li>
                  <Link to="about" className="color-footer">
                    Sobre nosotros{" "}
                  </Link>
                </li>
                <br />
                <li>
                  <h4 className="titleLogo-footer">
                    <span className="purple-letter">A</span>nge
                    <span className="green-letter">L</span>ingo
                  </h4>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">AngeLingo</h5>
              <p class="grey-text text-lighten-4">
                {" "}
                Aprender inglés con juegos interactivos es la forma más facil de
                adquirir nuevos conocimientos. Podrás elegir varios niveles
                según tu grado de conocimiento.
              </p>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Links</h5>
              <ul>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Mapa de ideas
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Link 2
                  </a>
                </li>
              </ul>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Links</h5>
              <ul>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Mapa de ideas
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Link 2
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
            © 2022 AngeLingo All rights reserved
            <a class="grey-text text-lighten-4 right" href="#!">
              More Links
            </a>
          </div>
        </div> */}
      </footer>
      <div class="bgSub-footer">© 2022 AngeLingo All rights reserved</div>
    </>
  );
}
