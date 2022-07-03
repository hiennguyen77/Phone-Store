import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Fragment, Suspense } from "react";
import LayoutHome from "./layouts/LayoutHome/LayoutHome";
import { publicRoutes } from "./routes/index";
import Loading from "./components/loading/Loading";

function App() {
  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          let Layout = LayoutHome;
          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Suspense fallback={<Loading />}>
                    <Page />
                  </Suspense>
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
