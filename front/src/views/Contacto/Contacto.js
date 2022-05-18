import "./contacto.css";
import sede from "../../visual/main/sede.png";
import email from "../../visual/main/email.png";
import phone from "../../visual/main/phone.png";
import mapp from "../../visual/main/mapp.png";

export default function About() {
  return (
    <div>
      <h1 className="title-contacto">
        <span className="purple-letter">C</span>ont
        <span className="green-letter">a</span>cto
      </h1>
      <div className="container-contacto">
        <h5 className="subTitle-contact">
          Tenemos un equipo de soporte a su disposición para cualquier duda o
          sugerencia
        </h5>
        <div className="inside-contact">
          <div className="p-contact">
            <p>Teléfono: </p>
            <p>
              <a href="tel:605587458">605587458</a>
            </p>
            <p>
              Lunes a viernes de 9:00 a 20:00h Sábados y domingos de 9:00 a
              17:00h
            </p>
            <p>
              <img src={phone} className="phone-pic" />
            </p>
          </div>
          <div className="p-contact">
            <p>Email:</p>
            <p>
              {" "}
              <a href="mailto:angelingo@mail.com">angelingo@mail.com</a>
            </p>
            <p>Escríbenos </p>
            <p>
              <img src={email} className="email-pic" />
            </p>
          </div>
          <div className="p-contact">
            <p>Sede:</p>
            <a href="https://www.google.es/maps/@36.6993826,-4.4384517,18z">
              {" "}
              Sor Teresa Prat, nº4
            </a>
            <p>
              <img src={sede} className="sede-pic" />
            </p>{" "}
            <p>
              <img src={mapp} className="mapp-pic" />
            </p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
