import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1em" }}
      >
        <div className="col-6 p-3 text-center" style={{width:"500px", height:"500px",borderRadius: "50%" }}>
          <img
            src="images/iuii.jpg"
            style={{ borderRadius: "50%", width: "50%", objectFit: "contain" }}
            alt="Nithin Kamath"
          />
          <h4 className="mt-5">Shivam Kumar</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="https://github.com/shivamkumar692005">Github</a> / <a href="/">TradingQnA</a> /{" "}
            <a href="https://www.linkedin.com/in/shivam-kumar-4177202aa/">Linkedin</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;