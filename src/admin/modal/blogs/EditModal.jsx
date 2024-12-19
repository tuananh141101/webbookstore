import { useEffect, useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editBlog } from "../../../Store/slice/admin";

const EditModal = ({ isOpenEditModal, setIsOpenEditModal, dataBlogs }) => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [categories, setCategories] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (dataBlogs?.id) {
      setId(dataBlogs?.id);
      setTitle(dataBlogs?.title);
      setContent(dataBlogs?.content);
      setDate(dataBlogs?.date);
      setCategories(dataBlogs?.categories);
    }
  }, [dataBlogs]);

  const handleSubmit = () => {
    dispatch(editBlog({ id, title, content, date, categories }));
    setIsOpenEditModal(false);
  };

  return (
    <>
      <Modal
        show={isOpenEditModal}
        onHide={() => setIsOpenEditModal(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{`Edit Blog: ${dataBlogs.id}`}</Modal.Title>
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
          <Button variant="secondary" onClick={() => setIsOpenEditModal(false)}>
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

export default EditModal;
