import React from "react";
import { createPortal } from "react-dom";
import { Link, useLocation, useNavigate } from "react-router-dom";
import modalStyles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ModalOverlay } from "../modal-overlay/modal-overlay";
import PropTypes from "prop-types";

const Modal = ({ title, children, closeModal }) => {

  const modalRoot = document.getElementById("modals");

  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [modalRoot]);

  return createPortal(

        <>
          <div className={`${modalStyles.container} pt-15 pr-10 pl-10 pb-15`}>
            <div className={modalStyles.header}>
              <h2 className={`${modalStyles.title} text text_type_main-large`}>
                {title}
              </h2>

              <button
                className={modalStyles.closeButton}
                type="button"
                onClick={closeModal}
              >
                <CloseIcon type="secondary" />
              </button>
            </div>

            <div className={modalStyles.text}>{children}</div>
          </div>
          <ModalOverlay
            toggleModal={closeModal}
          />
        </>
      ,
    modalRoot
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
};

export default React.memo(Modal);
