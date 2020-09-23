import React from "react";

function NodeType() {
  console.log("hello1");
  return (
    <>
      <div
        class="modal-dialog modal-dialog-centered"
        id="staticBackdrop"
        data-backdrop="static"
      >
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">
            Add Parents
          </h5>
          <h5 class="modal-title" id="staticBackdropLabel">
            Add Siblings
          </h5>
          <h5 class="modal-title" id="staticBackdropLabel">
            Add Children
          </h5>
        </div>
      </div>
    </>
  );
}

export default NodeType;
