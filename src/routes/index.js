import Home from "~/pages/Home";
import Stock from "~/pages/Stock";
import Register from "~/pages/Register";
import { StockLayout } from "~/components/Layout";

//public Routes

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/stock", component: Stock, layout: StockLayout },
  { path: "/register", component: Register, layout: StockLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
