import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem';
import { calculateTotal, clearCart, getCartItems } from '../feature/cartSlice';

const CartContainer = () => {
    const dispatch = useDispatch();
    const {cartItems, amount, total} = useSelector((store) => store.cart);
    
    if(amount < 1) {
        return (
          <section className="cart">
              <header>
                  <h2>Your Bag</h2>
                  <h4 className='empty-cart'>Your bag is currently empty</h4>
              </header>
          </section>
        )
    }
    return (
        <section className="cart">
            <header>
                <h2>Your Bag</h2>
            </header>
            <div>
                {cartItems.map((item) => 
                    (<CartItem key={item.id} {...item}  />)
                )}
            </div>
            <footer>
                <hr />
                <div className="cart-total">
                    <h4>Total : ${total.toFixed(2)}</h4>
                </div>
                <button className="btn clear-btn" onClick={()=> dispatch(clearCart())}>
                    clear
                </button>
            </footer>
        </section>
    )
}

export default CartContainer