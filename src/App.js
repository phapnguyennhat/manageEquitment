import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { publicRoutes } from "./routes";
import DefaultLayout from "./components/Layout/DefaultLayout";

function App() {
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
            const Page = route.component;
            let Layout = DefaultLayout;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
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
