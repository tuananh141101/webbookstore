import { Accordion, Breadcrumb, Col, Container, Row } from "react-bootstrap";
import "./Faq.scss";

const FrequentlyAskedQuestions = () => {
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
                    FAQ
                  </Breadcrumb.Item>
                </Breadcrumb>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="faq">
          <Container>
            <Row>
              <Col className="custom-col d-flex align-items-center justify-content-center">
                <p className="mb-0">Frequently Asked Questions</p>
              </Col>
            </Row>
            <Row>
              <Col
                className="custom-col d-flex align-items-center jsutify-content-center flex-column"
                sm={12}
              >
                <p className="mb-0">Shopping</p>
                <div style={{ width: "100%" }}>
                  <Accordion defaultActiveKey={["0"]} alwaysOpen>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        Delivery charges for order from the Online Shop?
                      </Accordion.Header>
                      <Accordion.Body>
                        A placerat ac vestibulum integer vehicula suspendisse
                        nostra aptent fermentum tempor a magna erat ligula
                        parturient curae sem conubia vestibulum ac inceptos
                        sodales condimentum cursus nunc mi consectetur
                        condimentum.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        How long will delivery take?
                      </Accordion.Header>
                      <Accordion.Body>
                        A placerat ac vestibulum integer vehicula suspendisse
                        nostra aptent fermentum tempor a magna erat ligula
                        parturient curae sem conubia vestibulum ac inceptos
                        sodales condimentum cursus nunc mi consectetur
                        condimentum.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        Do i recive an invoice for my order?
                      </Accordion.Header>
                      <Accordion.Body>
                        A placerat ac vestibulum integer vehicula suspendisse
                        nostra aptent fermentum tempor a magna erat ligula
                        parturient curae sem conubia vestibulum ac inceptos
                        sodales condimentum cursus nunc mi consectetur
                        condimentum.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        Tellus ridicdiam eleifend id ullamcorper?
                      </Accordion.Header>
                      <Accordion.Body>
                        A placerat ac vestibulum integer vehicula suspendisse
                        nostra aptent fermentum tempor a magna erat ligula
                        parturient curae sem conubia vestibulum ac inceptos
                        sodales condimentum cursus nunc mi consectetur
                        condimentum.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
              <Col
                className="custom-col d-flex align-items-center justify-content-center flex-column"
                sm={12}
              >
                <p className="mb-0">Payment</p>
                <div style={{ width: "100%" }}>
                  <Accordion defaultActiveKey={["0"]} alwaysOpen>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        Delivery charges for order from the Online Shop?
                      </Accordion.Header>
                      <Accordion.Body>
                        A placerat ac vestibulum integer vehicula suspendisse
                        nostra aptent fermentum tempor a magna erat ligula
                        parturient curae sem conubia vestibulum ac inceptos
                        sodales condimentum cursus nunc mi consectetur
                        condimentum.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        How long will delivery take?
                      </Accordion.Header>
                      <Accordion.Body>
                        A placerat ac vestibulum integer vehicula suspendisse
                        nostra aptent fermentum tempor a magna erat ligula
                        parturient curae sem conubia vestibulum ac inceptos
                        sodales condimentum cursus nunc mi consectetur
                        condimentum.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        Do i recive an invoice for my order?
                      </Accordion.Header>
                      <Accordion.Body>
                        A placerat ac vestibulum integer vehicula suspendisse
                        nostra aptent fermentum tempor a magna erat ligula
                        parturient curae sem conubia vestibulum ac inceptos
                        sodales condimentum cursus nunc mi consectetur
                        condimentum.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        Tellus ridicdiam eleifend id ullamcorper?
                      </Accordion.Header>
                      <Accordion.Body>
                        A placerat ac vestibulum integer vehicula suspendisse
                        nostra aptent fermentum tempor a magna erat ligula
                        parturient curae sem conubia vestibulum ac inceptos
                        sodales condimentum cursus nunc mi consectetur
                        condimentum.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};

export default FrequentlyAskedQuestions;
