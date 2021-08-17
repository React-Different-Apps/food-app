import { Fragment } from "react";
import { HeaderCartButton } from "./HeaderCartButton";
import  './Header.css'
import header from '../../assets/images/meals.jpg'

const Header = props =>{
    return (
        <Fragment>
          <header className='header'>
		     <h1>ReactMeals</h1>
			 <HeaderCartButton onClick={props.onShowCart}/>
		  </header>  
		  <div className='main-image'>
            <img src={header} alt="Food" />
		  </div>
		
        </Fragment>
    )
    
}
export default Header