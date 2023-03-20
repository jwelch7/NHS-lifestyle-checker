import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Modal = ({ handleCloseModal, outcomeMessage }) => {
  console.log(outcomeMessage);

  return (
    <div>
      <div className="modal-overlay">
        <div className="modal">
          <p>This is the message inside the modal.</p>
          <button onClick={handleCloseModal}>Close</button>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default Modal;
