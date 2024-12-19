import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const ProductCategories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <section className="product-categories">
        <Container>
          <Row>
            <Col className="col_1" xs={8}>
              <span>Featured Categories</span>
            </Col>
            <Col
              className="col_2 d-flex justify-content-end align-items-center"
              xs={4}
            >
              <span>
                <Link to="/shop" onClick={() => window.scroll(0, 0)}>
                  All Categories
                  <IoIosArrowForward className="icon" />
                </Link>
              </span>
            </Col>
          </Row>
          <Row>
            <Col className="custom_col_cate">
              <motion.ul
                className="ul_cate d-flex align-items-center mb-0"
                ref={ref}
                style={{
                  opacity: isInView ? 1 : 0,
                  transition: "1.5s opacity",
                }}
              >
                <li>
                  <Link>
                    <div className="product-cate__inner d-flex justify-content-center flex-column">
                      <div className="product-cate__icon"></div>
                      <div className="product-cate__text">
                        <p className="mt-2 mb-0">Fiction</p>
                        <span>Shop Now</span>
                      </div>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link>
                    <div className="product-cate__inner d-flex justify-content-center flex-column">
                      <div className="product-cate__icon"></div>
                      <div className="product-cate__text">
                        <p className="mt-2 mb-0">History</p>
                        <span>Shop Now</span>
                      </div>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link>
                    <div className="product-cate__inner d-flex justify-content-center flex-column">
                      <div className="product-cate__icon"></div>
                      <div className="product-cate__text">
                        <p className="mt-2 mb-0">Mystery</p>
                        <span>Shop Now</span>
                      </div>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link>
                    <div className="product-cate__inner d-flex justify-content-center flex-column">
                      <div className="product-cate__icon"></div>
                      <div className="product-cate__text">
                        <p className="mt-2 mb-0">Family</p>
                        <span>Shop Now</span>
                      </div>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link>
                    <div className="product-cate__inner d-flex justify-content-center flex-column">
                      <div className="product-cate__icon"></div>
                      <div className="product-cate__text">
                        <p className="mt-2 mb-0">Cooking</p>
                        <span>Shop Now</span>
                      </div>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link>
                    <div className="product-cate__inner d-flex justify-content-center flex-column">
                      <div className="product-cate__icon"></div>
                      <div className="product-cate__text">
                        <p className="mt-2 mb-0">Drama</p>
                        <span>Shop Now</span>
                      </div>
                    </div>
                  </Link>
                </li>
              </motion.ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProductCategories;
