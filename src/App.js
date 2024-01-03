import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CartContainer from './components/CartContainer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { calculateTotal, getCartItems } from './feature/cartSlice';

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  useEffect(() => {
    dispatch(getCartItems());
  }, [])
  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems])
  return (
    <main>
      <NavBar />
      <CartContainer />
    </main>
  );
}

export default App;
