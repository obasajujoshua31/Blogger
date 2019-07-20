import * as pages from "../pages";

const routes = [
  {
    path: "/",
    exact: true,
    component: pages.Home,
  },
  {
    path: "/login",
    component: pages.LoginPage,
  },
  {
    path: "/register",
    component: pages.RegisterPage,
  },
  {
    path: "/blog/:id",
    component: pages.SingleBlog,
  },
  {
    path: "*",
    component: pages.NotFound,
  },
];

export default routes;
