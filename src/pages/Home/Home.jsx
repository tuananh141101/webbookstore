import "./Home.scss";
import { useEffect } from "react";
import BannerSlide from "../../components/Banner-Slide/BannerSlide";
import ProductCategories from "../../components/Home/ProductCategories";
import ProductItemCarousel from "../../components/Home/ProductItemCarousel";
import AuthorCarousel from "../../components/Home/AuthorCarousel";
import SelectedBook from "../../components/Home/SelectedBook";
import ProductBlog from "../../components/Home/ProductBlog";
import { useDispatch } from "react-redux";
import {
  fetchProducts,
  fetchProductsBestSelling,
  fetchProductsLatest,
  fetchProductsSale,
} from "../../Store/slice/products";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchProductsBestSelling());
    dispatch(fetchProductsLatest());
    dispatch(fetchProductsSale());
  }, []);

  return (
    <>
      <BannerSlide />
      <ProductCategories />
      <AuthorCarousel />
      <ProductItemCarousel />
      <SelectedBook />
      <ProductBlog />
    </>
  );
};

export default Home;
