import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Shop from "./pages/Shop/Shop";
import DetaiItemProduct from "./components/Shop/DetaiItemProduct";
import Blog from "./pages/Blog/Blog";
import Author from "./pages/Author/Author";
import Notfound from "./pages/Notfound";
import Admin from "./admin/Admin";
import Login from "./pages/Login/Login";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import FrequentlyAskedQuestions from "./pages/Faq/FrequentlyAskedQuestions";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Client */}
            <Route index element={<Home />} />

            <Route path="shop" element={<Shop />} />
            <Route path="shop/products/:id" element={<DetaiItemProduct />} />
            <Route path="cart" element={<Cart />} />

            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="author" element={<Author />} />
            <Route path="blog" element={<Blog />} />
            <Route path="login" element={<Login />} />
            <Route path="faq" element={<FrequentlyAskedQuestions />} />
            {/* Page 404 */}
            <Route path="*" element={<Notfound />} />
            {/* Admin */}
          </Route>
          <Route path="dashboard" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
