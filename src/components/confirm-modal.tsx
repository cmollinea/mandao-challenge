import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useAppDispatch } from "../hooks";
import { removeFromCart } from "../slices/cart-slice";

export function ConfirmModal({ id }: { id: number }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useAppDispatch();

  const handleConfirmDeletion = () => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <>
      <Button
        onClick={handleShow}
        style={{ top: "3px", right: "2px" }}
        className="border-0 position-absolute text-danger"
        variant="linkr"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          height={15}
          width={15}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Remove product</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure?</Modal.Body>
        <Modal.Footer>
          <Button variant="link" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleConfirmDeletion} variant="danger">
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
