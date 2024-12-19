import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import "./Login.scss";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { checkAccount, fetchAccount } from "../../Store/slice/auth";
import { toast } from "react-toastify";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [loadingLogin, setLoadingLogin] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.auths.admin);

  const handlePressEnter = (e) => {
    if (e.key === "Enter") {
      navigate("/");
    }
  };

  useEffect(() => {
    dispatch(fetchAccount());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user || !password) {
      toast.error("User/Password is required!");
      return;
    }
    navigate("/");
    const credentials = {
      username: user,
      password: password,
    };
    dispatch(checkAccount(credentials));
  };

  return (
    <>
      <section className="login">
        <Container>
          <Row className="d-flex align-items-center justify-content-center">
            <Col className="login-modal" md={4}>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email/Phone or UserName(admin)</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email/phone or username"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email,phone with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password(12345)</Form.Label>
                  <div className="input-password">
                    <Form.Control
                      className="password"
                      type={isShowPassword == true ? "text" : "password"}
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onKeyDown={(e) => handlePressEnter(e)}
                    />
                    <span onClick={() => setIsShowPassword(!isShowPassword)}>
                      {isShowPassword == true ? (
                        <FaRegEye className="icon-eye" />
                      ) : (
                        <FaRegEyeSlash className="icon-eye" />
                      )}
                    </span>
                  </div>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Button variant="primary" onClick={(e) => handleSubmit(e)}>
                    Login
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Login;
