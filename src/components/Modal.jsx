/* eslint-disable react/prop-types */
import classes from "./Modal.module.css";

const Modal = (props) => {


  return (
    <>
      <div className={classes.overlay} onClick={props.onClose}/>
      <dialog open className={classes.modal}>
        {props.children}
      </dialog>
    </>
  );
};

export default Modal;
