import React, {FC} from "react";
import { createPortal } from "react-dom";
import modalStyles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ModalOverlay } from "../modal-overlay/modal-overlay";
import PropTypes from "prop-types";

interface IModal {
  title?: string;
  closeModal: () => void;
  children: JSX.Element
}

const Modal: FC<IModal> = ({ title, children, closeModal }) => {

  const modalRoot = document.getElementById("modals") as HTMLElement;

  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
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
             {title ? <h2 className={`${modalStyles.title} text text_type_main-large`}>
                {title}
              </h2> : null} 

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
  children: PropTypes.element.isRequired
};

export default React.memo(Modal);
