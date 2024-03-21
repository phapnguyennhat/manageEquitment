import Home from "~/pages/Home";
import Stock from "~/pages/Stock";
import Signin from "~/pages/Signin";
import Signup from "~/pages/Signup";
import Register from "~/pages/Register";
import { StockLayout } from "~/components/Layout";

//public Routes

const publicRoutes = [
  { path: "/", component: Home },
  {
    path: "/stock",
    component: Stock,
    layout: StockLayout,
    props: { typeUser: "admin" },
  },
  { path: "/signin", component: Signin },
  { path: "/signup", component: Signup },
  {
    path: "/register",
    component: Register,
    layout: StockLayout,
    props: { typeUser: "admin" },
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
