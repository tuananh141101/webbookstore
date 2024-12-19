import { useEffect, useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editProducts } from "../../../Store/slice/admin";

const EditModal = ({ isOpenEditModal, setIsOpenEditModal, dataProduct }) => {
  const dispatch = useDispatch();
  const handleClose = () => setIsOpenEditModal(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [yearpublished, setYearPublished] = useState("");
  const [page, setPage] = useState("");
  const [language, setLanguage] = useState("");
  const [author, setAuthor] = useState("");
  const [categories, setCategories] = useState("");
  const [image, setImage] = useState("");
  const [sale, setSale] = useState(Boolean);
  const [quantity, setQuantity] = useState("");

  const handleSubmit = () => {
    console.log(">> check name,desc,cate,img = ", {
      id,
      name,
      description,
      price,
      yearpublished,
      page,
      language,
      author,
      categories,
      image,
      sale,
      quantity,
    });
    dispatch(
      editProducts({
        id,
        name,
        description,
        price,
        yearpublished,
        page,
        language,
        author,
        categories,
        image,
        sale,
        quantity,
      })
    );
  };

  useEffect(() => {
    if (dataProduct?.id) {
      setId(dataProduct?.id);
      setName(dataProduct?.name);
      setDescription(dataProduct?.description);
      setPrice(dataProduct?.price);
      setYearPublished(dataProduct?.yearpublished);
      setPage(dataProduct?.pages);
      setLanguage(dataProduct?.language);
      setAuthor(dataProduct?.author);
      setCategories(dataProduct?.categories);
      setImage(dataProduct?.image);
      setSale(dataProduct?.sale);
      setQuantity(dataProduct.quantity);
    }
  }, [dataProduct]);

  return (
    <>
      <Modal
        show={isOpenEditModal}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel label="Id" className="mb-3">
            <Form.Control
              value={id}
              type="text"
              onChange={(e) => setId(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel label="Name" className="mb-3">
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel label="Description" className="mb-3">
            <Form.Control
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel label="Price" className="mb-3">
            <Form.Control
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel label="YearPublished" className="mb-3">
            <Form.Control
              type="text"
              value={yearpublished}
              onChange={(e) => setYearPublished(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel label="Page" className="mb-3">
            <Form.Control
              type="text"
              value={page}
              onChange={(e) => setPage(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel label="Language" className="mb-3">
            <Form.Control
              type="text"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel label="Author" className="mb-3">
            <Form.Control
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel label="Categories" className="mb-3">
            <Form.Control
              type="text"
              value={categories}
              onChange={(e) => setCategories(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel label="Image" className="mb-3">
            <Form.Control
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel label="Sale" className="mb-3">
            <Form.Control
              type="text"
              value={sale}
              onChange={(e) => setSale(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel label="Quantity" className="mb-3">
            <Form.Control
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
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
