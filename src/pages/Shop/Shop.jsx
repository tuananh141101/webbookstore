import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import "./Shop.scss";
import { useDispatch, useSelector } from "react-redux";
import SidebarShop from "../../components/Shop/SidebarShop";
import SideMainShop from "../../components/Shop/SideMainShop";
import { Link } from "react-router-dom";

const Shop = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.products.listProducts);
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
                    className="custom-breadcrumb-item d-flex align-items-center"
                    href="blog"
                    active
                  >
                    <Link>Shop</Link>
                  </Breadcrumb.Item>
                </Breadcrumb>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="categories">
          <Container>
            <Row>
              <Col>
                <p className="mb-0">Shop</p>
                <span>Showing 1–12 of 31 results</span>
              </Col>
            </Row>
            <Row>
              <Col className="custom-col side-bar" lg={3}>
                <SidebarShop />
              </Col>
              <Col className="custom-col side-main" lg={9}>
                <SideMainShop />
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};

export default Shop;
