import React from "react";
import Navbar from "../Navbar/Navbar";
import NodeType from "../NodeType";
import "./Homes.css";
function Home() {
  function onButtonClick() {
    console.log("hello");
    // return <NodeType />;
  }
  return (
    <>
      <Navbar />
      <div className="homeContainer">
        <div className="firstNode">
          <div>First Name</div>
          <div className="addButton">
            <button
              className="btn button"
              type="button"
              //   onClick={() => {
              //     onButtonClick();
              //   }}
              data-toggle="modal"
              data-target="#staticBackdrop"
            >
              <img
                alt="add button"
                src={require("./addButton.png")}
                className="buttonImage"
              />
            </button>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
