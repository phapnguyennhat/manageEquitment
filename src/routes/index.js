import Home from "~/pages/Home";
import Stock from "~/pages/Stock";

//public Routes

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/stock", component: Stock },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
