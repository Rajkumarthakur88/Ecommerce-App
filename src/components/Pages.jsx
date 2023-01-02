import Home from '../pages/Home'
import Nav from './Nav'
import Footer from './Footer'
import CartsContainer from '../pages/CartsContainer'
import About from '../pages/About'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainHome from './MainHome'

function Pages() {
    return (
        <>
            <Router>
                <Nav />

                    <MainHome />
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/cartscontainer"} element={<CartsContainer />} />
                    <Route path={"/about"} element={<About />} />
                </Routes>
                <Footer />
            </Router>

        </>
    )
}

export default Pages