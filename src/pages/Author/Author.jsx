import "./Author.scss";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import { dataProducts } from "../../services/UserServices";
import { useEffect, useState } from "react";

const Author = () => {
  const [author, setAuthor] = useState([]);
  const [product, setProduct] = useState([]);
  const alphabet = [
    "All",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const [selectedLetter, setSelectedLetter] = useState("All");

  const getAuthor = async () => {
    try {
      const res = await dataProducts();
      let authorName = [...res.data].map((item) => {
        return item.author;
      });

      const getUniqueNamesAuthor = (arr) => {
        const seenNames = {};
        const uniqueNames = [];

        arr.map((item) => {
          if (!seenNames[item]) {
            uniqueNames.push(item);
            seenNames[item] = true;
          }
        });
        return uniqueNames;
      };

      const uniqueNamesAuthor = getUniqueNamesAuthor(authorName);
      setAuthor(uniqueNamesAuthor);

      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAuthor();
  }, []);

  const handleLetterClick = (e) => {
    console.log(e.target.outerText);
    setSelectedLetter(e.target.outerText);
  };

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
                    href="about"
                    active
                  >
                    Author
                  </Breadcrumb.Item>
                </Breadcrumb>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="author">
          <Container>
            <Row>
              <ul className="mb-0 author-filter d-flex align-items-center justify-content-between">
                {alphabet.map((letter, index) => {
                  return (
                    <>
                      <li
                        key={index}
                        onClick={handleLetterClick}
                        style={{
                          textDecoration:
                            selectedLetter === letter ? "underline" : "",
                        }}
                      >
                        {letter}
                      </li>
                    </>
                  );
                })}
              </ul>
              <Col
                className="d-flex align-items-center justify-content-center"
                style={{
                  padding: "24px 0",
                }}
              >
                Coming Soon..
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};

export default Author;
