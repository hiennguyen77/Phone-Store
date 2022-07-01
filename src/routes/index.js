import HomePage from "../components/pages/homePage/HomePage";
import DetailPage from "../components/pages/detailPage/DetailPage";
import CartPage from "../components/pages/cartPage/CartPage";

export const publicRoutes = [
  { path: "/", component: HomePage },
  { path: "/product/Detail", component: DetailPage },
  { path: "/cart", component: CartPage },
];
