import CartContext from "./CartContext"
import { useReducer } from "react"

//useReducer initial state 
const defaultCartState={
    items:[],
    totalAmount:0
}

// useReducer Function
const cartReducer =(state, action)=>{
    if(action.type === "ADD"){
       
        const updatedTotalAmount=state.totalAmount + action.item.price * action.item.amount
      
        const existingCartItemIndex=state.items.findIndex(
            (item)=>  item.id === action.item.id
        )

        const existingCartItem = state.items[existingCartItemIndex]
        
        let updatedItems

        if(existingCartItem){
           const updatedItem={
                ...existingCartItem,
                amount:existingCartItem.amount + action.item.amount
            }
            updatedItems=[...state.items]
            updatedItems[existingCartItemIndex]= updatedItem
        }else{
           updatedItems=state.items.concat(action.item)
        }

        

        return({
            items:updatedItems,
            totalAmount:updatedTotalAmount
        })
    }
    return defaultCartState
}

const CartProvider = (props) => {
   
    // useReducer    
    const [cartState,dispatchCartAction]=useReducer(cartReducer,defaultCartState)

    const addItemToCartHandler =(item)=>{

        dispatchCartAction({
            type:"ADD",
            item:item
        }) 
    }

    const removeItemFromCartHandler=(id)=>{
        dispatchCartAction({
            type:"Remove",
            id:id
        }) 
    }

    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
           {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
