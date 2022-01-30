import { theme } from "@/utils/theme";
import { ClassNames } from "@emotion/react";
import $Modal from "react-modal";

type ModalProps = ReactModal.Props;

$Modal.setAppElement("#__next");

const Modal = ({ children, ...props }: ModalProps) => (
  <ClassNames>
    {({ css }) => (
      <$Modal
        overlayClassName={{
          base: "overlay-base",
          afterOpen: "overlay-after",
          beforeClose: "overlay-before",
        }}
        className={{
          base: "content-base",
          afterOpen: "content-after",
          beforeClose: "content-before",
        }}
        closeTimeoutMS={500}
        portalClassName={css`
          .overlay-base {
            padding: 1rem;
            position: fixed;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0);
            opacity: 0;
            transition-property: background-color, opacity;
            transition-duration: 375ms;
            transition-timing-function: ease-in-out;
            outline: 0;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .overlay-after {
            background-color: rgba(0, 0, 0, 0.8);
            opacity: 1;
          }

          .overlay-before {
            background-color: rgba(0, 0, 0, 0);
            opacity: 0;
          }
        `}
        {...props}
      >
        <div
          css={{
            position: "relative",
            padding: "1rem",
            background: "white",
            borderRadius: "0.375rem",
            border: `4px solid ${theme.color.general.black}`,
            boxShadow: `4px 5px 0 ${theme.color.type["water"]}`,
          }}
        >
          {children}
        </div>
      </$Modal>
    )}
  </ClassNames>
);

export default Modal;
