import { useDispatch, useSelector } from "react-redux";
import { FaFilter } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaFilterCircleXmark } from "react-icons/fa6";
import { clearFilter, filterall } from "../../Store/slice/categories";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import PreviewItem from "../PreViewItem/PreviewItem";
import { addToCart } from "../../Store/slice/cart";

const SideMainShop = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [idItem, setIdItem] = useState("");
  const filter = useSelector((state) => state.categories.filter);
  const products = useSelector((state) => state.categories.products);
  const getFilterChecked = useSelector((state) => state.categories.arr);

  const handleClose = () => setShow(false);

  // Framer Motion
  const btnIconAnimation = {
    hidden: {
      y: 0,
      background: "#F6F5F3",
    },
    show: {
      y: -5,
      background: "#161619",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    exit: {
      y: 0,
    },
  };

  return (
    <>
      <section>
        <div className="filter d-flex align-items-center justify-content-between">
          <div className="filter-shop d-flex">
            {getFilterChecked &&
              getFilterChecked.map((item, index) => {
                return (
                  <>
                    <ul
                      className="mb-0 d-flex align-items-center flex-wrap"
                      key={index}
                    >
                      <li className="d-flex align-items-center justify-content-between">
                        <span>Categories: {item.categories.join(", ")}</span>
                      </li>
                      <li className="d-flex align-items-center justify-content-between">
                        <span>Author: {item.author.join(", ")}</span>
                      </li>
                      <li className="d-flex align-items-center justify-content-between">
                        <span>
                          Price: {item.minPrice}$ - {item.maxPrice}$
                        </span>
                      </li>
                    </ul>
                  </>
                );
              })}
          </div>
          <div className="widget">
            <ul className="mb-0 d-flex align-items-center justify-content-end">
              <li
                className="filter-button"
                onClick={() => dispatch(filterall())}
              >
                <span>
                  Filter <FaFilter />
                </span>
              </li>
              <li
                className="clear-button"
                onClick={() => dispatch(clearFilter())}
              >
                <span>
                  Clear <FaFilterCircleXmark />
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="product d-flex align-items-center justify-content-between flex-wrap">
          {filter.length > 0
            ? filter.map((item, index) => {
                return (
                  <>
                    <Card style={{ width: "19rem" }} className="border">
                      <div className="img">
                        <Link to={`products/${item.id}`}>
                          <Card.Img
                            variant="top"
                            src={`https://websitebook-api.vercel.app${item.image}`}
                          />
                        </Link>

                        <motion.div
                          className="btn-icon quick-view"
                          variants={btnIconAnimation}
                          initial="hidden"
                          whileHover="show"
                          onClick={() => {
                            setShow(true);
                            setIdItem(item.id);
                          }}
                        >
                          <FaRegEye />
                        </motion.div>
                        <motion.div
                          className="btn-icon add-fav-book"
                          variants={btnIconAnimation}
                          initial="hidden"
                          whileHover="show"
                        >
                          <FaRegHeart />
                        </motion.div>
                      </div>

                      <Card.Body className="border-bottom">
                        <Card.Text>{item.categories.join(", ")}</Card.Text>
                        <Card.Title>{item.name}</Card.Title>
                        <p className="mb-0">
                          <Link>{item.author}</Link>
                        </p>
                      </Card.Body>
                      <div className="card-price">
                        <ul className="d-flex align-items-center justify-content-between mb-0">
                          <li>${item.price}</li>
                          <li>
                            <motion.div
                              initial={{
                                y: 0,
                                background: "#F6F5F3",
                              }}
                              whileHover={{
                                y: -5,
                                background: "#161619",
                              }}
                              exit={{
                                y: 0,
                              }}
                              transition={{
                                duration: 0.2,
                                ease: "easeInOut",
                              }}
                            >
                              <Link>
                                <MdOutlineShoppingBag />
                              </Link>
                            </motion.div>
                          </li>
                        </ul>
                      </div>
                    </Card>
                  </>
                );
              })
            : products.map((item, index) => {
                return (
                  <>
                    <Card style={{ width: "19rem" }} className="border">
                      <div className="img">
                        <Link to={`products/${item.id}`}>
                          <Card.Img
                            variant="top"
                            src={`https://websitebook-api.vercel.app${item.image}`}
                          />
                        </Link>

                        <motion.div
                          className="btn-icon quick-view"
                          variants={btnIconAnimation}
                          initial="hidden"
                          whileHover="show"
                          onClick={() => {
                            setShow(true);
                            setIdItem(item.id);
                          }}
                        >
                          <FaRegEye />
                        </motion.div>
                        <motion.div
                          className="btn-icon add-fav-book"
                          variants={btnIconAnimation}
                          initial="hidden"
                          whileHover="show"
                        >
                          <FaRegHeart />
                        </motion.div>
                      </div>

                      <Card.Body className="border-bottom">
                        <Card.Text>{item.categories.join(", ")}</Card.Text>
                        <Card.Title>{item.name}</Card.Title>
                        <p className="mb-0">
                          <Link>{item.author}</Link>
                        </p>
                      </Card.Body>
                      <div className="card-price">
                        <ul className="d-flex align-items-center justify-content-between mb-0">
                          <li>${item.price}</li>
                          <li onClick={() => dispatch(addToCart(item))}>
                            <motion.div
                              initial={{
                                y: 0,
                                background: "#F6F5F3",
                              }}
                              whileHover={{
                                y: -5,
                                background: "#161619",
                              }}
                              exit={{
                                y: 0,
                              }}
                              transition={{
                                duration: 0.2,
                                ease: "easeInOut",
                              }}
                            >
                              <Link>
                                <MdOutlineShoppingBag />
                              </Link>
                            </motion.div>
                          </li>
                        </ul>
                      </div>
                    </Card>
                  </>
                );
              })}
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Preview Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PreviewItem idItem={idItem} />
          </Modal.Body>
        </Modal>
      </section>
    </>
  );
};

export default SideMainShop;
