import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import Ripples from "react-ripples";
import "./CustomModal.scss";
const CustomModal = (props) => {
  const {
    buttonLabel,
    size,
    title,
    className,
    modalContent,
    toggleModal,
    modal,
  } = props;

  return (
    <div>
      <Ripples color="rgba(255,255,255,0.5)" className="rounded-pill">
        <button className={className} onClick={toggleModal}>
          {buttonLabel}
        </button>
      </Ripples>

      <Modal
        size={size}
        centered={true}
        isOpen={modal}
        toggle={toggleModal}
        className={className}
      >
        <ModalHeader toggle={toggleModal}>{title}</ModalHeader>
        <ModalBody>{modalContent}</ModalBody>
      </Modal>
    </div>
  );
};

export default CustomModal;
