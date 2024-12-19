import Accordion from "react-bootstrap/Accordion";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const handleFocusSearchBlog = () => {
    document
      .querySelector("#icon-search-button .icon")
      .classList.add("active-icon");
  };
  return (
    <>
      <Accordion defaultActiveKey="0" alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Search</Accordion.Header>
          <Accordion.Body>
            <form action="" className="d-flex">
              <button
                className="icon-search d-flex align-items-center justify-content-center"
                id="icon-search-button"
              >
                <FiSearch className="icon" />
              </button>
              <input
                type="text"
                placeholder="Search"
                onFocus={handleFocusSearchBlog}
                onBlur={() => {
                  document
                    .querySelector("#icon-search-button .icon")
                    .classList.remove("active-icon");
                }}
              />
            </form>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Recent Posts</Accordion.Header>
          <Accordion.Body>
            <ul className="mb-0 recent-post-blog">
              <li>
                <p className="mb-0">
                  I was paid $12,500 to write my book. Here's why I'm revealing
                  that
                </p>
              </li>
              <li>
                <p className="mb-0">
                  Should You Feel Embarrassed for Reading Kids Books?
                </p>
              </li>
              <li>
                <p className="mb-0">
                  A Lost 'Little Boy' Nears 100: Poet And Publisher Lawrence
                  Ferlinghetti
                </p>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Categories</Accordion.Header>
          <Accordion.Body>
            <ul className="mb-0 categories-blog">
              <li className="mb-0">
                <p className="mb-0">News</p>
              </li>
              <li className="mb-0">
                <p className="mb-0">Opinion</p>
              </li>
              <li className="mb-0">
                <p className="mb-0">Reviews</p>
              </li>
              <li className="mb-0">
                <p className="mb-0">Uncategorized</p>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Tags</Accordion.Header>
          <Accordion.Body>
            <div className="tags d-flex flex-wrap">
              <Link>advice</Link>
              <Link>books</Link>
              <Link>bookshop</Link>
              <Link>clients</Link>
              <Link>dating</Link>
              <Link>discount</Link>
              <Link>offer</Link>
              <Link>reviews</Link>
              <Link>restaurant</Link>
              <Link>reading</Link>
              <Link>e-books</Link>
              <Link>income</Link>
              <Link>print</Link>
              <Link>love</Link>
              <Link>quotes</Link>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Sidebar;
