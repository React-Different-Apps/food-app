import { useContext } from 'react'
import Cart from '../Cart/Cart'
import './HeaderCartButton.css'
import CartContext from '../../store/CartContext'
export const HeaderCartButton = (props) => {
    const cartContext=useContext(CartContext)
    // use reduce function to get the real number of the items in the cart
    const numberOfCartItems=cartContext.items.reduce((currentNum,item)=>{
        return currentNum + item.amount
    }, 0)
    
    return (
        <button className="button" onClick={props.onClick}>       
            <span className="icon"><Cart/></span>
            <span>Your Cart</span>
            <span className="badge">{numberOfCartItems}</span>
        </button>
    )
}
