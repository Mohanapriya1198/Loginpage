import React from "react";
import "./Login.css";
import "./Login theme.css";

const login = () => {
  return (
    <div className="App">
      <div className="row">
        <div className="img-holder">
          <div className="bg"></div>
          <div class="info-holder"></div>
        </div>
        <div className="form-holder">
          <div className="form-content">
            <div className="form-items">
              <div className="page-links">
                <a href="#" className="active">
                  Login
                </a>
              </div>
              <form action="enquiry.php" method="post">
                <input
                  className="form-control"
                  type="text"
                  name="schoolname"
                  placeholder="Schoolname"
                  required
                />
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <input type="checkbox" id="chk1" />
                <label for="chk1">Remember me</label>
                <div className="form-button">
                  <button id="submit" type="submit" className="ibtn">
                    Login
                  </button>
                  <a href="">Forgot Password?</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
