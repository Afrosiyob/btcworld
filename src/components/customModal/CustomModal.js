import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import Ripples from "react-ripples";
import "./CustomModal.scss";
const CustomModal = (props) => {
  const {
    buttonLabel,
    sendLoading,
    regLoading,
    size,
    title,
    className,
    modalContent,
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  // if (sendLoading === false || regLoading === false) {
  //   toggle();
  // }

  return (
    <div>
      <Ripples color="rgba(255,255,255,0.5)" className="rounded-pill">
        <button className={className} onClick={toggle}>
          {buttonLabel}
        </button>
      </Ripples>

      <Modal
        size={size}
        centered={true}
        isOpen={modal}
        toggle={toggle}
        className={className}
      >
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>{modalContent}</ModalBody>
        {/* <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter> */}
      </Modal>
    </div>
  );
};

export default CustomModal;
