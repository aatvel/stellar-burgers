import React from "react";
import modalOverlayStyles from "./modal-overlay.module.css";
import PropTypes from "prop-types";

const ModalOverlay = ({ toggleModal  }) => {
  return <div className={modalOverlayStyles.modalOverlay} onClick={toggleModal }></div>;
};

ModalOverlay.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export  {ModalOverlay};
