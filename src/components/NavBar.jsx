import React from 'react';
import { CartIcon } from '../icon';
import { useDispatch, useSelector } from 'react-redux';

const NavBar = () => {
    const {amount} = useSelector((store)=> store.cart);
    return (
        <nav>
            <div className='nav-center'>
                <h3>NavBar</h3>
                <div className="nav-container">
                    <CartIcon/>
                    <div className="amount-container">
                        <p className="total-amount">
                            {amount}
                        </p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar