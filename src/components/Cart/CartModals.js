import './CartModal.css'
import Modal from '../Ui/Modal'
import { useContext } from 'react'
import CartContext from '../../store/CartContext'
import CartItem from './CartItem'

const CartModal = (props) => {

    const cartContext=useContext(CartContext)
    const totalAmount=`{$${cartContext.totalAmount.toFixed(2)}}`
   
    const hasItems=cartContext.items.length > 0

   
    
     const cartItems=cartContext.items.map((item) => (
         <li><CartItem 
         key={item.id}
         name={item.name} 
         amount={item.amount} 
         price={item.price}/></li>
        
     ))
    return (
        <Modal onClose={props.onHideCart}>
          <ul className="cart-items">
              {cartItems}
          </ul>
          <div className="total">
              <span>Total Amount</span>
              <span>{totalAmount}</span>
          </div>
          <div className="actions">
              <button className="button--alt" onClick={props.onHideCart}>Close</button>
              {hasItems && <button button className="button">Order</button>}
          </div>
        </Modal>
    )
}

export default CartModal
