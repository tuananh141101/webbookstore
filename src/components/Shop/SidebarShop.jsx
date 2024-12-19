import { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useDispatch, useSelector } from "react-redux";
import {
  currAuthorChecked,
  currCateChecked,
  fetchAuthor,
  fetchCategories,
  fetchProducts,
  updatemaxPrice,
  updateminPrice,
} from "../../Store/slice/categories";
import { Form } from "react-bootstrap";

const SidebarShop = () => {
  const dispatch = useDispatch();

  const getMinprice = useSelector((state) => state.categories.arr[0].minPrice);
  const getMaxprice = useSelector((state) => state.categories.arr[0].maxPrice);

  const [minPrice, setMinPrice] = useState(getMinprice);
  const [maxPrice, setMaxPrice] = useState(getMaxprice);

  const getCategories = useSelector((state) => state.categories.categories);
  const getAuthor = useSelector((state) => state.categories.author);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchAuthor());
    dispatch(fetchProducts());
  }, []);

  function handleCheckedCate(item, index) {
    dispatch(currCateChecked(item));
    // dispatch(filterCateAuthorPrice(item));
  }
  function handleCheckedAuthor(item, index) {
    dispatch(currAuthorChecked(item));
  }

  function handleSubmitPrice(e) {
    e.preventDefault();
    dispatch(updateminPrice(minPrice));
    dispatch(updatemaxPrice(maxPrice));
    // dispatch(setFilterPriceRange());
  }

  return (
    <>
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Categories</Accordion.Header>
          <Accordion.Body>
            {getCategories &&
              getCategories.map((item, index) => {
                return (
                  <>
                    <ul
                      className="mb-0 pl-0"
                      key={index}
                      onClick={() => handleCheckedCate(item, index)}
                    >
                      <li>{item}</li>
                    </ul>
                  </>
                );
              })}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Author</Accordion.Header>
          <Accordion.Body>
            {getAuthor &&
              getAuthor.map((item, index) => {
                return (
                  <>
                    <ul className="mb-0 pl-0" key={index}>
                      <li onClick={() => handleCheckedAuthor(item, index)}>
                        {item}
                      </li>
                    </ul>
                  </>
                );
              })}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Price</Accordion.Header>
          <Accordion.Body>
            <Form onSubmit={handleSubmitPrice}>
              <input
                type="number"
                placeholder="Min Price"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <input
                type="number"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <button>Apply</button>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default SidebarShop;
