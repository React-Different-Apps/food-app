import React,{useState} from "react";
import Header from './components/Layout/Header'
import Meals from './components/Meal/Meals'
import CartModal from './components/Cart/CartModals'
import CartProvider from './store/CartProvider'
function App() {
  const [CartIsShown, setCartIsShown]=useState(false)

  // Close cart modal function
  const showCartHandler=()=>{
    setCartIsShown(true)
  }
  
  // open cart modal function
  const hideCartHandler=()=>{
    setCartIsShown(false)
  }
  return (
    <CartProvider>
     {CartIsShown && <CartModal onHideCart={hideCartHandler} />}
     <Header onShowCart={showCartHandler}/>
     <Meals />
    </CartProvider>
  );
}

export default App;
