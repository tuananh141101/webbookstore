import { useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createBlog } from "../../../Store/slice/admin";

const CreateModal = ({ isOpenCreateModal, setIsOpenCreateModal }) => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [categories, setCategories] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(createBlog({ id, title, content, date, categories }));
    setIsOpenCreateModal(false);
  };

  return (
    <>
      <Modal
        show={isOpenCreateModal}
        onHide={() => setIsOpenCreateModal(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel label="Id" className="mb-3">
            <Form.Control
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel label="Title" className="mb-3">
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel label="Content" className="mb-3">
            <Form.Control
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel label="Date" className="mb-3">
            <Form.Control
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel label="Categories" className="mb-3">
            <Form.Control
              type="text"
              value={categories}
              onChange={(e) => setCategories(e.target.value)}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setIsOpenCreateModal(false)}
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

export default CreateModal;
