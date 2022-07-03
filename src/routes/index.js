import { lazy } from "react";
// import HomePage from "../components/pages/homePage/HomePage";
// import DetailPage from "../components/pages/detailPage/DetailPage";
// import CartPage from "../components/pages/cartPage/CartPage";
const HomePage = lazy(() => import("../components/pages/homePage/HomePage.js"));
const CartPage = lazy(() => import("../components/pages/cartPage/CartPage"));
const DetailPage = lazy(() =>
  import("../components/pages/detailPage/DetailPage")
);

export const publicRoutes = [
  { path: "/", component: HomePage },
  { path: "detail/:productId", component: DetailPage },
  { path: "cart", component: CartPage },
];
