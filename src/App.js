import './App.css';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import { BrowserRouter, Link, Routes,Route } from 'react-router-dom';
import HeaderMenu from './ShoppingCart/HeaderMenu';
import CardComponent from './ShoppingCart/CardComponent';
import About from './ShoppingCart/About';
import Contact from './ShoppingCart/Contact';
import NewsDetails from './ShoppingCart/NewsDetails';
import CartDetails from './ShoppingCart/CartDetails';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShoppingCart />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/newsDetails' element={<NewsDetails />} />
          <Route path='/cartDetails' element={<CartDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App; 

// most important hooks...
// useNavigage,useParams,useLocation etc....
