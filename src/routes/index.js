import Home from "~/pages/Home";
import Stock from "~/pages/Stock";
import Signin from "~/pages/Signin"
import Signup from "~/pages/Signup"
import Register from "~/pages/Register";
import Listregister from "~/pages/Listregister"
import Adminlistregister from "~/pages/Adminlistregister";
import { StockLayout } from "~/components/Layout";

//public Routes

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/a", component: Home, layout: StockLayout},
  { path: "/stock", component: Stock, layout: StockLayout },
  { path: "/signin", component: Signin},
  { path: "/signup", component: Signup},
  { path: "/register", component: Register, layout: StockLayout },
  { path: "/listregister", component: Listregister, layout: StockLayout},
  { path: "/alistregister", component: Adminlistregister, layout: StockLayout}
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
