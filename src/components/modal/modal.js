import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createPortal } from "react-dom";
import modalStyles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ModalOverlay } from "../modal-overlay/modal-overlay";
import PropTypes from "prop-types";
import { closeDetails } from "../../services/ingredient-details/details-actions";

const Modal = ({ title, children }) => {
  const dispatch = useDispatch();
  const {showModal } = useSelector((state) => state.details);

  const handleClick = () => {
    dispatch(closeDetails())
  }
  const modalRoot = document.getElementById("modals");

  
  React.useEffect(() => {
    const handleEsc = (e) => {
      e.key === "Escape" && dispatch(closeDetails());
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
            onClick={() => handleClick()}
          >
            <CloseIcon type="secondary" />
          </button>
        </div>

        <div className={modalStyles.text}>{children}</div>
      </div>
      <ModalOverlay toggleModal={() => handleClick()} />
    </>,
    modalRoot
  );
};

// Modal.propTypes = {
//   toggleModal: PropTypes.func.isRequired,
//   children: PropTypes.element.isRequired,
//   title: PropTypes.string,
// };

export default React.memo(Modal);
