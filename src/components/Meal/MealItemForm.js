import './MealItemForm.css'
import Input from '../Ui/Input'
import { useRef, useState } from 'react'

const MealItemForm = (props) => {
    
    // useState
   const [enteredAmountIsValid, setEnteredAmountIsValid]=useState(true)

    // useRef function
    const amountInputRef=useRef()

    // onsubmit function
    const onSubmitHandler =(event)=>{
    event.preventDefault()
    
    const enteredAmount=amountInputRef.current.value
    const enteredAmountNumber= +enteredAmount

    if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
        setEnteredAmountIsValid(false)
        return           
    }
      props.onAddToCart(enteredAmountNumber)
    }
    return (
        <form className="form" onSubmit={onSubmitHandler}>
            <Input
            ref={amountInputRef} 
            label="Amount"
            input={{
                id:'amount',
                type:'text',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'
            }}
            />
            <button>+ Add</button>
            {!enteredAmountIsValid && <p>please enter a valid amount</p>}
        </form>
    )
}

export default MealItemForm
