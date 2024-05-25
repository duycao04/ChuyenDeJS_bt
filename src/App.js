import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { useRoutes } from "react-router-dom";
import NoPage from "./pages/NoPage";
import RouterApp from "./Routers";
import LayoutAdmin from "./layouts/LayoutAdmin";
import LayoutSite from "./layouts/LayoutSite";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <LayoutSite />,
      children: RouterApp.RouterSite,
    },

    {
      path: "Admin",
      element: <LayoutAdmin />,
      children: RouterApp.RouterAdmin,
    },

    {
      path: "*",
      element: <NoPage />,
    },
  ]);

  return element;
}

export default App;
