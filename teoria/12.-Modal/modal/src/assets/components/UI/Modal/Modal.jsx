import { ModalContent, Overlay } from "./Modal.element";

const Modal = ({ children }) => {
  return (
    <Overlay>
      <ModalContent>{children}</ModalContent>
    </Overlay>
  );
};

export default Modal;
