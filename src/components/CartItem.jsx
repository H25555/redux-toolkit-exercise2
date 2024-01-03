import { decreaseAmount, increaseAmount, removeItem } from '../feature/cartSlice';
import { ChevronDown, ChevronUp } from '../icon';
import { useDispatch } from 'react-redux';

const CartItem = ({ id, title, price, img, amount }) => {
    const dispatch = useDispatch();
    return (
        <article className='cart-item'>
            <img src={img} alt={title} />
            <div>
                <h4>{title}</h4>
                <h4 className='item-price'>${price}</h4>
                <button
                    className='remove-btn'
                    onClick={() => dispatch(removeItem(id))}
                >
                    remove
                </button>
            </div>
            <div>
                <button
                    className='amount-btn'
                    onClick={() => dispatch(increaseAmount(id))}
                >
                    <ChevronUp />
                </button>
                <p className='amount'>{amount}</p>
                <button
                    className='amount-btn'
                    onClick={() => {if(amount > 1)
                         dispatch(decreaseAmount(id))}}
                >
                    <ChevronDown />
                </button>
            </div>
        </article>
    )
}

export default CartItem