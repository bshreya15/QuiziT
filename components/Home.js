import React, { Fragment } from "react";
//
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceD20 } from "@fortawesome/free-solid-svg-icons";
function Home() {
  return (
    <Fragment>
      <Helmet>
        <title>Quiz!T- Home</title>
      </Helmet>
      <div id="home">
        <section>
          <div className="logo">
            <FontAwesomeIcon icon={faDiceD20} />
          </div>
          <h1>Quiz!T</h1>
          <div className="play-button-container">
            <ul>
              <li >
                <Link to="/play/instructions" className="play-button">Login</Link>
              </li>
            </ul>
          </div>
          <div className="auth-container">
            <Link to="/login" className="auth-buttons" id="login-button">Play As Guest</Link>
            <Link to="/register" className="auth-buttons" id="register-button">Register</Link>
          </div>
        </section>
      </div>
    </Fragment>
  );
}

export default Home;
