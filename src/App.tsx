import Navbar from "./components/Navbar/Navbar.tsx";
import {Route, Routes} from "react-router-dom";
import Product from "./components/SingleProduct/Product.tsx";
import Error from "./components/Error/Error.tsx";
import Login from "./components/Login/Login.tsx";
import Main from "./pages/Main.tsx";

function App() {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/products/:id' element={<Product />} />

            <Route path='/login' element={<Login />} />

            <Route path='*' element={<Error />} />
        </Routes>
    </>
  )
}

export default App
