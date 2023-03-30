import React,{useState,Fragment,useRef} from "react";

import '../UI/Form.css'
import ErrorModel from "../UI/ErrorModel";
// import Wrapper from '../Helpers/wrapper'

let Form = (props)=>{
let [name,setName] = useState('')
let [age,setAge] = useState('')

let [error,setError] =useState()

let nameInputRef=useRef()
let ageInputRef = useRef()


let formSubmit =(event)=>{
// Using Refs ere
    let Enteredname = nameInputRef.current.value
    let Enteredage = ageInputRef.current.value

event.preventDefault();
// Here we have given conditions
if(Enteredname.trim().length === 0  || Enteredage.length === 0){
    setError({
        title:'Invalid Input',
        message:'Please enter a valid name and age (non-empty values)'
    })
    return;
}

if(Enteredage <= 0){
    setError({
        title:'Invalid Input',
        message:'Please enter a valid age'
    })
}

let data={Uname:name,Uage:age,id:Math.random()}
props.data(data)
setName('')
setAge('')
}

let nameListener = (event)=>{
    console.log(event.target.value)
    setName(event.target.value);
}

let ageListener = (event)=>{
    console.log(event.target.value)
    setAge(event.target.value)

}


// if(error){
//     return(
//     <div>
//     <ErrorModel title={error.title} message={error.message}/>
//     <h1> Error Page</h1>
// <div className="form-page">
// <div className="form-body">
// <form onSubmit={formSubmit}>
//     <label>Enter Your Name:</label>
//     <input type="text" value={name} onInput={nameListener}/>
//     <label>Enter Your Age:</label>
//     <input type="number" value={age} onChange={ageListener}/>
//     <button type="submit">Add</button>
// </form>
// </div>
// </div>
// </div>
//     )
// }

return(
    <Fragment>
         {error && <ErrorModel title={error.title} message={error.message} error={setError}/>}
<div className="form-page">
    <div className="form-body">
    <form onSubmit={formSubmit}>
        <label>Enter Your Name:</label>
        <input type="text" value={name} onInput={nameListener} ref={nameInputRef}/>
        <label>Enter Your Age:</label>
        <input type="number" value={age} onChange={ageListener} ref={ageInputRef}/>
        <button type="submit">Add</button>
    </form>
    </div>
</div>
</Fragment>
)}


export default Form