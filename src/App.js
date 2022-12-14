import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Cart from './pages/Cart';
import {BrowserRouter, Routes,Route, Navigate} from "react-router-dom";
// import Pay from './pages/Pay';
import Success from './pages/Success';
import { useSelector } from 'react-redux';

const App = () =>{
  const user = useSelector((state) => state.user.currentUser);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/product/:id" element={<Product />}/>
        <Route path="/products/:category" element={<ProductList />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}/>
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />}/>
        <Route path="/success" element={<Success />}/>
        {/* <Route path="/register" element={<Register />}/> */}
        {/* <Route path="/login" element={<Login />}/> */}
        {/* <Route path="/pay" element={<Pay />}/> */}
      </Routes>
    </BrowserRouter>
  )


//   return <div>
// /* //*********** para probar individualmente cada página*********** */
//             {/* <Home/> */}
//             {/* <ProductList/> */}
//             {/* <Product/> */}
//             {/* <Register/> */}
//             {/* <Login/> */}
//             {/* <Cart/> */}
//           </div>;
};

export default App;

