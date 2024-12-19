import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import "./Cart.scss";
import CartDetail from "../../components/Cart/CartDetail";
import CartCheckout from "../../components/Cart/CartCheckout";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowLeftLong } from "react-icons/fa6";

import CheckoutModal from "../../components/Cart/Checkout.Modal";
import { getCartTotal, gotoCheckOut } from "../../Store/slice/cart";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const getIsChecked = useSelector((state) => state.carts.isCheckOut);
  const dispatch = useDispatch();
  const { cart, totalPrice, totalQuantity } = useSelector(
    (state) => state.carts
  );

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

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
                    href="cart"
                    active
                  >
                    <Link to="">Cart</Link>
                  </Breadcrumb.Item>
                  {getIsChecked ? (
                    <Breadcrumb.Item
                      className="custom-breadcrumb-item d-flex align-items-center"
                      href="cart"
                      active
                    >
                      Checkout
                    </Breadcrumb.Item>
                  ) : (
                    ""
                  )}
                </Breadcrumb>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="cart">
          <Container>
            {getIsChecked ? (
              <Row>
                <Col>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => dispatch(gotoCheckOut(false))}
                  >
                    <FaArrowLeftLong style={{ paddingRight: "4px" }} />
                    Back to cart
                  </span>
                </Col>
              </Row>
            ) : (
              ""
            )}

            <Row>
              <Col className="custom-col" lg={9}>
                {getIsChecked === true ? <CheckoutModal /> : <CartDetail />}
              </Col>
              <Col className="custom-col" lg={3}>
                <CartCheckout />
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};

export default Cart;
