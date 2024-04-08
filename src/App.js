import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { publicRoutes } from "./routes";
import DefaultLayout from "./components/Layout/DefaultLayout";
import { Fragment, useContext, useState } from "react";
import { useEffect, createContext } from "react";
import { getData } from "./services/firebase";

export const DatabaseContext = createContext();

function App() {
  // lấy dữ liệu từ local về :
  // const [carts, setCarts] = useState([]);
  const [database, setDatabase] = useState([]);

  useEffect(() => {
    getData().then((response) => {
      // setDatabase(response);
      // setCarts(response["Carts"] ?? []);
      setDatabase(response);
    });
  }, []);

  // console.log("carts", carts);
  return (
    // <>
    //   <Heading />
    //   <Home />
    //   {/* <div className="content-wrapper"></div> */}
    //   <Footer />
    // </>
    <Router>
      <DatabaseContext.Provider
        value={{ database: database, setDatabase: setDatabase }}
      >
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
                    <Layout>
                      <Page {...route.props} />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </DatabaseContext.Provider>
    </Router>
  );
}

export default App;
