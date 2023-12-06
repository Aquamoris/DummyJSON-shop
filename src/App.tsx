import ProductsContainer from "./components/ProductsList/ProductsContainer.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import {Route, Routes} from "react-router-dom";
import Product from "./components/SingleProduct/Product.tsx";

function App() {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path='/' element={<ProductsContainer />} />
            <Route path='/products/:id' element={<Product />} />
        </Routes>
    </>
  )
}

export default App
