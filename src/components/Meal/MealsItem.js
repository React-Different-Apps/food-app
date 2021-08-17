import './MealsItem.css'
import MealItemForm from './MealItemForm'
import { useContext } from 'react'
import CartContext from '../../store/CartContext'
const MealsItem = (props) => {
    const cartContext=useContext(CartContext)
    const addToCartHandler=(amount)=>{
       cartContext.addItem({
           id:props.id,
           amount:amount,
           name:props.name,
           price:props.price
       })
    }
    
    return (
       <li className='meal'> 
        <div>
            <h3>{props.name}</h3>
            <div className='description'>{props.desc}</div>
            <div className='price'>{props.price}</div>
        </div>
        <div><MealItemForm onAddToCart={addToCartHandler}/></div>
       </li> 
    )
}

export default MealsItem
