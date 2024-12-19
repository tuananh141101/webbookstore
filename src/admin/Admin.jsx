import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Admin.scss";
import { Nav, NavDropdown, Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import Blogtable from "./modal/blogs/BlogTable";
import Producttable from "./modal/products/ProductTable";

const Admin = () => {
  return (
    <>
      <Navbar expand="lg" className="header-dashboard">
        <Container>
          <Navbar.Brand href="#home">Dashboard Bookstore</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse
            id="navbar-dark-example"
            className="justify-content-end"
          >
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="settings"
                menuVariant="dark"
                className="custom-navdropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Sign in as: Admin
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/" style={{ color: "white" }}>
                    Back to home
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="table-admin">
        <Container>
          <Tabs
            defaultActiveKey="blog"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="blog" title="Blogs">
              <Blogtable />
            </Tab>
            <Tab eventKey="product" title="Products">
              <Producttable />
            </Tab>
          </Tabs>
        </Container>
      </div>
    </>
  );
};

export default Admin;
