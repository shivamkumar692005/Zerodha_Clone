import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="images/smallcaseLogo.png" alt="universe" style={{width:"50%" }} />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="images/streakLogo.png" alt="universe" style={{width:"50%" }} />
          <p className="text-small text-muted">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="images/sensibullLogo.svg" alt="universe" style={{width:"50%" }} />
          <p className="text-small text-muted">Option Trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="images/zerodhaFundhouse.png" alt="universe" style={{width:"50%" }} />
          <p className="text-small text-muted">Asset managment</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="images/goldenpiLogo.png" alt="universe" style={{width:"50%" }} />
          <p className="text-small text-muted">Bond Trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="images/dittoLogo.png" alt="universe" style={{width:"50%" }} />
          <p className="text-small text-muted">Insurence platform</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;