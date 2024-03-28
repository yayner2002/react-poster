/* eslint-disable react/prop-types */
import classes from "./Modal.module.css";

const Modal = ({ children, onClose }) => {
  return (
    <>
      <div className={classes.overlay} onClick={onClose} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
