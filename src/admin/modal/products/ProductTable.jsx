import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import CreateModal from "./CreateModal";
import { fetchProducts } from "../../../Store/slice/admin";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

const ProductTable = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.admins.products);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [product, setProduct] = useState({});

  const handleEditProduct = (item) => {
    setProduct(item);
    setIsOpenEditModal(true);
  };

  const handleDeleteProduct = (item) => {
    setProduct(item);
    setIsDeleteModal(true);
  };

  const handleCreateProduct = () => {
    setIsOpenCreateModal(true);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <div
        className="header-products-modal"
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "15px 0",
        }}
      >
        <h4 className="mb-0 d-flex align-items-center">Table Products</h4>
        <Button variant="primary" onClick={() => handleCreateProduct()}>
          Add New
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Year Published</th>
            <th>Page</th>
            <th>Language</th>
            <th>Author</th>
            <th>Categories</th>
            <th>Image</th>
            <th>Sale</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {getProducts?.map((item) => {
            return (
              <>
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description.slice(0, 14)}...</td>
                  <td>{item.price}$</td>
                  <td>{item.year_published}</td>
                  <td>{item.pages}</td>
                  <td>{item.language}</td>
                  <td>{item.author}</td>
                  <td>{item.categories}</td>
                  <td>
                    <img
                      src={`http://localhost:3000/${item.image}`}
                      style={{
                        width: "100px",
                        height: "150px",
                      }}
                    />
                  </td>
                  <td>{item.sale ? "true" : "false"}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <Button onClick={() => handleEditProduct(item)}>
                      Edit
                    </Button>
                    <Button onClick={() => handleDeleteProduct(item)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>

      <EditModal />

      <CreateModal
        isOpenCreateModal={isOpenCreateModal}
        setIsOpenCreateModal={setIsOpenCreateModal}
      />

      <DeleteModal
        isDeleteModal={isDeleteModal}
        setIsDeleteModal={setIsDeleteModal}
        dataProduct={product}
      />
    </>
  );
};
export default ProductTable;
