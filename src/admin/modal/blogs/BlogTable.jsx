import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../../Store/slice/admin";
import CreateModal from "./CreateModal";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

const Blogtable = () => {
  const dispatch = useDispatch();
  const getBlogs = useSelector((state) => state.admins.blogs);

  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [dataBlogs, setDataBlogs] = useState({});

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  const handleCreate = () => {
    setIsOpenCreateModal(true);
  };

  const handleDelete = (item) => {
    setDataBlogs(item);
    setIsOpenDeleteModal(true);
  };

  const handleEdit = (item) => {
    setIsOpenEditModal(true);
    setDataBlogs(item);
  };

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
        <h4 className="mb-0 d-flex align-items-center">Table Blog</h4>
        <Button variant="primary" onClick={() => handleCreate()}>
          Add New
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Content</th>
            <th>Date</th>
            <th>Categories</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {getBlogs?.map((item, index) => {
            return (
              <>
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.content}</td>
                  <td>{item.date}</td>
                  <td>{item.categories}</td>
                  <td className="d-flex align-items-center justify-content-center flex-column">
                    <Button
                      style={{ marginRight: "12px" }}
                      onClick={() => handleEdit(item)}
                    >
                      Edit
                    </Button>
                    <Button onClick={() => handleDelete(item)}>Delete</Button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>

      <CreateModal
        isOpenCreateModal={isOpenCreateModal}
        setIsOpenCreateModal={setIsOpenCreateModal}
      />

      <DeleteModal
        isOpenDeleteModal={isOpenDeleteModal}
        setIsOpenDeleteModal={setIsOpenDeleteModal}
        dataBlogs={dataBlogs}
      />

      <EditModal
        isOpenEditModal={isOpenEditModal}
        setIsOpenEditModal={setIsOpenEditModal}
        dataBlogs={dataBlogs}
      />
    </>
  );
};
export default Blogtable;
