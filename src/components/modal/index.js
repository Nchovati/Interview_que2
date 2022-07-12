import React from "react";
import "./styles.css";

const Modal = (props) => {
  return (
    <div>
      <div id="openModal" className="modalDialog" onClick={props.closeModal}>
        <div onClick = { e => { e.stopPropagation(); }}>
          <a href="#close" title="Close" className="close" onClick={props.closeModal}>
            X
          </a>
          <p>fname={props.fname}</p>
          <p>lname={props.lname}</p>
          <p>Address={props.address}</p>
          <p>Email={props.email}</p>
          <p>Employment Status={props.selectedValue}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
