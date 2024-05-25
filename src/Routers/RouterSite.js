import Contact from "../pages/Frontend/Contact";
import Home from "../pages/Frontend/Home";
import Product from "../pages/Frontend/Product";
import ProductBrand from "../pages/Frontend/ProductBrand";
import ProductCategory from "../pages/Frontend/ProductCategory";
import ProductDetail from "../pages/Frontend/ProductDetail";

const RouterSite = [
  { index: true, element: <Home /> },
  { path: "lien-he", element: <Contact /> },
  { path: "san-pham", element: <Product /> },
  { path: "danh-muc/:slug", element: <ProductCategory /> },
  { path: "thuong-hieu/:slug", element: <ProductBrand /> },
  { path: "san-pham/:slug", element: <ProductDetail /> },
];
export default RouterSite;
