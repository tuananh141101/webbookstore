import { Col, Container, Row } from "react-bootstrap";
import "./Header.scss";
import { Link } from "react-router-dom";
import { LuMapPin } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Collapse from "react-bootstrap/Collapse";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../Store/slice/cart";
import { clearUser } from "../../Store/slice/auth";

const Header = () => {
  // Phim tat focus inputsearch
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        const searchInput = document.querySelector(".input-search");
        if (searchInput) {
          searchInput.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);
  const [containerPadding, setContainerPadding] = useState("py-4");
  const [show, setShow] = useState(false); //*offcanvas
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [otherOpen, setOtherOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false); //*Focus->change color icon search

  const { admin, user } = useSelector((state) => state.auths);

  const dispatch = useDispatch();
  const { cart, totalQuantity } = useSelector((state) => state.carts);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  // Offcanvas
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Responsive
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1200);
    setContainerPadding(window.innerWidth <= 992 ? "py-3" : "py-custom");
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    const rowSearchMobile = document.querySelector(".search-mobile");
    if (!isMobile) {
      rowSearchMobile.classList.add("hidden");
    } else {
      rowSearchMobile.classList.remove("hidden");
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  // FocusChangeColorIconSeach
  const handleFocus = (e) => {
    setIsFocused(true);
    document
      .querySelector("#searchInputLi .icon-search .icon")
      .classList.add("focused-icon");
  };

  return (
    <>
      <div className={`header`}>
        <div className={`header-top border-bottom`}>
          <Container className="header-top__container py-2">
            <Row>
              <Col className="top-left">
                <ul className="mb-0 d-flex align-items-center">
                  <li>
                    <span>
                      <MdOutlineMail className="icon icon-email" />
                      bookstore@gmail.com
                    </span>
                  </li>
                  <li>
                    <span>
                      <FaPhone className="icon icon-phone" />
                      07947694378
                    </span>
                  </li>
                </ul>
              </Col>
              <Col className="top-right d-flex justify-content-end">
                <ul className="mb-0 d-flex align-items-center">
                  <li>
                    <Link to="/">
                      <LuMapPin className="icon icon-map" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaFacebook className="icon icon-fa" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaInstagram className="icon icon-in" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaTwitter className="icon icon-tw" />
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
        <div className={`header-bottom`}>
          <Container className={`header-bottom__container ${containerPadding}`}>
            <Row>
              <Col className="bottom-left" xxl={4} xl={2} lg={5} md={4} sm={4}>
                <ul className="d-flex align-items-center mb-0">
                  <li className="logo">
                    <Link to="/">BOOKSTORE</Link>
                  </li>
                </ul>
              </Col>
              <Col
                className="bottom-right d-flex align-items-center justify-content-end"
                xxl={8}
                xl={10}
                lg={7}
                md={8}
                sm={8}
              >
                <ul className="d-flex align-items-center mb-0">
                  <li className={isMobile ? "hidden" : ""}>
                    <Link to="/">Home</Link>
                  </li>
                  <li className={isMobile ? "hidden" : ""}>
                    <span>
                      <Link to="shop">Shop</Link>
                    </span>
                  </li>
                  <li className={isMobile ? "hidden" : ""}>
                    <Link to="blog">Blog</Link>
                  </li>
                  <li className={isMobile ? "hidden" : ""}>
                    <span>
                      <Link>
                        Other
                        <span>
                          <IoMdArrowDropdown />
                        </span>
                      </Link>
                    </span>
                    <div className="dropdown-menuLi">
                      <ul>
                        <li>
                          <span>
                            <Link to="contact">Contact Us</Link>
                          </span>
                        </li>
                        <li>
                          <span>
                            <Link to="about">About Us</Link>
                          </span>
                        </li>
                        <li>
                          <span>
                            <Link to="author">Author</Link>
                          </span>
                        </li>
                        <li>
                          <span>
                            <Link to="faq">FAQ</Link>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="cart-icon">
                    <Link to="cart">
                      <FiShoppingCart className="icon" />({totalQuantity})
                    </Link>
                  </li>
                  <li
                    className={isMobile ? "hidden" : ""}
                    id="searchInputLi"
                    onFocus={handleFocus}
                    onBlur={() => {
                      setIsFocused(false);
                      document
                        .querySelector("#searchInputLi .icon-search .icon")
                        .classList.remove("focused-icon");
                    }}
                  >
                    <Link>
                      <div className="d-flex">
                        <button className="icon-search">
                          <FiSearch className="icon" />
                        </button>
                        <form
                          action=""
                          onSubmit={(e) => {
                            e.preventDefault();
                          }}
                        >
                          <input
                            type="text"
                            className={`input-search ${
                              isFocused ? "focused-icon" : ""
                            }`}
                            placeholder="Search | Ctrl K"
                            id="your-search-input-id2"
                          />
                        </form>
                      </div>
                    </Link>
                  </li>
                  <li className="login">
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic" variant="link">
                        <Link>
                          <FaRegUser className="icon" />
                        </Link>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="custom-dropdown-menu">
                        {admin ? (
                          <>
                            <Dropdown.Item>
                              <Link>Hi, Admin BookStore</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link to="dashboard">Admin Page</Link>
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => dispatch(clearUser())}
                            >
                              <Link>Logout</Link>
                            </Dropdown.Item>
                          </>
                        ) : (
                          <Dropdown.Item>
                            <Link to="login">Login</Link>
                          </Dropdown.Item>
                        )}
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li className="mobile-icon" onClick={handleShow}>
                    <Link>
                      <RiMenu3Fill className="icon" />
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>

            <Row className="search-mobile">
              <Col>
                <form action="">
                  <input
                    type="text"
                    className="input-search"
                    placeholder="Search by Keywords"
                    id="your-search-input-id1"
                  />
                </form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <Offcanvas
        className="custom-offcanvas"
        show={show}
        onHide={handleClose}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>MENU</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="custom-offcanvasBody-menu">
          <ul className="mb-0">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link to="/shop">
                <span
                  onClick={() => setCategoriesOpen(!categoriesOpen)}
                  aria-controls="example-collapse-text"
                  aria-expanded={categoriesOpen}
                >
                  Categories
                </span>
                <IoIosArrowDown />

                <Collapse in={categoriesOpen}>
                  <div id="example-collapse-text">
                    <ul style={{ paddingLeft: "12px" }}>
                      <li>
                        <Link>Action</Link>
                      </li>
                      <li>
                        <Link>Biography</Link>
                      </li>
                      <li>
                        <Link>Childrens</Link>
                      </li>
                      <li>
                        <Link>Cooking</Link>
                      </li>
                      <li>
                        <Link>Drama</Link>
                      </li>
                      <li>
                        <Link>Family</Link>
                      </li>
                      <li>
                        <Link>Fiction</Link>
                      </li>
                      <li>
                        <Link>History</Link>
                      </li>
                      <li>
                        <Link>Mystery</Link>
                      </li>
                      <li>
                        <Link>Politics</Link>
                      </li>
                      <li>
                        <Link>Uncategorized</Link>
                      </li>
                    </ul>
                  </div>
                </Collapse>
              </Link>
            </li>
            <li>
              <Link to="blog">Blog</Link>
            </li>
            <li>
              <Link>
                <span
                  onClick={() => setOtherOpen(!otherOpen)}
                  aria-controls="example-collapse-text"
                  aria-expanded={otherOpen}
                >
                  Other
                </span>
                <IoIosArrowDown />

                <Collapse in={otherOpen}>
                  <div id="example-collapse-text">
                    <ul style={{ paddingLeft: "12px" }}>
                      <li>
                        <Link to="contact">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="about">About Us</Link>
                      </li>
                      <li>
                        <Link to="author">Author</Link>
                      </li>
                      <li>
                        <Link to="faq">FAQ</Link>
                      </li>
                    </ul>
                  </div>
                </Collapse>
              </Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
