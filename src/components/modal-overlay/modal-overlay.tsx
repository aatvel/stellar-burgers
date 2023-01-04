import React, {FC} from "react";
import modalOverlayStyles from "./modal-overlay.module.css";
import PropTypes from "prop-types";

interface IModal {
  toggleModal: () => void;
}

const ModalOverlay: FC<IModal>= ({ toggleModal }) => {
  return (
    <div
      className={modalOverlayStyles.modalOverlay}
      onClick={toggleModal}
    ></div>
  );
};

ModalOverlay.propTypes = {
  toggleModal: PropTypes.func.isRequired
};


export { ModalOverlay };
