import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isCartCheckOutSuccess } from "../../Store/slice/cart";
import { toast } from "react-toastify";

const CheckoutModal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);
  const [isCheckedPayment, setIsCheckedPayment] = useState(null);
  console.log(">>> check ischeckedpayment = ", isCheckedPayment);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  useEffect(() => {}, [isCheckedPayment]);

  const handlePaymentClick = (paymentId) => {
    return setIsCheckedPayment(paymentId);
  };

  const handleSubmitCart = () => {
    dispatch(isCartCheckOutSuccess(true));
    navigate("/");
    toast.success("Order successfully processed");
  };

  return (
    <>
      <div className="checkout-modal">
        <p className="mb-0 border-bottom">Billing Address</p>
        <div className="form-checkout">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  defaultValue="Nguyen"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  defaultValue="Van A"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Plese enter your email.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Address" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid address.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>Phone number</Form.Label>
                <Form.Control type="number" placeholder="Phone" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid phone.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label>Zip</Form.Label>
                <Form.Control type="text" placeholder="Zip Code" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid zip.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} md="6" className="form-group">
                <div className="payment-1">
                  <p
                    className={`mb-0 ${
                      isCheckedPayment === 1 ? "checked-payment" : ""
                    }`}
                    id="payment-1"
                    onClick={() => handlePaymentClick(1)}
                  >
                    <span>Payment via VNPAY-QR</span>
                  </p>
                  <p
                    className={`mb-0 ${
                      isCheckedPayment === 1 ? "d-block" : ""
                    }`}
                  >
                    QR CODE
                  </p>
                </div>

                <div className="payment-2">
                  <p
                    className={`mb-0 ${
                      isCheckedPayment === 2 ? "checked-payment" : ""
                    }`}
                    onClick={() => handlePaymentClick(2)}
                  >
                    <span>Bank transfer</span>
                  </p>
                  <p
                    className={`mb-0 ${
                      isCheckedPayment === 2 ? "d-block" : ""
                    }`}
                  >
                    STK: VPBANK - bookstore (012345689) Nguyen Tuan Anh
                  </p>
                </div>

                <div className="payment-3">
                  <p
                    className={`mb-0 ${
                      isCheckedPayment === 3 ? "checked-payment" : ""
                    }`}
                    onClick={() => handlePaymentClick(3)}
                  >
                    Cash on Delivery
                  </p>
                  <p
                    className={`mb-0 ${
                      isCheckedPayment === 3 ? "d-block" : ""
                    }`}
                  >
                    You will make payment by cash on delivery
                  </p>
                </div>
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Label>Notes (optional)</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Form.Group
                as={Col}
                className="button"
                style={{ marginTop: "18px" }}
              >
                <Button
                  type="submit"
                  style={{
                    border: "none",
                    outline: "none",
                    borderRadius: "2px",
                    background: "#19110b",
                  }}
                >
                  <span
                    style={{ color: "white" }}
                    onClick={() => handleSubmitCart()}
                  >
                    Submit
                  </span>
                </Button>
              </Form.Group>
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CheckoutModal;
