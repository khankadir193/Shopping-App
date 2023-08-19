import './App.css';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import About from './ShoppingCart/About';
import Contact from './ShoppingCart/Contact';
import ProductDetails from './ShoppingCart/ProductDetails';
import CartDetails from './ShoppingCart/CartDetails';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShoppingCart />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/newsDetails' element={<ProductDetails />} />
          <Route path='/cartDetails' element={<CartDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;