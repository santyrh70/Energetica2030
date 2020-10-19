import Home from "../pages/home/Home.js";
import Form from "../pages/form/Form.js"
import Error404 from "../pages/error404/Error404.js";

export default [
  {
    path: "/",
    exact: true,
    page: Home,
  },
  {
    path: "/formulario",
    exact: true,
    page: Form,
  },
  {
    path: "*",
    page: Error404,
  },
];
