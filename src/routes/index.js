import Home from "~/pages/Home";
import Stock from "~/pages/Stock";
import Signin from "~/pages/Signin"
import Signup from "~/pages/Signup"
import { StockLayout } from "~/components/Layout";

//public Routes

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/stock", component: Stock, layout: StockLayout },
  { path: "/signin", component: Signin},
  { path: "/signup", component: Signup},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
