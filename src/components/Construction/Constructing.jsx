import React from "react";
import "./constructing.css";

export const Constructing = React.forwardRef(function constructingPage(
  props,
  ref
) {
  return (
    <div ref={ref} {...props} className="row">
      <div className="col-6">
        <div className="construct-svg-container">
          <img
          className="construct-svg"
          src={`${process.env.PUBLIC_URL}/assets/svg/under-construction.svg`}
          alt="under-construction"
        />
        </div>
        
      </div>
      <div className="col-6">
        <div className="content">
          <h1>
            Under Construction...
            <br />
            Stay Tune!
          </h1>
          <hr />
          <h3>Hi I'm Soo Cia Yang(Cyril Soo) 👋</h3>
          <p>Welcome to my very first personal website.</p>
          <p>I'm planning to use this website as my online portfolio.</p>
          <p>
            And currently I'm still working hard to come out the website as soon as
            possible !👾
          </p>
          <hr />
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={`${process.env.PUBLIC_URL}/favicon.ico`}
              alt="sun-icon"
              width="30rem"
            />
            <span style={{ paddingLeft: "10px" }}>Cyril Soo © 2021</span>

            <span style={{ marginLeft: "auto" }}>
              <a href="https://github.com/Soocyang">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/github.png`}
                  alt="github-icon"
                  width="30rem"
                />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});
