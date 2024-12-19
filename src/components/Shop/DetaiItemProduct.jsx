import { Link, useParams } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Col, Container, Modal, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { dataProducts } from "../../services/UserServices";
import { FaRegHeart } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import PreviewItem from "../PreViewItem/PreviewItem";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, increaseItemQuantity } from "../../Store/slice/cart";

const DetaiItemProduct = () => {
  const [currentBook, setCurrentBook] = useState([]);
  const [relatedBook, setRelatedBook] = useState([]);
  const [responseData, setResponseDeta] = useState([]);
  const params = useParams();
  const paramsID = parseInt(params.id);
  const [quantityInput, setQuantityInput] = useState(1);
  const [activeElem, setActiveElem] = useState(0);
  const [show, setShow] = useState(false);
  const [idItem, setIdItem] = useState();
  const handleClose = () => setShow(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const item = useSelector((state) => state.carts.products);

  useEffect(() => {
    const getItem = async () => {
      try {
        let res = await dataProducts();
        setResponseDeta([...res.data]);
        const book = [...res.data].filter((item) => item.id === paramsID);
        setCurrentBook(book);
      } catch (error) {
        console.log(error);
      }
    };
    getItem();
  }, [paramsID]);

  useEffect(() => {
    const filterRelatedBooks = () => {
      if (currentBook) {
        const related = responseData.filter((item) =>
          item.categories.some((category) =>
            currentBook[0].categories.includes(category)
          )
        );
        setRelatedBook(related);
      }
    };
    filterRelatedBooks();
  }, [currentBook, responseData]);

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

  const btnIconAnimation = {
    hidden: {
      y: 0,
      background: "#F6F5F3",
      color: "#19110b",
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
    toast(`✅ ${item.name}product added to cart`, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    dispatch(addToCart(item));
  };

  return (
    <>
      <div>
        <section className="bread-crumb">
          <Container>
            <Row>
              <Col>
                <Breadcrumb className="custom-breadcrumb">
                  <Breadcrumb.Item className="custom-breadcrumb-item" href="/">
                    Home
                  </Breadcrumb.Item>
                  <Breadcrumb.Item
                    className="custom-breadcrumb-item"
                    href="/shop"
                  >
                    Shop
                  </Breadcrumb.Item>
                  <Breadcrumb.Item
                    className="custom-breadcrumb-item"
                    href="https://getbootstrap.com/docs/4.0/components/breadcrumb/"
                  >
                    Biography
                  </Breadcrumb.Item>
                  <Breadcrumb.Item className="custom-breadcrumb-item" active>
                    {currentBook.map((item, index) => (
                      <span key={item.id}>{item.name}</span>
                    ))}
                  </Breadcrumb.Item>
                </Breadcrumb>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="detail-product">
          <Container>
            {currentBook.map((item, index) => {
              return (
                <Row key={index}>
                  <Col className="custom-col" lg={4}>
                    <div>
                      <img
                        src={`https://websitebook-api.vercel.app${item.image}`}
                      />
                    </div>
                  </Col>
                  <Col className="custom-col" lg={8}>
                    <Link>
                      <p className="mb-0">{item.name}</p>
                    </Link>
                    <ul className="preview-item__detail mb-0">
                      <li>
                        <span>{item.price}$</span>
                      </li>
                      <li>
                        <span>Publisher:</span>
                        <span> {item.author}</span>
                      </li>
                      <li>
                        <span>YearPublished:</span>
                        <span> {item.year_published}</span>
                      </li>
                      <li>
                        <span>Categories:</span>
                        {item.categories.map((category, index) => (
                          <span key={index}>
                            {category}
                            {index !== item.categories.length - 1 && ", "}
                          </span>
                        ))}
                      </li>
                      <li>
                        <span>Pages:</span>
                        <span>{item.pages}</span>
                      </li>
                      <li>
                        <span>Language:</span>
                        <span>{item.language}</span>
                      </li>
                      <li>
                        <span>Author:</span>
                        <span>{item.author}</span>
                      </li>
                    </ul>
                    <section className="d-flex align-items-center">
                      <form action="">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(increaseItemQuantity(item.id));
                          }}
                        >
                          +
                        </button>
                        <input type="number" value={item.quantity} readOnly />
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            if (quantityInput > 1) {
                              setQuantityInput(quantityInput - 1);
                            }
                          }}
                          style={{
                            opacity: quantityInput === 1 ? "0.8" : "1",
                          }}
                        >
                          -
                        </button>
                      </form>
                      <motion.div
                        className="icon add-to-cart d-flex align-items-center justify-content-center"
                        variants={btnIconAnimation}
                        initial="hidden"
                        whileHover="show"
                        onClick={() => handleAddToCart(item)}
                      >
                        <span>Add To Cart</span>
                      </motion.div>
                      <motion.div
                        className="icon add-to-fav d-flex align-items-center justify-content-center"
                        variants={btnIconAnimation}
                        initial="hidden"
                        whileHover="show"
                      >
                        <FaRegHeart />
                      </motion.div>
                    </section>
                    <ul className="sharing mb-0 d-flex align-items-center">
                      <li>
                        <span>Share:</span>
                      </li>
                      <li className="d-flex align-items-center justify-content-center">
                        <FaFacebookF />
                      </li>
                      <li className="d-flex align-items-center justify-content-center">
                        <FaInstagram />
                      </li>
                      <li className="d-flex align-items-center justify-content-center">
                        <FaTwitter />
                      </li>
                    </ul>
                    <div className="send-email">
                      <span className="d-flex align-items-center justify-content-start">
                        <MdOutlineEmail style={{ paddingRight: "4px" }} />
                        Email to friend.
                      </span>
                    </div>
                  </Col>
                </Row>
              );
            })}
          </Container>
        </section>

        <section className="navs-and-tabs">
          <Container>
            <Row>
              <Col>
                <Nav variant="underline" defaultActiveKey={activeElem}>
                  <Nav.Item>
                    <Nav.Link eventKey={0} onClick={() => setActiveElem(0)}>
                      Description
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey={1} onClick={() => setActiveElem(1)}>
                      Reviews<span>(0)</span>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="more-info">
          <Container>
            <div
              className={`tabs descriptions-tab ${
                activeElem === 0 ? "active" : ""
              }`}
            >
              <Row>
                <Col>
                  {currentBook.map((item, index) => {
                    return (
                      <>
                        <p key={index} className="mb-0">
                          {item.description}
                        </p>
                      </>
                    );
                  })}
                </Col>
              </Row>
            </div>

            <div
              className={`tabs details-tab ${activeElem === 1 ? "active" : ""}`}
            >
              <Row>
                <Col>0 Reviews</Col>
              </Row>
            </div>
          </Container>
        </section>

        <section className="related-product">
          <Container>
            <Row>
              <Col>
                <p className="mb-0">Related Product</p>
              </Col>
            </Row>
            <Row>
              {relatedBook.slice(0, 4).map((item, index) => {
                return (
                  <>
                    <Col
                      className="custom-card"
                      xxl={3}
                      xl={3}
                      lg={3}
                      md={4}
                      sm={6}
                      key={index}
                    >
                      <Card>
                        <div className="img">
                          <Link
                            to={`/shop/products/${item.id}`}
                            onClick={() => window.scrollTo(0, 0)}
                          >
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
                          <ul className="mb-0 d-flex align-items-center justify-content-between">
                            <li>${item.price}</li>
                            <li>
                              <motion.div
                                variants={btnIconAnimation}
                                initial="hidden"
                                whileHover="show"
                              >
                                <MdOutlineShoppingBag />
                              </motion.div>
                            </li>
                          </ul>
                        </div>
                      </Card>
                    </Col>
                  </>
                );
              })}
            </Row>
          </Container>
        </section>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Preview Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PreviewItem idItem={idItem} />
        </Modal.Body>
      </Modal>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default DetaiItemProduct;
