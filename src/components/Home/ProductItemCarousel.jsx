import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Col, Container, Modal, Row, ToastContainer } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import PreviewItem from "../PreViewItem/PreviewItem";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../Store/slice/cart";

const ProductItemCarousel = () => {
  const [activeElem, setActiveElem] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [show, setShow] = useState(false);
  const [idItem, setIdItem] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const listProductsBestSelling = useSelector(
    (state) => state.products.listProductsBestSelling
  );
  const listProductsSale = useSelector(
    (state) => state.products.listProductsSale
  );
  const listProductsLatest = useSelector(
    (state) => state.products.listProductsLatest
  );
  const handleClose = () => setShow(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const determineHeightImgProductCarousel = () => {
    return windowWidth <= 575
      ? 725.33
      : windowWidth <= 768
      ? 325.33
      : windowWidth <= 1200
      ? 285.33
      : 405.33;
  };
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

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.success(`add item ${item.name} success`);
  };

  return (
    <>
      <section className="product-item-carousel">
        <Container>
          <Row className="custom-row1">
            <Col className="col1" sm={6}>
              <p className="mb-0">Books</p>
              <span>The most recent books that arrived in our bookstore.</span>
            </Col>
            <Col
              className={`col2 d-flex align-items-center ${
                windowWidth <= 576
                  ? "justify-content-center"
                  : "justify-content-end"
              }`}
              sm={6}
            >
              <nav className="d-flex">
                {[0, 1, 2].map((i) => (
                  <a key={i} onClick={() => setActiveElem(i)}>
                    <AnimatePresence>
                      {activeElem === i && (
                        <motion.span
                          layoutId="navlink"
                          animate={{ opacity: 1 }}
                          initial={{ opacity: 0 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </AnimatePresence>
                  </a>
                ))}
              </nav>
            </Col>
          </Row>
          <motion.div
            className="carousel"
            ref={ref}
            style={{
              opacity: isInView ? 1 : 0,
              transition: "1.5s opacity",
            }}
          >
            <motion.div
              className={`carousel-bestselling carousel-card ${
                activeElem === 0 ? "active" : ""
              }`}
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: activeElem === 0 ? 1 : 0,
                y: activeElem === 0 ? 0 : 30,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              exit={{ opacity: 0, y: 30 }}
            >
              <Row>
                {listProductsLatest &&
                  listProductsLatest.map((item, index) => {
                    return (
                      <Col
                        className="custom-col mb-4"
                        xxl={3}
                        xl={3}
                        lg={3}
                        md={4}
                        sm={6}
                        key={index}
                      >
                        <Card style={{ width: "18rem" }} className="border">
                          <div className="img">
                            <Link to={`shop/products/${item.id}`}>
                              <Card.Img
                                variant="top"
                                src={`https://websitebook-api.vercel.app${item.image}`}
                                style={{
                                  height: `${determineHeightImgProductCarousel().toFixed(
                                    2
                                  )}px`,
                                }}
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
                            <Card.Text>{item.categories}</Card.Text>
                            <Card.Title>{item.name}</Card.Title>
                            <p className="mb-0">
                              <Link>{item.author}</Link>
                            </p>
                          </Card.Body>
                          <div className="card-price">
                            <ul className="d-flex align-items-center justify-content-between">
                              <li>${item.price}</li>
                              <li onClick={() => handleAddToCart(item)}>
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
                      </Col>
                    );
                  })}
              </Row>
            </motion.div>

            <motion.div
              className={`carousel-latest carousel-card ${
                activeElem === 1 ? "active" : ""
              } `}
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: activeElem === 1 ? 1 : 0,
                y: activeElem === 1 ? 0 : 30,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              exit={{ opacity: 0, y: 30 }}
            >
              <Row>
                {listProductsBestSelling &&
                  listProductsBestSelling.map((item, index) => {
                    return (
                      <Col
                        className="custom-col mb-4"
                        xxl={3}
                        xl={3}
                        lg={3}
                        md={4}
                        sm={6}
                        key={index}
                      >
                        <Card style={{ width: "18rem" }} className="border">
                          <div className="img">
                            <Link to={`categories/products/${item.id}`}>
                              <Card.Img
                                variant="top"
                                src={`https://websitebook-api.vercel.app${item.image}`}
                                style={{
                                  height: `${determineHeightImgProductCarousel().toFixed(
                                    2
                                  )}px`,
                                }}
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
                            <Card.Text>{item.categories}</Card.Text>
                            <Card.Title>{item.name}</Card.Title>
                            <p className="mb-0">
                              <Link>{item.author}</Link>
                            </p>
                          </Card.Body>
                          <div className="card-price">
                            <ul className="d-flex align-items-center justify-content-between">
                              <li>${item.price}</li>
                              <li>
                                <div onClick={() => console.log("t")}>
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
                                    style={{ pointerEvents: "none" }}
                                  >
                                    <Link>
                                      <MdOutlineShoppingBag />
                                    </Link>
                                  </motion.div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </Card>
                      </Col>
                    );
                  })}
              </Row>
            </motion.div>

            <motion.div
              className={`carousel-sale carousel-card ${
                activeElem === 2 ? "active" : ""
              }`}
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: activeElem === 2 ? 1 : 0,
                y: activeElem === 2 ? 0 : 30,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              exit={{ opacity: 0, y: 30 }}
            >
              <Row>
                {listProductsSale &&
                  listProductsSale.map((item, index) => {
                    return (
                      <Col
                        className="custom-col mb-4"
                        xxl={3}
                        xl={3}
                        lg={3}
                        md={4}
                        sm={6}
                        key={index}
                      >
                        <Card style={{ width: "18rem" }} className="border">
                          <div className="img">
                            <Link to={`categories/products/${item.id}`}>
                              <Card.Img
                                variant="top"
                                src={`https://websitebook-api.vercel.app${item.image}`}
                                style={{
                                  height: `${determineHeightImgProductCarousel().toFixed(
                                    2
                                  )}px`,
                                }}
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
                            <Link to={`categories/products/${item.id}`}>
                              <Card.Text>{item.categories}</Card.Text>
                              <Card.Title>{item.name}</Card.Title>
                              <p className="mb-0">
                                <Link>{item.author}</Link>
                              </p>
                            </Link>
                          </Card.Body>
                          <div className="card-price">
                            <ul className="d-flex align-items-center justify-content-between">
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
                      </Col>
                    );
                  })}
              </Row>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Preview Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PreviewItem idItem={idItem} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductItemCarousel;
