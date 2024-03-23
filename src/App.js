import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { publicRoutes } from "./routes";
import DefaultLayout from "./components/Layout/DefaultLayout";
import { Fragment, useState } from "react";

function App() {
  // lấy dữ liệu từ local về :
  const [carts, setCarts] = useState(() => {
    const storageCarts = JSON.parse(localStorage.getItem("carts"));
    return storageCarts ?? [];
  });
  // console.log("carts", carts);
  return (
    // <>
    //   <Heading />
    //   <Home />
    //   {/* <div className="content-wrapper"></div> */}
    //   <Footer />
    // </>
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            const Page = route.component;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout carts={carts} setCarts={setCarts}>
                    <Page {...route.props} carts={carts} setCarts={setCarts} />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
