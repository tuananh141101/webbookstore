import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import "./Blog.scss";
import Sidebar from "../../components/Blog/Sidebar";
import Post from "../../components/Blog/Post";

const Blog = () => {
  return (
    <>
      <div>
        <section className="bread-crumb">
          <Container>
            <Row>
              <Col>
                <Breadcrumb className="custom-breadcrumb">
                  <Breadcrumb.Item
                    className="custom-breadcrumb-item d-flex align-items-center"
                    href="/"
                  >
                    Home
                  </Breadcrumb.Item>
                  <Breadcrumb.Item
                    className="custom-breadcrumb-item d-flex align-items-center"
                    href="blog"
                    active
                  >
                    Blog
                  </Breadcrumb.Item>
                </Breadcrumb>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="blog">
          <Container>
            <Row>
              <Col>
                <p className="mb-0">Blog</p>
                <span>
                  Discover a variety of engrossing articles on the books we know
                  and love and their effects on us, as well as readings into
                  lesser-known works that deserve more attention.
                </span>
              </Col>
            </Row>

            <Row>
              <Col
                className="custom-col sidebar d-flex justify-content-start"
                lg={3}
              >
                <Sidebar />
              </Col>
              <Col className="custom-col post" lg={9}>
                <Post />
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};

export default Blog;
