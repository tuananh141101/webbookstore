import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteProducts } from "../../../Store/slice/admin";

const DeleteModal = ({ isDeleteModal, setIsDeleteModal, dataProduct }) => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    setIsDeleteModal(false);
    dispatch(deleteProducts(dataProduct));
  };

  return (
    <>
      <Modal
        show={isDeleteModal}
        onHide={() => setIsDeleteModal(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-0">`Delete the product: ${dataProduct.name}` </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsDeleteModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmit()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModal;
