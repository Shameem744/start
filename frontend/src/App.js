import { useSelector } from 'react-redux';
import { BrowserRouter, Link, Routes,Route } from 'react-router-dom';
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from './screens/CartScreen';
function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
          <Link className="brand" to="/">
              amazona
            </Link>
          </div>
          <div>
          <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/cart/:id" element={<CartScreen/>}></Route>
            {/* <Route path="/cart/:id" element={} /> */}
            <Route path="/product/:id" element={<ProductScreen />}></Route>
            <Route extact path="/" element={<HomeScreen />} ></Route>
          </Routes>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
