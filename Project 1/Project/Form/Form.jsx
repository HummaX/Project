import React,{useState} from "react";

import '../style.css'
import Button from "../Button/Button";
import Div from "../Div/Div";

let Form = (props)=>{
    let [goal,setGoal]=useState('')
    let [isValid,notValid] = useState(true)

let inputHandler=(event)=>{

    if(event.target.value.trim().length > 0){
        notValid(true)
    }
    setGoal(event.target.value)
    console.log(event.target.value)
}


let submitHandler = (event)=>{
    event.preventDefault();

    if(goal.length > 0){ // condition to not add empty data
    let dataSaving={
        goal:goal,
        id:Math.random().toString()
    }
    props.goalFetcher(dataSaving)
    console.log(dataSaving)
    setGoal('')
}else{notValid(false)}
}

    return(
        // InLine Styling
        // <form onSubmit={submitHandler} className='form'>
        //     <label style={{color: isValid ? 'green' : 'red'}}>Add New Goal!</label>
        //     <input value={goal} type="text" onChange={inputHandler} style={{backgroundColor: isValid ? 'green' : 'red'}}/>
        //     <button style={{backgroundColor: isValid ? 'green' : 'red', border: isValid ? '10px solid green' : '10px solid red'}}>Add Goal!</button>
        // </form>

// Toggling Classes Styling



  <form onSubmit={submitHandler}>
    <Div className={`form ${isValid ? 'valid' : 'invalid'}`}>
     
    {/* // toggling class with if else */}
    {/* could let this invalid to be empty */}
  
        <label>Add New Goal!</label>
            <input value={goal} type="text" onChange={inputHandler}/>
            {goal.length === 0 && <p style={{marginLeft:'30%',marginTop:'0px'}}> Please Enter a Value</p>}
            {/* <button>Add Goal!</button> */}
            <Button>  Add New Goal!  </Button>
            </Div>
        </form>

            
    )
}

export default Form