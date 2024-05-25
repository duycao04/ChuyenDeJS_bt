import Banner from "../pages/Backend/Banner";
import Brand from "../pages/Backend/Brand";
import Category from "../pages/Backend/Category";
import Menu from "../pages/Backend/Menu";
import Order from "../pages/Backend/Order";
import Orderdetail from "../pages/Backend/Orderdetail";
import Post from "../pages/Backend/Post";
import Product from "../pages/Backend/Product";
import Topic from "../pages/Backend/Topic";
import User from "../pages/Backend/User";
import Contact from "../pages/Frontend/Contact";

const RouterAdmin = [
  {
    path: "product",
    element: <Product />,
  },
  {
    path: "category",
    element: <Category />,
  },
  {
    path: "topic",
    element: <Topic />,
  },
  {
    path: "user",
    element: <User />,
  },
  {
    path: "banner",
    element: <Banner />,
  },
  {
    path: "post",
    element: <Post />,
  },
  {
    path: "orderdetail",
    element: <Orderdetail />,
  },
  {
    path: "order",
    element: <Order />,
  },
  {
    path: "menu",
    element: <Menu />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "brand",
    element: <Brand />,
  },
];
export default RouterAdmin;
