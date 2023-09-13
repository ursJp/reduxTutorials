import Header from "./containers/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "./containers/ProductDetails";
import ProductsListing from "./containers/ProductsListing";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductsListing />} />
          <Route
            path="/product/:productId"
            exact
            element={<ProductDetails />}
          />
          <Route>404 Not Found...</Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
