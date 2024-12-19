import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteBlog } from "../../../Store/slice/admin";

const DeleteModal = ({
  isOpenDeleteModal,
  setIsOpenDeleteModal,
  dataBlogs,
}) => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    setIsOpenDeleteModal(false);
    dispatch(deleteBlog(dataBlogs));
  };
  return (
    <>
      <Modal
        show={isOpenDeleteModal}
        onHide={() => setIsOpenDeleteModal(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-0">{`Delete a blog: ${dataBlogs.title}`}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setIsOpenDeleteModal(false)}
          >
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
