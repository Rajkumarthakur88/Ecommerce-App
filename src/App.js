import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./pages/About";
import CartsContainer from "./pages/CartsContainer";
import Home from "./pages/Home";



function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/cartscontainer"} element={<CartsContainer />} />
          <Route path={"/about"} element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
